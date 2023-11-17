import React from "react";
import "./Teachers.css";
import { teachers } from "./utils";

export default function Teachers({scrollToTeachers, setScrollToTeachers}) {

  const teachersRef = React.useRef();

  React.useEffect(() => {
    scrollToTeachers && teachersRef.current.scrollIntoView({behavior: "smooth", block: "center"});
    setTimeout(() => {
      setScrollToTeachers(false);
    }, 1000);
  }, [scrollToTeachers])

  return <section className="teachers" ref={teachersRef}>
    <div className="container">
      <h2 className="teachers__headline">Педагоги Evolution Music</h2>
      <ul className="teachers__ul">
        {teachers.map((teacher) => {
          return <li key={teacher.name} className="teachers__ul-li">
            <img className="teachers__ul-li-img" loading="lazy" src={teacher.image}></img>
            <h4 className="teachers__ul-li-headline">{teacher.name}</h4>
            <p className="teachers__ul-li-p">{teacher.exp}</p>
            {/* <ul>
              {teacher.favs.map((fav, index) => {
                return <li key={fav + index}>
                  <span>{fav}</span>
                </li>
              })}
            </ul> */}
          </li>
        })}
      </ul>
    </div>

  </section>
}