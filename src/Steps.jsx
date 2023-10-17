import { steps } from "./utils";

export default function Steps() {
    return (
        <section className="steps">
            <div className="container">
                <h2 className="steps__headline">Как проходит учебный процесс</h2>
                <ul className="steps__ul">
                    {steps.map((step,index) => {
                        return <li key={`step_${index}`}>
                            <h4>{step.desc}</h4>
                            <p></p>
                            {/* <img src={`/src/assets/${step.image}`}></img> */}
                        </li>
                        // return <li key=`step_${index}`></li>
                    })}
                </ul>
            </div>
        </section>
    )
}