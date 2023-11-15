import React from "react";
import EvoMap from "./assets/evoMusic-map.png";
import "./Map.css";

export default function Map({scrollToMap, setScrollToMap}) {

  const MapRef = React.useRef();

  React.useEffect(() => {
    scrollToMap && MapRef.current.scrollIntoView({behavior: "smooth", block: "center"});
    setTimeout(() => {
      setScrollToMap(false);
    }, 1000)
  }, [scrollToMap]);

  return (
    <section className="map" ref={MapRef}>
      <div className="container">
      <h2 className="map__headline-h">Где мы на карте</h2>
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