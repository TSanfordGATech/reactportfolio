import React from "react";
import Weather from "../Images/weather.png";
import project2 from "../Images/screenshot.png";
import teamprofiles from "../Images/teampro.png";
import planner from "../Images/planner.png";
import Notetaker from "../Images/note.png";
import hound from "../Images/hs.png";
import codequiz from "../Images/codequize.png";
import firstport from "../Images/aboutmepage.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";



const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center mx-auto">
                    <div className="portfolio-image-box">
                       <img className="portfolio-image" src={Weather} alt="Weather Application" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                            {/* second one */}
                            <div className="portfolio-image-box">
                                <img className="portfolio-image" src={project2} alt="Team Project Example" />
                                <div className="overflow"></div>
                                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                            </div>
                            {/* third one */}
                            {/* <div className="portfolio-image-box">
                                <img className="portfolio-image" src={teamprofiles} alt="Team profiles app" />
                                <div className="overflow"></div>
                                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                            </div> */}
                            {/* 4th one */}
                            {/* <div className="portfolio-image-box">
                                <img className="portfolio-image" src={planner} alt="planner application" />
                                <div className="overflow"></div>
                                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                            </div> */}
                            {/* 5th one */}
                            <div className="portfolio-image-box">
                                <img className="portfolio-image" src={Notetaker} alt="Note taker app" />
                                <div className="overflow"></div>
                                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                            </div>
                            {/* 6th one */}
                            <div className="portfolio-image-box">
                                <img className="portfolio-image" src={hound} alt="Team Project one" />
                                <div className="overflow"></div>
                                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                            </div>
                            {/* 7th ones */}
                            <div className="portfolio-image-box">
                                <img className="portfolio-image" src={codequiz} alt="Code Quiz Application" />
                                <div className="overflow"></div>
                                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                            </div>
                            {/* 8th one */}
                            <div className="portfolio-image-box">
                                <img className="portfolio-image" src={firstport} alt="first about me portfolio html" />
                                <div className="overflow"></div>
                                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
