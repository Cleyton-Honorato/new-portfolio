import { useEffect, useRef, useState, type RefObject } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Mouse/trackpad users only — touch devices skip hover-driven effects. */
export const hasFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

/** Returns the id of the section currently in the middle of the viewport. */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/**
 * 3D tilt + spotlight: sets --rx/--ry (degrees) and --mx/--my (percent)
 * on the element while the pointer moves over it.
 */
export function useTilt<T extends HTMLElement>(max = 8): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !hasFinePointer() || prefersReducedMotion()) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--rx", `${(0.5 - py) * max}deg`);
        el.style.setProperty("--ry", `${(px - 0.5) * max}deg`);
        el.style.setProperty("--mx", `${px * 100}%`);
        el.style.setProperty("--my", `${py * 100}%`);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return ref;
}

/** Pulls the element slightly toward the cursor (magnetic button). */
export function useMagnetic<T extends HTMLElement>(strength = 0.3): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !hasFinePointer() || prefersReducedMotion()) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      el.style.transform = "";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return ref;
}

/** Counts from 0 to `target` once the element scrolls into view. */
export function useCountUp<T extends HTMLElement>(target: number, duration = 1600) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState(prefersReducedMotion() ? target : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setValue(Math.round(target * (1 - Math.pow(1 - t, 4))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return { ref, value };
}

/**
 * Writes how far the element has scrolled through the viewport (0–1)
 * to its `--progress` CSS variable. Used to "draw" the timeline.
 */
export function useElementProgress<T extends HTMLElement>(): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.style.setProperty("--progress", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.75 - r.top) / r.height;
      el.style.setProperty("--progress", String(Math.max(0, Math.min(1, p))));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return ref;
}
