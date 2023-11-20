import React from "react";
import { galleryImages } from "./utils";
// const galleryImages = React.lazy(() => import("./utils"));
import "./Gallery.css";
export default function Gallery() {
    return (
        <section className="gallery">
            <div className="container">
                <h2 className="gallery__text-headline">Как выглядит Evolution Music</h2>
                <ul className="galley__ul">
                    {galleryImages.map((image, index) => {
                        return <li key={index} className="gallery__ul-li">
                            <img className="gallery__ul-li-img" loading="lazy" src={image}></img>
                        </li>
                    })}

                </ul>
                {/* <div className="gallery__btns">
                    <button className="gallery__btns-btn">Назад</button>
                    <button className="gallery__btns-btn">Вперед</button>
                </div> */}
            </div>
        </section>
    )
}