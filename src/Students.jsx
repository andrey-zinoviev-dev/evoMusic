import React from "react";
import { students } from "./utils";
import { motion } from "framer-motion";
import "./Students.css";

export default function Students() {
  //variants
  const studentVariant = {
    hover: {
      // border: "2px solid rgba(255, 255, 255, 1)",
      scale: 1.05
    },
    rest: {
      // border: "2px solid rgba(255, 255, 255, 0)",
      scale: 1
    },
  };
  const expVariant = {
    hover: {
      backdropFilter: "blur(2px)",
    },
    rest: {
      backdropFilter: "blur(0px)",
    },
  };

  const pVariant = {
    hover: {
      opacity: 1,
    },
    rest: {
      opacity: 0,
    }
  };
  //states
  const [selectedStudent, setSelectedStudent] = React.useState({});
  const [selectedCategory, setSelectedCategory] = React.useState("Все")

  //refs
  const categoriesRef = React.useRef();

  React.useEffect(() => {
    // const categoriesToFlter = Array.from(categoriesRef.current.children)
    // const categories = categoriesToFlter.filter((filter) => {
    //   return filter.classList.length > 0;
    // });
    // const categoryToHighlight = categories[categories.findIndex((category) => {
    //   return category.textContent === selectedCategory;
    // })];
    // categoryToHighlight.classList.add("active_state");
  }, [selectedCategory])

  return (
    <section className="students">
      <div className="container">
        <div>
          <div className="students__text">
            <p className="students__text-p">Наши ученики, нажми на них, чтобы их увидеть и услышать</p>
            <h2 className="students__text-headline">
              Ученики
            </h2>
          </div>

          <ul className="students__categories" ref={categoriesRef}>
            <li className="students__categories-li" onClick={() => {
              setSelectedCategory((prevValue) => {
                // console.log(prevValue);
                // const categoriesToFlter = Array.from(categoriesRef.current.children)
                // const categories = categoriesToFlter.filter((filter) => {
                //   return filter.classList.length > 0;
                // });
                // const categoryToDarken = categories[categories.findIndex((category) => {
                //   return category.textContent === prevValue;
                // })];
                // console.log(categoryToDarken);
                return "Все";
              });
            }}>Все</li>
            <li>
              <svg className="students__categories-li-svg" width="45" height="42" viewBox="0 0 81 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-1.5" x2="85.7378" y2="-1.5" transform="matrix(0.452809 -0.891607 0.990154 0.13998 3 77.4443)" stroke="white" strokeWidth="3"/>
                <line y1="-1.5" x2="85.7378" y2="-1.5" transform="matrix(0.452809 -0.891607 0.990154 0.13998 42 77.4443)" stroke="white" strokeWidth="3"/>
              </svg>
            </li>
            <li className="students__categories-li" onClick={() => {
              // setSelectedCategory();
              setSelectedCategory((prevValue) => {
                // const categoriesToFlter = Array.from(categoriesRef.current.children)
                // const categories = categoriesToFlter.filter((filter) => {
                //   return filter.classList.length > 0;
                // });
                // const categoryToDarken = categories[categories.findIndex((category) => {
                //   return category.textContent === prevValue;
                // })].classList.remove('active_state');
                // console.log(categoryToDarken);
                return "Концерты";
              });
            }}>Концерты</li>
            <li>
            <svg className="students__categories-li-svg" width="45" height="42" viewBox="0 0 81 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-1.5" x2="85.7378" y2="-1.5" transform="matrix(0.452809 -0.891607 0.990154 0.13998 3 77.4443)" stroke="white" strokeWidth="3"/>
                <line y1="-1.5" x2="85.7378" y2="-1.5" transform="matrix(0.452809 -0.891607 0.990154 0.13998 42 77.4443)" stroke="white" strokeWidth="3"/>
              </svg>
            </li>
            <li className="students__categories-li" onClick={() => {
              // setSelectedCategory("Джемы");
              setSelectedCategory((prevValue) => {
                // const categoriesToFlter = Array.from(categoriesRef.current.children)
                // const categories = categoriesToFlter.filter((filter) => {
                //   return filter.classList.length > 0;
                // });
                // const categoryToDarken = categories[categories.findIndex((category) => {
                //   return category.textContent === prevValue;
                // })].classList.remove('active_state')  ;
                // console.log(categoryToDarken);
                return "Джемы";
              });
            }}>Джемы</li>
            <li>
            <svg className="students__categories-li-svg" width="45" height="42" viewBox="0 0 81 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-1.5" x2="85.7378" y2="-1.5" transform="matrix(0.452809 -0.891607 0.990154 0.13998 3 77.4443)" stroke="white" strokeWidth="3"/>
                <line y1="-1.5" x2="85.7378" y2="-1.5" transform="matrix(0.452809 -0.891607 0.990154 0.13998 42 77.4443)" stroke="white" strokeWidth="3"/>
              </svg>
            </li>
            <li className="students__categories-li" onClick={() => {
              // setSelectedCategory("Съемки");
              setSelectedCategory((prevValue) => {
                // const categoriesToFlter = Array.from(categoriesRef.current.children)
                // const categories = categoriesToFlter.filter((filter) => {
                //   return filter.classList.length > 0;
                // });
                // const categoryToDarken = categories[categories.findIndex((category) => {
                //   return category.textContent === prevValue;
                // })];
                // console.log(categoryToDarken);
                // categories[categoryToDarken].classList.remove('active_state');
                return "Съемки";
              });
            }}>Съемки</li>
          </ul>
        </div>
        <ul className="students__ul">
          {students.map((student, index) => {
            return <motion.li initial="rest" animate="rest" variants={studentVariant} whileHover="hover" className="students__ul-li" style={{backgroundImage:`url(${student.image})`}} key={index}>
              <motion.button variants={expVariant} onClick={() => {
                // console.log('yes');
                setSelectedStudent(student);
              }} className="students__ul-btn">
                <motion.p variants={pVariant} className="students__ul-li-p">{student.exp}</motion.p>
                <h4 className="students__ul-li-headline">{student.name}</h4>
              </motion.button>

              {/* <img className="students__ul-li-img" src={`/src/assets/${student.image}`}></img> */}
            </motion.li>
          })}
        </ul>
      </div>
      {selectedStudent.name && <div className="students__selected">
        <div className="students__selected-content">
          <button onClick={() => {
            setSelectedStudent({});
          }}>Закрыть</button>
          <h3 className="students__selected-headline">Как {selectedStudent.name} поет?</h3>
          <div className="students__selected-content-wrapper">
            <img className="students__selected-content-wrapper-img" src={selectedStudent.image}></img>
            <p className="students__selected-content-wrapper-p">{selectedStudent.name} занимается уже {selectedStudent.exp}</p>
          </div>
        </div>
      </div>}
    </section>
  )
}