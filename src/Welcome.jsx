import "./Welcome.css";
import Spline from '@splinetool/react-spline';
// import Navigation from './Navigation';
// import WelcomeImage from './assets/evoMusicLogoNoText 1.png';
export default function Welcome({setScrollToConversion}) {
  return (
    <section className="welcome">
      {/* <Navigation></Navigation> */}
        <div className="welcome__content-text">
            <h1 className="welcome__content-headline">Оживи свою музыкальную мечту в Evolution Music School</h1>
            <p className="welcome__content-p">Применяем эволюционный подход к обучению и созданию артиста: сначала запись вокала, потом оттачивание навыков</p>
            {/* <p className="welcome__content-p">Применяем эволюционный подход к обучению и созданию артиста: сначала запись вокала, потом оттачивание навыков. Современное музыкальное образование и саунд-продакшн для всех!</p> */}
            <button onClick={() => {
            setScrollToConversion(true);
            }} className="welcome__content-btn">
              <p style={{margin: 0}}>Записаться на бесплатное пробное занятие</p>
              <svg className="welcome__content-btn-svg" width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.3877 13.0607C51.9735 12.4749 51.9735 11.5251 51.3877 10.9393L41.8417 1.3934C41.256 0.807612 40.3062 0.807612 39.7204 1.3934C39.1346 1.97918 39.1346 2.92893 39.7204 3.51472L48.2057 12L39.7204 20.4853C39.1346 21.0711 39.1346 22.0208 39.7204 22.6066C40.3062 23.1924 41.256 23.1924 41.8417 22.6066L51.3877 13.0607ZM0.327026 13.5H50.327V10.5H0.327026V13.5Z" fill="white"/>
              </svg>
              </button>
        </div>
        <div className="welcome__hint">
          <p style={{margin: 0}}>
            {window.innerWidth > 1024 ? "Нажми на картинку и потяни для вращения" : "Вращай картинку 2 пальцами"}
          </p>
        </div>
        <Spline scene="https://prod.spline.design/csVpLVxG1oh5HjU0/scene.splinecode" />
      {/* <img className="welcome__img" src={WelcomeImage}></img> */}
    </section>
  )
}