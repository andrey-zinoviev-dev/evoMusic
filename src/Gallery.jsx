import { galleryImages } from "./utils";
import "./Gallery.css";
export default function Gallery() {
    return (
        <section className="gallery">
            <div className="container">
                <h2 className="gallery__headline">Как выглядит наша школа</h2>
                <ul className="galley__ul">
                    {galleryImages.map((image, index) => {
                        return <li key={index} className="gallery__ul-li">
                            <img className="gallery__ul-li-img" src={`/src/assets/${image}`}></img>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
};