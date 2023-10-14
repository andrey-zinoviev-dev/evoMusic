import React from "react";
import Navigation from './Navigation';
import WelcomeImage from './assets/evoMusicLogoNoText 1.png';
export default function Welcome() {
  return (
    <section>
      <Navigation></Navigation>
      <div>
        <h1>Оживи свою музыкальную мечту в Evolution Music School</h1>
        <p>Сможешь спеть на 6.0 баллов песню за 3 месяца (условно)</p>
      </div>
      <img src={WelcomeImage}></img>
    </section>
  )
};