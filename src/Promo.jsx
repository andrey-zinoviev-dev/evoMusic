import React from 'react';
import PromoVideo from "./assets/DEUS EX Mankind Divided - Opening Credits.mp4";
import "./Promo.css";
import { motion } from 'framer-motion';
export default function Promo() {
    const videoRef = React.useRef();
    const [activeVideoPlay, setActiveVideoPlay] = React.useState(false);

    //variants
    // const buttonVariants = {
    //     hover: {
    //         colo
    //     },
    //     rest: {

    //     }
    // };

    return (
        <section className="promo">
            <video className="promo__video" onClick={() => {
                activeVideoPlay ? videoRef.current.pause() : videoRef.current.play();
                setActiveVideoPlay(!activeVideoPlay);
            }} ref={videoRef} muted src={PromoVideo}></video>
            {!activeVideoPlay && <motion.button whileHover={{color: "rgb(255, 255, 255)", fill: "rgb(255, 255, 255)"}} className="promo__btn" onClick={() => {
                videoRef.current.play();
                setActiveVideoPlay(true);
            }}>
                <p className="promo__btn-p">Познакомиться с Evolution Music School</p>
                <motion.svg whileHover={{stroke: "rgb(255, 255, 255)"}} className="promo__btn-svg" width="120" height="120" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9707 75.2342C23.4843 49.0843 43.7088 27.7355 69.1983 14.8255C94.6877 1.91548 123.865 -1.75703 151.759 4.43373C179.652 10.6245 204.536 26.2955 222.171 48.7765C239.806 71.2576 249.1 99.1578 248.47 127.723C247.84 156.289 237.325 183.752 218.716 205.434C200.107 227.115 174.556 241.674 146.417 246.629C118.277 251.584 89.2905 246.628 64.395 232.607C39.4996 218.586 20.236 196.366 9.88651 169.734" stroke="#D9D9D9" strokeWidth="5"/>
                    <path d="M150 125L112.5 146.651L112.5 103.349L150 125Z" fill="#D9D9D9"/>
                </motion.svg>
            </motion.button>}
        </section>
    )
}
