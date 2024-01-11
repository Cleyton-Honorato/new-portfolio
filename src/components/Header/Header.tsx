import {
  Home,
  User,
  FileText,
  Briefcase,
  Image,
  SendHorizonal,
  X,
  LayoutGrid,
} from "lucide-react";

import "./Header.css";
import { useState } from "react";

export function Header() {
  const [showMenu, toggleMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Cleyton
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <Home className="nav__icon" />
                home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <User className="nav__icon" />
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <FileText className="nav__icon" />
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <Briefcase className="nav__icon" />
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portifolio" className="nav__link">
                <Image className="nav__icon" />
                Portifolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <SendHorizonal className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>

          <X className="nav__close" onClick={() => toggleMenu(!showMenu)} />
        </div>

        <LayoutGrid
          className="nav__toggle"
          onClick={() => toggleMenu(!showMenu)}
        />
      </nav>
    </header>
  );
}
