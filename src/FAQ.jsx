import { questions } from "./utils"
export default function FAQ() {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq__headline">Остались вопросы?</h2>
        <ul className="faq__ul">
          {/* <li></li> */}
          {questions.map((question, index) => {
            return <li key={`question__${index}`}>{question}</li>
          })}
        </ul>
      </div>
    </section>
  )
}