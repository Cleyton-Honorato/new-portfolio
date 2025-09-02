import {
  Home,
  User,
  FileText,
  Image,
  SendHorizonal,
  X,
  LayoutGrid,
} from "lucide-react";

import avatar from "../../assets/avatar-removebg.png";

import "./Header.css";
import { useState } from "react";

export function Header() {
  const [showMenu, toggleMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Cleyton{" "}
          <img src={avatar} alt="Cleyton" className="nav__logo-avatar" />
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <Home className="nav__icon" />
                Início
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <User className="nav__icon" />
                Sobre
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <FileText className="nav__icon" />
                Habilidades
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <Image className="nav__icon" />
                Qualificações
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <SendHorizonal className="nav__icon" />
                Contato
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
