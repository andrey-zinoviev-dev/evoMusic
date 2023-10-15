import React from "react";
import "./Welcome.css";
import Navigation from './Navigation';
import WelcomeImage from './assets/evoMusicLogoNoText 1.png';
import NextSvg from './assets/angles-down-solid 1.svg'
export default function Welcome() {
  return (
    <section className="welcome">
      <Navigation></Navigation>
      <div className="container container-welcome">
        <div className="welcome__content">
          <div className="welcome__content-text">
            <h1 className="welcome__content-headline">Оживи свою музыкальную мечту в Evolution Music School</h1>
            <p>Сможешь спеть на 6.0 баллов песню за 3 месяца (условно)</p>
          </div>
          <button className="welcome__content-btn">Записаться на бесплатное пробное занятие</button>
          {/* <button className="welcome__btn-scroll"> */}
            <svg className="welcome__content-svg" width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M33.0268 55.1484C31.3527 56.6133 28.634 56.6133 26.9598 55.1484L5.53128 36.3984C3.85717 34.9336 3.85717 32.5547 5.53128 31.0898C7.20538 29.625 9.92413 29.625 11.5982 31.0898L30 47.1914L48.4018 31.1016C50.0759 29.6367 52.7947 29.6367 54.4688 31.1016C56.1429 32.5664 56.1429 34.9453 54.4688 36.4102L33.0402 55.1602L33.0268 55.1484ZM54.4554 13.8984L33.0268 32.6484C31.3527 34.1133 28.634 34.1133 26.9598 32.6484L5.53128 13.8984C3.85717 12.4336 3.85717 10.0547 5.53128 8.58984C7.20538 7.125 9.92413 7.125 11.5982 8.58984L30 24.6914L48.4018 8.60156C50.0759 7.13672 52.7947 7.13672 54.4688 8.60156C56.1429 10.0664 56.1429 12.4453 54.4688 13.9102L54.4554 13.8984Z"/>
            </svg>
          {/* </button> */}
        </div>
      </div>
      <img className="welcome__img" src={WelcomeImage}></img>
    </section>
  )
};