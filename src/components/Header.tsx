import { useEffect, useState, type CSSProperties } from "react";
import { Menu, X } from "lucide-react";
import { useMagnetic, useScrollSpy } from "../hooks/motion";
import { BrandMark } from "./BrandMark";
import "./Header.css";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#stack", label: "Stack" },
];

const sectionIds = ["inicio", "sobre", "servicos", "projetos", "trajetoria", "stack", "contato"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(sectionIds);
  const cta = useMagnetic<HTMLAnchorElement>(0.25);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="header__inner">
        <a href="#inicio" className="header__logo" onClick={close} aria-label="cleycode — início">
          <span className="header__mark" aria-hidden="true">
            <BrandMark />
          </span>
          <span className="header__name">
            cleycode
            <span className="brand-cursor" aria-hidden="true" />
          </span>
        </a>

        <nav
          id="site-nav"
          className={`header__nav${open ? " is-open" : ""}`}
          aria-label="Principal"
        >
          <ul className="header__links">
            {links.map((link, i) => (
              <li key={link.href} style={{ "--i": i } as CSSProperties}>
                <a
                  href={link.href}
                  className={`header__link${active === link.href.slice(1) ? " is-active" : ""}`}
                  aria-current={active === link.href.slice(1) ? "true" : undefined}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a ref={cta} href="#contato" className="btn btn--primary header__cta" onClick={close}>
            Vamos conversar
          </a>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="icon-btn icon-btn--on-purple header__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
