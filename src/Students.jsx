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

  return (
    <section className="students">
      <div className="container">
        <h2 className="students__headline">
          Ученики
        </h2>
        <ul className="students__categories">
          <li className="students__categories-li">Все</li>
          <li className="students__categories-li">Концерты</li>
          <li className="students__categories-li">Джемы</li>
          <li className="students__categories-li">Съемки</li>
        </ul>
        <ul className="students__ul">
          {students.map((student, index) => {
            return <motion.li initial="rest" animate="rest" variants={studentVariant} whileHover="hover" className="students__ul-li" style={{backgroundImage:`url(/src/assets/${student.image})`}} key={index}>
              <motion.button variants={expVariant} className="students__ul-btn">
                <motion.p variants={pVariant} className="students__ul-li-p">{student.exp}</motion.p>
                <h4 className="students__ul-li-headline">{student.name}</h4>
              </motion.button>

              {/* <img className="students__ul-li-img" src={`/src/assets/${student.image}`}></img> */}
            </motion.li>
          })}
        </ul>
      </div>
    </section>
  )
}