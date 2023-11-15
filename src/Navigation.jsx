// import React from "react";
import logo from './assets/Frame 25.png';
import "./Navigation.css";

export default function Navigation() {
  return (
    <header className="header">
      <img className="header__img" src={logo}></img>
      <nav>
        <ul className="header__ul">
          <li className="header__ul-li">
            <button>Преимущества</button>
          </li>
          <li className="header__ul-li">
            <button>Преподаватели</button>
          </li>
          <li className="header__ul-li">
            <button>Контакты</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}