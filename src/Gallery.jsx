import { galleryImages } from "./utils";
import "./Gallery.css";
export default function Gallery() {
    return (
        <section className="gallery">
            <div className="container">
                <div className="gallery__text header-wrapper-margin">
                    <p>Немного фотографий школы</p>
                    <h2 className="gallery__text-headline">Как выглядит Evolution Music</h2>
                </div>
                <ul className="galley__ul">
                    {galleryImages.map((image, index) => {
                        return <li key={index} className="gallery__ul-li">
                            <img className="gallery__ul-li-img" src={image}></img>
                        </li>
                    })}
                    <li key="navigation-ul" className="gallery__ul-li">
                        <button>Назад</button>
                        <button>Вперед</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}