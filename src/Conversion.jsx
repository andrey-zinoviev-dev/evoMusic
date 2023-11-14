import React from "react";
import "./Conversion.css";
import Logo from "./assets/LogoTextBlack.png";
// import Image from "./assets/IMG_7083.jpg";

export default function Conversion({scrollToConversion}) {
  //functions
  function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log('yes');
  }

  //refs
  const formRef = React.useRef();

  React.useEffect(() => {
    scrollToConversion && formRef.current.scrollIntoView({behavior: "smooth", block: "center"})
  }, [scrollToConversion])

  return (
    <section className="conversion" ref={formRef}>
      <div className="container">
        <h2 className="conversion__text-headline">Запись на бесплатное занятие</h2>
        <div className="conversion__wrapper">
          <div className="conversion__signature">
            
            {/* <img className="conversion__signature-cover" src={Image}></img> */}
          </div>

          <form onSubmit={(evt) => {
            handleFormSubmit(evt);
          }} className="conversion__form">
            
            {/* <img className="conversion__form-logo" src={Logo}></img> */}
            <div className="conversion__form-wrapper">
              <h3 className="conversion__form-headline">Записаться на бесплатный урок</h3>
              <img className="conversion__signature-cover" src={Logo}></img>
            </div>

            <input className="conversion__form-input" placeholder="Ваше ФИО" type="text"></input>
            <input className="conversion__form-input" placeholder="Ваш номер телефона" type="text"></input>
            <input className="conversion__form-input" placeholder="Сколько занимаетесь музыкой?" type="text"></input>
            <input className="conversion__form-input" placeholder="Ваш email" type="text"></input>
            <button className="conversion__form-btn">Записаться</button>
            {/* <div></div> */}
          </form>
        </div>

      </div>
    </section>
  )
}