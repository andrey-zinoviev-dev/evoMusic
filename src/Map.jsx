import EvoMap from "./assets/evoMusic-map.png";
export default function Map() {
  return (
    <section className="map">
      <div className="container">
        <img src={EvoMap}></img>
        <div>
          <h4>Как нас найти и с нами связаться</h4>
          <ul>
            <li key="address">
              <p>Адрес</p>
              <span>Москва, Малый Каковинский переулок, 1/8</span>
            </li>
            <li key="phone">
              <p>Телефон</p>
              <p>+7(499)123-45-55</p>
            </li>
            <li key="hours">
              <p>Время работы</p>
              <p>11:00 - 23: 00 ПН-ВС</p>
            </li>
          </ul>
        </div>
        </div>
    </section>
  )
}