import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
/* import ProfilePic from '../../assets/images/me.jpeg' */

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const myImage = new Image(10, 20);
    myImage.src = '../../assets/images/me.jpeg';
    document.body.appendChild(myImage);


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
            </div>
            <Loader type="line-scale-pulse-out" />
        </>
    );
}

export default Portfolio;