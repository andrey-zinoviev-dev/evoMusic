import{Y as o,j as s}from"./index-0e24dd73.js";import{q as m}from"./utils-27d38b8a.js";import{m as l}from"./motion-6b793df7.js";function w(){const[r,i]=o.useState(m),n={click:{display:"block"},rest:{display:"none"}};return s.jsx("section",{className:"faq",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"faq__headline",children:"Остались вопросы?"}),s.jsx("ul",{className:"faq__ul",children:r.map((a,t)=>s.jsxs(l.li,{animate:a.showAnswer?"click":"rest",initial:"rest",className:"faq__ul-li",onClick:()=>{i(c=>c.map(e=>e.text===a.text?{...e,showAnswer:!e.showAnswer}:e))},children:[s.jsxs("div",{className:"faq__ul-li-div",children:[s.jsx("p",{className:"faq__ul-li-p",children:a.text}),a.showAnswer&&s.jsx(l.p,{variants:n,className:"faq__ul-li-p",children:a.answer})]}),s.jsx(l.svg,{animate:{rotate:a.showAnswer?"90deg":"0deg"},className:"faq__ul-li-p-svg",xmlns:"http://www.w3.org/2000/svg",fill:"rgb(217, 217, 217)",viewBox:"0 0 448 512",children:s.jsx("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})})]},`question__${t}`))})]})})}export{w as default};
