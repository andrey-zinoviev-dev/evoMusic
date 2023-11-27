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
            return <li className="students__ul-li" key={index}>
              {/* <button className="students__ul-btn"> */}
                <img className="students__ul-li-img" src={student.image} alt={student.name}></img>
                <h4 className="students__ul-li-headline">{student.name}</h4>
                <p className="students__ul-li-p">{student.exp}</p>
                <a href={student.link} className="students__ul-li-a" target="_blank" rel="noopener noreferrer">
                  <p>Посмотреть прогресс</p>
                  <svg style={{rotate: "-45deg", scale: "0.75"}} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.3877 13.0607C26.9735 12.4749 26.9735 11.5251 26.3877 10.9393L16.8417 1.3934C16.256 0.807612 15.3062 0.807612 14.7204 1.3934C14.1346 1.97918 14.1346 2.92893 14.7204 3.51472L23.2057 12L14.7204 20.4853C14.1346 21.0711 14.1346 22.0208 14.7204 22.6066C15.3062 23.1924 16.256 23.1924 16.8417 22.6066L26.3877 13.0607ZM0.327026 13.5H25.327V10.5H0.327026V13.5Z" fill="white"/>
                  </svg>
                </a>
              {/* </button> */}

              {/* <img className="students__ul-li-img" src={`/src/assets/${student.image}`}></img> */}
            </li>
          })}
        </ul>
      </div>
    </section>
  )
}