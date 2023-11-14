import React from "react";
import { students, categories } from "./utils";
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
  // const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0)

  //refs
  // const categoriesRef = React.useRef();

  // React.useEffect(() => {
  //   categoriesRef.current.children[selectedCategoryIndex].querySelector("button").classList.add('category_active');
  //   // const categoriesToFlter = Array.from(categoriesRef.current.children)
  //   // const categories = categoriesToFlter.filter((filter) => {
  //   //   return filter.classList.length > 0;
  //   // });
  //   // const categoryToHighlight = categories[categories.findIndex((category) => {
  //   //   return category.textContent === selectedCategory;
  //   // })];
  //   // categoryToHighlight.classList.add("active_state");
  // }, [selectedCategoryIndex])

  return (
    <section className="students">
      <div className="container">
        <div>
          {/* <div className="students__text">
            <p className="students__text-p">Наши ученики, нажми на них, чтобы их увидеть и услышать</p>

          </div> */}
          <h2 className="students__text-headline">
              Ученики
          </h2>

          {/* <ul className="students__categories" ref={categoriesRef}>
            {categories.map((category, index) => {
              return <li key={category}>
                <button onClick={() => {
                  // evt.target.style.scale = 
                  setSelectedCategoryIndex((prevValue) => {
                    categoriesRef.current.children[prevValue].querySelector('button').classList.remove('category_active');
                    return index;
                  });
                }}>{category}</button>
              </li>
            })}
          </ul> */}
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