import React from "react";
import logo from './assets/Frame 25.png';
export default function Navigation() {
  return (
    <header>
      <img src={logo}></img>
      <nav>
        <ul>
          <li>
            Абонементы
          </li>
          <li>
            Преподаватели
          </li>
          <li>
            Контакты
          </li>
        </ul>
      </nav>
    </header>
  )
}