import{R as l,j as s}from"./index-d14b2fa3.js";const i="/evoMusic/assets/evoMusic-map-bcda8673.png";function r({scrollToMap:e,setScrollToMap:c}){const a=l.useRef();return l.useEffect(()=>{e&&a.current.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{c(!1)},1e3)},[e]),s.jsx("section",{className:"map",ref:a,children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"map__headline-h",children:"Где мы на карте"}),s.jsxs("div",{className:"map__wrapper",children:[s.jsx("img",{className:"map__img",src:i}),s.jsxs("div",{className:"map__text",children:[s.jsx("h4",{className:"map__text-headline",children:"Как нас найти и с нами связаться"}),s.jsxs("ul",{className:"map__text-ul",children:[s.jsxs("li",{className:"map__text-ul-li",children:[s.jsx("p",{children:"Адрес"}),s.jsx("span",{children:"Москва, Малый Каковинский переулок, 1/8"})]},"address"),s.jsxs("li",{className:"map__text-ul-li",children:[s.jsx("p",{children:"Телефон"}),s.jsx("p",{children:"+7(499)123-45-55"})]},"phone"),s.jsxs("li",{className:"map__text-ul-li",children:[s.jsx("p",{children:"Время работы"}),s.jsx("p",{children:"11:00 - 23: 00 ПН-ВС"})]},"hours")]})]})]})]})})}export{r as default};