import { questions } from "./utils";
import React from "react";
import "./FAQ.css";
import { motion } from "framer-motion";

export default function FAQ() {
  const [questionsToRender, setQuestionsToRender] = React.useState(questions);

  //variants
  const liVariant = {
    click: {
      display: "block"
    },
    rest: {
      display: "none"
    },
  }

  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq__headline">Остались вопросы?</h2>
        <ul className="faq__ul">
          {/* <li></li> */}
          {questionsToRender.map((question, index) => {
            return <motion.li animate={question.showAnswer ? "click" : "rest"} initial="rest" className="faq__ul-li" onClick={() => {
              setQuestionsToRender((prevValue) => {
                return prevValue.map((prevQuestion) => {
                  return prevQuestion.text === question.text ? {...prevQuestion, showAnswer: prevQuestion.showAnswer ? false : true} : prevQuestion;
                })
              })
            }} key={`question__${index}`}>
              <div className="faq__ul-li-div">
                <p className="faq__ul-li-p">{question.text}</p>
                {question.showAnswer && <motion.p variants={liVariant} className="faq__ul-li-p">{question.answer}</motion.p>}
              </div>
              <motion.svg animate={{rotate: question.showAnswer ? "90deg" : "0deg"}} className="faq__ul-li-p-svg" xmlns="http://www.w3.org/2000/svg" fill="rgb(217, 217, 217)" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></motion.svg>
            </motion.li>
          })}
        </ul>
      </div>
    </section>
  )
}