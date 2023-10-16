import "./Advantages.css";
import advantage1Pic from "./assets/Vector.png";
import Advantage2Pic from "./assets/Group.png";
import Advantage3Pic from "./assets/Group-1.png";
import AdvantageCover from "./assets/the-ultimate-guide-to-buying-micropone-for-recording-studio_1.png";

export default function Advantages() {
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__text">
          <h2 className="advantages__text-headline">Почему люди выбирают нас</h2>
          <p className="advantages__text-p">Мы не просто учим петь, мы сразу работаем с <span className="advantages__text-p-span">произношением</span>, <span className="advantages__text-p-span">зажимами на сцене</span>, а также переносим эти знания на конкретно <span className="advantages__text-p-span">твои задачи и запросы</span></p>
        </div>
        <ul>
          <li key="adv_00">
            <img style={{maxWidth: 210}} src={advantage1Pic}></img>
            <p>Голос сразу записывается во время занятия вокалом, чтобы с первых занятий найти свои слабые места и исправить их. Записи только для использования на занятиях, они никуда не идут</p>
          </li>
          <li key="adv_01">
            <img style={{maxWidth: 40}} src={Advantage2Pic}></img>
            <p>В школе есть комната со сценой и зеркалами, в которой идет отработка поведения при выступлении,  зажимов и стеснений при выступлении, а также сценической речи</p>
          </li>
          <li key="adv_02">
            <img style={{maxWidth: 125}} src={Advantage3Pic}></img>
            <p>Профессионально записываем песни в студии в школе и снимаем клипы видео продакшеном, а также издаем творчество через партнеров Правда Records и Craft Core</p>
          </li>
        </ul>
      </div>
      <img className="advantages__cover" src={AdvantageCover}></img>
    </section>
  )
}