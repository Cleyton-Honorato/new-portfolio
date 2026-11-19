import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import motion from "../assets/cleycode-motion.mp4";
import soundtrack from "../assets/cleycode-motion.mp3";
import { profile, socials, stats } from "../data/content";
import { prefersReducedMotion, useCountUp, useMagnetic } from "../hooks/motion";
import { SplitWords } from "./motion/SplitWords";
import { SocialIcon } from "./SocialIcon";
import { MARK_PATHS } from "./brandMarkPaths";
import "./About.css";

const instagram = socials.find((s) => s.id === "instagram")!;
const stack = ["React", "React Native", "Next.js", "Node/NestJS", "PostgreSQL", "AWS", "IA"];

/**
 * The cleycode motion reel. The video file is silent (H.264 plays
 * everywhere); the soundtrack is a separate MP3 kept in sync while
 * sound is on. Both only download when the section gets close, play
 * only while on screen, and start muted. Reduced-motion users start
 * paused and press play themselves.
 */
function useReel() {
  const ref = useRef<HTMLVideoElement>(null);
  const audio = useRef<HTMLAudioElement | null>(null);
  const [src, setSrc] = useState<string>();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const mutedRef = useRef(true);
  const wantsPlay = useRef(!prefersReducedMotion());

  // Lazy source: attach the files ~one screen before the section appears
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const near = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setSrc(motion);
        near.disconnect();
      },
      { rootMargin: "800px 0px" }
    );
    near.observe(video);
    return () => near.disconnect();
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;
    const track = new Audio();
    track.preload = "auto";
    track.loop = true;
    track.src = soundtrack;
    audio.current = track;

    const syncAudio = () => {
      if (mutedRef.current || video.paused) return;
      if (Math.abs(track.currentTime - video.currentTime) > 0.15) track.currentTime = video.currentTime;
      if (track.paused) track.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && wantsPlay.current) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    const onPlay = () => {
      setPlaying(true);
      syncAudio();
    };
    const onPause = () => {
      setPlaying(false);
      track.pause();
    };
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", syncAudio);
    video.addEventListener("seeked", syncAudio);
    return () => {
      observer.disconnect();
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", syncAudio);
      video.removeEventListener("seeked", syncAudio);
      track.pause();
      audio.current = null;
    };
  }, [src]);

  const togglePlay = () => {
    const video = ref.current;
    if (!video) return;
    wantsPlay.current = video.paused;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const toggleMute = () => {
    const video = ref.current;
    const track = audio.current;
    if (!video || !track) return;
    const next = !mutedRef.current;
    mutedRef.current = next;
    setMuted(next);
    if (next) {
      track.pause();
      return;
    }
    wantsPlay.current = true;
    track.currentTime = video.currentTime;
    track.play().catch(() => {});
    if (video.paused) video.play().catch(() => {});
  };

  return { ref, src, playing, muted, togglePlay, toggleMute };
}

const clamp = (v: number, min = -1, max = 1) => Math.min(max, Math.max(min, v));

/**
 * Drives the 3D phone: writes --mx / --my (pointer over the section, -1..1)
 * and --sp (where the phone sits in the viewport, -1 = top … 1 = bottom)
 * on the media box, eased every frame so the device turns smoothly.
 */
function useDevice3D() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const section = (el.closest("section") as HTMLElement | null) ?? el;
    const target = { x: 0, y: 0, s: 0 };
    const now = { x: 0, y: 0, s: 0 };
    let frame = 0;

    const tick = () => {
      now.x += (target.x - now.x) * 0.08;
      now.y += (target.y - now.y) * 0.08;
      now.s += (target.s - now.s) * 0.12;
      section.style.setProperty("--mx", now.x.toFixed(3));
      section.style.setProperty("--my", now.y.toFixed(3));
      section.style.setProperty("--sp", now.s.toFixed(3));
      const moving =
        Math.abs(target.x - now.x) + Math.abs(target.y - now.y) + Math.abs(target.s - now.s) > 0.001;
      frame = moving ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
      target.s = clamp(((r.top + r.height / 2) / window.innerHeight - 0.5) * 2);
      kick();
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = section.getBoundingClientRect();
      target.x = clamp(((e.clientX - r.left) / r.width) * 2 - 1);
      target.y = clamp(((e.clientY - r.top) / r.height) * 2 - 1);
      kick();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      kick();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    section.addEventListener("pointermove", onMove as EventListener);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      section.removeEventListener("pointermove", onMove as EventListener);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return ref;
}

