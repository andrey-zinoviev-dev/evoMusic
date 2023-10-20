import "./Conversion.css";
export default function Conversion() {
  //functions
  function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log('yes');
  }

  return (
    <section className="conversion">
      <div className="container">
        <h2 className="conversion__headline">Запись на занятие</h2>
        <form onSubmit={(evt) => {
          handleFormSubmit(evt);
        }} className="conversion__form">
          <input className="conversion__form-input" placeholder="Ваше ФИО" type="text"></input>
          <input className="conversion__form-input" placeholder="Ваш номер телефона" type="text"></input>
          <input className="conversion__form-input" placeholder="Сколько занимаетесь музыкой?" type="text"></input>
          <input className="conversion__form-input" placeholder="Ваш email" type="text"></input>
          <button className="conversion__form-btn">Записаться</button>
        </form>
      </div>
    </section>
  )
}