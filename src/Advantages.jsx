import "./Advantages.css";
// import AdvantageCover from "./assets/the-ultimate-guide-to-buying-micropone-for-recording-studio_1.png";

export default function Advantages() {
  return (
    <section className="advantages">
      <div className="container">
        <h2 className="advantages__text-headline">Почему люди выбирают нас</h2>
        <ul className="advantages__ul">
          <li key="adv_00" className="advantages__ul-li">
            <div className="advantages__ul-li-text">
              <h4 className="advantages__ul-li-headline">Запись голоса</h4>
              <div className="advantages__ul-li-text-color"></div>
              <p className="advantages__ul-li-text-p">Голос сразу записывается во время занятия вокалом для исправления ошибок</p>
            </div>
            <div className="advantages__ul-li-category">
              <svg className="advantages__ul-li-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M96 96V256c0 53 43 96 96 96s96-43 96-96H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V192H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V128H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96S96 43 96 96zM320 240v16c0 70.7-57.3 128-128 128s-128-57.3-128-128V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v24z"/></svg>
              <p className="advantages__ul-li-p">Навыки</p>
            </div>
            {/* <div className="advantages__ul-li-bg"></div> */}
            {/* <div></div> */}
          </li>
          <li key="adv_03" className="advantages__ul-li">
            <div className="advantages__ul-li-text">
              <h4 className="advantages__ul-li-headline">График занятий и заморозка</h4>
              <div className="advantages__ul-li-text-color"></div>
              <p className="advantages__ul-li-text-p">Занятия проходят ежедневно с 11:00 до 23:00 в удобное для тебя время. Уроки можно замораживать бессрочно</p>
            </div>
            <div className="advantages__ul-li-category">
              <svg className="advantages__ul-li-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
              <p className="advantages__ul-li-p">График</p>
            </div>
            {/* <img style={{maxWidth: 87}} src={Advantage4Pic}></img> */}
            {/* <p className="advantages__ul-li-p">выбор времени занятий - выбирает сам ученик в промежутке с 11 до 23; заморозка уроков на любой срок - пока все не выходишь ничего не сгорит</p> */}
          </li>
          <li key="adv_01" className="advantages__ul-li">
            <div className="advantages__ul-li-text">
              <h4 className="advantages__ul-li-headline">Мультинаправленность</h4>
              <div className="advantages__ul-li-text-color"></div>
              <p className="advantages__ul-li-text-p">У нас ты можешь совмещать вокал с другими направлениями, а также посетить уроки сценической психологии и актерского мастерства</p>
            </div>
            <div className="advantages__ul-li-category">
              <svg className="advantages__ul-li-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L328 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H248zM7 7C16.4-2.3 31.6-2.3 41 7l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 41C-2.3 31.6-2.3 16.4 7 7zM471 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L471 7zM7 505c-9.4-9.4-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L41 505c-9.4 9.4-24.6 9.4-33.9 0zm464 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z"/></svg>
              <p className="advantages__ul-li-p">Музыкальность</p>
            </div>
            
            {/* <img style={{maxWidth: 40}} src={Advantage2Pic}></img> */}
            {/* <p className="advantages__ul-li-p">В школе есть комната со сценой и зеркалами, в которой идет отработка поведения при выступлении,  зажимов и стеснений при выступлении, а также сценической речи</p> */}
          </li>
          <li key="adv_02" className="advantages__ul-li">
            <div className="advantages__ul-li-text">
              <h4 className="advantages__ul-li-headline">Наследие</h4>
              <div className="advantages__ul-li-text-color"></div>
              <p className="advantages__ul-li-text-p">Вместе с нашими партнерами мы записываем для учеников их первые клипы и песни, которые останутся с ними навсегда</p>
            </div>
            <div className="advantages__ul-li-category">
              <svg className="advantages__ul-li-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40l-104 104H512zM294.1 32H201.9l-1 1L73.9 160h92.1l1-1 127-127zM64 32C28.7 32 0 60.7 0 96v64H6.1l1-1 127-127H64zM512 192H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192z"/></svg>
              <p className="advantages__ul-li-p">Запись</p>
            </div>
            
            {/* <p className="advantages__ul-li-p">Профессионально записываем песни в студии в школе и снимаем клипы видео продакшеном, а также издаем творчество через партнеров Правда Records и Craft Core</p> */}
          </li>
          <li key="adv_04" className="advantages__ul-li">
            <div className="advantages__ul-li-text">
              <h4 className="advantages__ul-li-headline">Мастеринг и издание</h4>
              <div className="advantages__ul-li-text-color"></div>
              <p className="advantages__ul-li-text-p">Индивидуальная услуга по продвижению твоего творчества: мастеринг, профиль артиста в соцсетях, организация концертов в Москве нашими партнерами</p>
            </div>
            <div className="advantages__ul-li-category">
              <svg className="advantages__ul-li-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"/></svg>
              <p className="advantages__ul-li-p">Продвижение</p>
            </div>
          </li>
          <li key="adv_05" className="advantages__ul-li">
            <div className="advantages__ul-li-text">
              <h4 className="advantages__ul-li-headline">Комфорт и профессионализм</h4>
              <div className="advantages__ul-li-text-color"></div>
              <p className="advantages__ul-li-text-p">Мы работаем с действующими музыкантами-универсалами с большим опытом работы, а занятия проходят строго по твоим потребностям</p>
            </div>
            <div className="advantages__ul-li-category">
              <svg className="advantages__ul-li-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/></svg>
              <p className="advantages__ul-li-p">Продвижение</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="advantages__cover"></div>
      {/* <img className="advantages__cover"></img> */}
    </section>
  )
}