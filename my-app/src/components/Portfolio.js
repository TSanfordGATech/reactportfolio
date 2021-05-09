import React from "react";
import Weather from "./Images/weather.png"
import project2 from "./Images/screenshot.png";
import teamprofiles from "./Images/teampro.png";
import planner from "./Images/planner.png";
import Notetaker from "./Images/note.png";
import hound from "./Images/hs.png";
import codequiz from "./Images/codequiz.png";
import firstport from "./Images/aboutmepage";

const Pofrfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <img className="portfolio-image" src={Weather} alt="Weather Application" />
                </div>
            {/* second one */}
                <div className="image-box-wrapper row justify-content-center">
                    <img className="portfolio-image" src={project2} alt="Team Project Example" />
                </div>
            {/* third one */}
                <div className="image-box-wrapper row justify-content-center">
                    <img className="portfolio-image" src={teamprofiles} alt="Team profiles app" />
                </div>
            {/* 4th one */}
                <div className="image-box-wrapper row justify-content-center">
                    <img className="portfolio-image" src={planner} alt="planner application" />
                </div>
            {/* 5th one */}
                <div className="image-box-wrapper row justify-content-center">
                    <img className="portfolio-image" src={Notetaker} alt="Note taker app" />
                </div>
            {/* 6th one */}
                <div className="image-box-wrapper row justify-content-center">
                    <img className="portfolio-image" src={hound} alt="Team Project one" />
                </div>
            {/* 7th ones */}
                <div className="image-box-wrapper row justify-content-center">
                    <img className="portfolio-image" src={codequiz} alt="Code Quiz Application" />
                </div>
            {/* 8th one */}
                <div className="image-box-wrapper row justify-content-center">
                    <img className="portfolio-image" src={firstport} alt="first about me portfolio html" />
                </div>
            </div>
        </div>
    )
}

export default Pofrfolio;