/** Stacked outlines that give the phone body its thickness (px apart). */
const BODY_LAYERS = 14;

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp<HTMLDivElement>(value);
  return (
    <div ref={ref} className="about__stat">
      <strong>
        {current}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export function About() {
  const device = useDevice3D();
  const cta = useMagnetic<HTMLAnchorElement>(0.3);
  const reel = useReel();

  return (
    <section className="about" id="sobre">
      <svg className="about__split" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="about-split-fill" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0" stopColor="#7412bd" />
            <stop offset="0.55" stopColor="#4f0a86" />
            <stop offset="1" stopColor="#2a0645" />
          </linearGradient>
        </defs>
        {/* Desktop: the slab takes the left side, cut by a soft S-curve */}
        <path className="about__split-wide" d="M0 0H55C41 30 55 64 40 100H0Z" fill="url(#about-split-fill)" />
        <path className="about__split-wide about__split-edge" d="M55 0C41 30 55 64 40 100" />
        {/* Stacked (mobile): the slab sits behind the phone, curving across */}
        <path className="about__split-tall" d="M0 0H100V40C70 52 30 34 0 47Z" fill="url(#about-split-fill)" />
        <path className="about__split-tall about__split-edge" d="M100 40C70 52 30 34 0 47" />
      </svg>
      <div className="about__mark" aria-hidden="true">
        <div className="about__mark-frame">
          <svg className="about__mark-brace about__mark-brace--left" viewBox="150 304 134 392">
            <path d={MARK_PATHS.braceLeft} />
          </svg>
          <svg className="about__mark-brace about__mark-brace--right" viewBox="716 304 134 392">
            <path d={MARK_PATHS.braceRight} />
          </svg>
        </div>
      </div>
      <div className="about__bg" aria-hidden="true">
        <span className="about__blob about__blob--a" />
        <span className="about__blob about__blob--b" />
        <span className="about__dots" />
      </div>

      <div className="inner about__inner">
        <div ref={device} className="about__media" data-reveal="scale">
          <div className="about__stage">
            <div className="about__float">
              <div className="about__device">
                {Array.from({ length: BODY_LAYERS }, (_, i) => (
                  <span key={i} className="about__layer" style={{ "--z": i } as CSSProperties} />
                ))}
                {[0, 1, 2].map((i) => (
                  <span key={i} className="about__keys" style={{ "--z": i } as CSSProperties}>
                    <i className="about__key about__key--action" />
                    <i className="about__key about__key--vol-up" />
                    <i className="about__key about__key--vol-down" />
                    <i className="about__key about__key--power" />
                  </span>
                ))}

                <div className="about__phone">
                  <div className="about__screen">
                    <video
                      ref={reel.ref}
                      src={reel.src}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-label="Motion do cleycode com cenas do estúdio, da Academe e da rotina de dev"
                    />
                    <span className="about__island" aria-hidden="true" />
                    <span className="about__glare" aria-hidden="true" />
                    <div className="about__controls">
                      <button
                        type="button"
                        className="about__ctrl"
                        onClick={reel.togglePlay}
                        aria-label={reel.playing ? "Pausar vídeo" : "Reproduzir vídeo"}
                      >
                        {reel.playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
                      </button>
                      <button
                        type="button"
                        className="about__ctrl"
                        onClick={reel.toggleMute}
                        aria-label={reel.muted ? "Ativar som" : "Desativar som"}
                      >
                        {reel.muted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="about__floor" aria-hidden="true" />
          </div>

          <a
            className="about__chip about__chip--ig"
            href={instagram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="about__chip-icon">
              <SocialIcon id="instagram" />
            </span>
            <span>
              <strong>{instagram.handle}</strong>
              <small>Ver no Instagram</small>
            </span>
          </a>
        </div>

        <div className="about__copy">
          <span className="eyebrow" data-reveal>
            Sobre mim
          </span>
          <h2 className="section-title about__title">
            <SplitWords
              segments={["Código no trabalho,", { text: "conteúdo na cleycode.", className: "hl" }]}
              breakAfter={[0]}
            />
          </h2>
          <p className="about__lead" data-reveal>
            Sou dev fullstack em Fortaleza, há {profile.yearsOfExperience} anos no mercado. Hoje
            construo a plataforma da Academe Educação e, no {instagram.handle}, mostro os bastidores
            de quem vive de código.
          </p>

          <ul className="about__stack" data-reveal="stagger" aria-label="Principais tecnologias">
            {stack.map((t, i) => (
              <li key={t} style={{ "--i": i } as CSSProperties}>
                {t}
              </li>
            ))}
          </ul>

          <div className="about__stats" data-reveal>
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>

          <div className="about__actions" data-reveal>
            <a
              ref={cta}
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Seguir {instagram.handle}
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="#contato" className="btn about__ghost">
              Vamos conversar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
