import EvoMap from "./assets/evoMusic-map.png";
import "./Map.css";

export default function Map() {
  return (
    <section className="map">
      <div className="container">
        <div className="map__headline-wrapper header-wrapper-margin">
          <p className="map__headline-p">Мы в самом центре Москвы</p>
          <h2 className="map__headline-h">Где мы на карте</h2>
        </div>
        <div className="map__wrapper">
          <img className="map__img" src={EvoMap}></img>
          <div className="map__text">
            <h4 className="map__text-headline">Как нас найти и с нами связаться</h4>
            <ul className="map__text-ul">
              <li className="map__text-ul-li" key="address">
                <p>Адрес</p>
                <span>Москва, Малый Каковинский переулок, 1/8</span>
              </li>
              <li className="map__text-ul-li" key="phone">
                <p>Телефон</p>
                <p>+7(499)123-45-55</p>
              </li>
              <li className="map__text-ul-li" key="hours">
                <p>Время работы</p>
                <p>11:00 - 23: 00 ПН-ВС</p>
              </li>
            </ul>
          </div>
        </div>

        </div>
    </section>
  )
}