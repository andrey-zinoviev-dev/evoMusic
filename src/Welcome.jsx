import "./Welcome.css";
import Spline from '@splinetool/react-spline';
// import Navigation from './Navigation';
// import WelcomeImage from './assets/evoMusicLogoNoText 1.png';
export default function Welcome({setScrollToConversion}) {
  return (
    <section className="welcome">
      {/* <Navigation></Navigation> */}
        <div className="welcome__content-text">
            <h1 className="welcome__content-headline header-wrapper-margin">Оживи свою музыкальную мечту в Evolution Music School</h1>
            <p className="welcome__content-p">Применяем эволюционный подход к обучению и созданию артиста: сначала запись вокала, потом оттачивание навыков. Современное музыкальное образование и саунд-продакшн для всех!</p>
            <button onClick={() => {
            setScrollToConversion(true);
            }} className="welcome__content-btn">Записаться на бесплатное пробное занятие</button>
        </div>
        <Spline scene="https://prod.spline.design/csVpLVxG1oh5HjU0/scene.splinecode" />
      {/* <img className="welcome__img" src={WelcomeImage}></img> */}
    </section>
  )
}