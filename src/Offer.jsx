// import React from "react";
import "./Offer.css";
import { aboutSchoolPoints } from "./utils";

// import Photo from "./assets/photo_2023-09-24_01-32-09 1.png";
export default function Offer() {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer__text">
          <div className="offer__text-headline-wrapper">
            <p className="offer__text-p">Немного о школе</p>
            <h2 className="offer__text-headline">Что ты получишь</h2>
          </div>
        </div>
        <div style={{margin: "auto 0"}}>
        <p className="offer__p">То, как ты получаешь информацию, особенно творческую, будет определять, как быстро и глубоко музыка тебя увлечет.</p>
        <p className="offer__p"><b>Evolution Music состоит из некоторых особенностей, которые с легкостью позволят тебе <span className="offer__text-p-span">профессионально петь свои любимые песни и освоить стиль своего любимого исполнителя. А далее- профессиональная запись в студии школы и издание в Правда Records и Craft Core</span></b></p>
        </div>
        <div className="offer__images">
          <div className="offer__images-qoute">
            <svg className="offer__images-qoute-svg" width="95" height="25" viewBox="0 0 80 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.80132 22.6026V24.1026H11.3013H22.6026C28.0076 24.1026 32.404 28.499 32.404 33.904V45.2053C32.404 50.6103 28.0076 55.0066 22.6026 55.0066H11.3013C5.89636 55.0066 1.5 50.6103 1.5 45.2053V39.5546V33.904V21.19C1.5 10.3109 10.3109 1.5 21.19 1.5H22.6026C24.8997 1.5 26.7533 3.35357 26.7533 5.65066C26.7533 7.94776 24.8997 9.80132 22.6026 9.80132H21.19C14.9051 9.80132 9.80132 14.9051 9.80132 21.19V22.6026ZM55.0066 22.6026V24.1026H56.5066H67.8079C73.2129 24.1026 77.6093 28.499 77.6093 33.904V45.2053C77.6093 50.6103 73.2129 55.0066 67.8079 55.0066H56.5066C51.1017 55.0066 46.7053 50.6103 46.7053 45.2053V39.5546V33.904V21.19C46.7053 10.3109 55.5162 1.5 66.3953 1.5H67.8079C70.105 1.5 71.9586 3.35357 71.9586 5.65066C71.9586 7.94776 70.105 9.80132 67.8079 9.80132H66.3953C60.1104 9.80132 55.0066 14.9051 55.0066 21.19V22.6026Z" stroke="white" strokeWidth="3"/>
            </svg>
            <p className="offer__images-qoute-p">Мы <span className="offer__images-qoute-p-span">покажем и научим</span> петь, как <span className="offer__images-qoute-p-span">твой любимый музыкант</span>, тебе осталось его показать</p>
            <svg className="offer__images-qoute-svg" width="95" height="25" viewBox="0 0 80 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M69.6442 34.5663L69.6442 33.0663L68.1442 33.0663L56.8429 33.0663C51.4379 33.0663 47.0416 28.6699 47.0416 23.265L47.0416 11.9636C47.0416 6.55869 51.4379 2.16233 56.8429 2.16232L68.1442 2.16232C73.5492 2.16232 77.9456 6.55869 77.9456 11.9636L77.9456 17.6143L77.9456 23.265L77.9456 35.979C77.9456 46.858 69.1346 55.6689 58.2556 55.6689L56.8429 55.6689C54.5458 55.6689 52.6922 53.8154 52.6922 51.5183C52.6922 49.2212 54.5458 47.3676 56.8429 47.3676L58.2556 47.3676C64.5404 47.3676 69.6442 42.2638 69.6442 35.979L69.6442 34.5663ZM24.4389 34.5663L24.4389 33.0663L22.9389 33.0663L11.6376 33.0663C6.23266 33.0663 1.83629 28.6699 1.83629 23.265L1.83628 11.9637C1.83628 6.55869 6.23265 2.16233 11.6376 2.16233L22.9389 2.16233C28.3439 2.16233 32.7403 6.55869 32.7403 11.9637L32.7403 17.6143L32.7403 23.265L32.7403 35.979C32.7403 46.858 23.9293 55.669 13.0503 55.669L11.6376 55.669C9.34052 55.669 7.48695 53.8154 7.48695 51.5183C7.48695 49.2212 9.34052 47.3676 11.6376 47.3676L13.0503 47.3676C19.3351 47.3676 24.4389 42.2638 24.4389 35.979L24.4389 34.5663Z" stroke="white" strokeWidth="3"/>
            </svg>
          </div>
          <ul className="offer__ul">
            {aboutSchoolPoints.map((point) => {
              return <li className="offer__ul-li" key={point.point}>
                <p className="offer__ul-li-p">{point.point}</p>
                <div className="offer__ul-li-div"></div>
                <p className="offer__ul-li-p">{point.desc}</p>
              </li>
            })}
          </ul>
          {/* <img className="offer__img" src={Photo} alt="Картинка"></img> */}
        </div>
      </div>
      <div className="offer__bg"></div>
      
    </section>
  )
}