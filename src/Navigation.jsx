// import React from "react";
import logo from './assets/Frame 25.png';
import "./Navigation.css";

export default function Navigation({setScrollToAdvantages, setScrollToTeachers, setScrollToMap}) {
  return (
    <header className="header">
      <img className="header__img" src={logo}></img>
      <nav>
        <ul className="header__ul">
          <li className="header__ul-li">
            <button onClick={() => {
              setScrollToAdvantages(true);
            }}>Преимущества</button>
          </li>
          <li className="header__ul-li">
            <button onClick={() => {
              setScrollToTeachers(true);
            }}>Преподаватели</button>
          </li>
          <li className="header__ul-li">
            <button onClick={() => {
              setScrollToMap(true);
            }}>Контакты</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}