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
            <a href={teacher.link} className="students__ul-li-a teachers__ul-li-a" target="_blank" rel="noopener noreferrer">
              <p>Посмотреть прогресс</p>
              <svg style={{rotate: "-45deg", scale: "0.75"}} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.3877 13.0607C26.9735 12.4749 26.9735 11.5251 26.3877 10.9393L16.8417 1.3934C16.256 0.807612 15.3062 0.807612 14.7204 1.3934C14.1346 1.97918 14.1346 2.92893 14.7204 3.51472L23.2057 12L14.7204 20.4853C14.1346 21.0711 14.1346 22.0208 14.7204 22.6066C15.3062 23.1924 16.256 23.1924 16.8417 22.6066L26.3877 13.0607ZM0.327026 13.5H25.327V10.5H0.327026V13.5Z" fill="white"/>
              </svg>
            </a>
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