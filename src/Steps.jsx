import { steps } from "./utils";

export default function Steps() {
    return (
        <section className="steps">
            <div className="container">
                <h2 className="steps__headline">Как проходит учебный процесс</h2>
                <ul className="steps__ul">
                    {steps.map((step,index) => {
                        return <li key={`step_${index}`}>
                            <p>{step}</p>
                        </li>
                        // return <li key=`step_${index}`></li>
                    })}
                </ul>
            </div>
        </section>
    )
};