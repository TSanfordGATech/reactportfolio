import React from "react";
import Weather from "../Images/weather.png";
import project2 from "../Images/screenshot.png";
// import teamprofiles from "../Images/teampro.png";
// import planner from "../Images/planner.png";
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
                    <a href="https://tsanfordgatech.github.io/WeatherDashboard/" target="_blank">
                       <img className="portfolio-image" src={Weather} alt="Weather Application" /> </a>
                       <p className="portpara"> In this homework assignment we were tasked with building a dashboard based off of a wire frame that was provided. Inside of this application we were tasked with dynamically using JS, Ajax, and APIs to pull in the weather information for the user based off their input. Click on the image above to open the application or click this link to view the <a href="https://github.com/TSanfordGATech/WeatherDashboard" target="_blank"> repo </a> </p>
                        <div className="overflow"></div>

                            {/* puppyplay group project */}
                            <div className="portfolio-image-box">
                            <a href="https://app-puppy-play.herokuapp.com/" target="_blank">
                                <img className="portfolio-image" src={project2} alt="Team Project Example" /></a>
                                <p className="portpara"> This was a team project where we used all of our knowledge for the front end development and back end databases along with API and authentication development.Click on the image above to open the application or click this link to view the <a href="https://github.com/dassoumik/project-2" target="_blank"> repo </a> </p>
                                <div className="overflow"></div>
                            </div>

                             {/* Notetaker */}
                             <div className="portfolio-image-box">
                            <a href="https://notetakergatech.herokuapp.com/" target="_blank">
                                <img className="portfolio-image" src={Notetaker} alt="Note Taker application" /></a>
                                <p className="portpara"> This assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.Click on the image above to open the application or click this link to view the <a href="https://github.com/TSanfordGATech/note-taker" target="_blank"> repo </a> </p>
                                <div className="overflow"></div>
                            </div>

                               {/* Hound and Seek */}
                               <div className="portfolio-image-box">
                            <a href="https://tsanfordgatech.github.io/HoundandSeek/" target="_blank">
                                <img className="portfolio-image" src={hound} alt="Note Taker application" /></a>
                                <p className="portpara"> Purpose of this application was to utalize APIs, JavaScript, Jquery, and front end devlopment to build an application that would allow a user to review animal breeds and look up rescue facilities near them. Click on the image above to open the application or click this link to view the <a href="https://github.com/TSanfordGATech/HoundandSeek" target="_blank"> repo </a> </p>
                                <div className="overflow"></div>
                            </div>

                                 {/* CodeQuiz */}
                                 <div className="portfolio-image-box">
                            <a href="https://tsanfordgatech.github.io/CodeQuiz/" target="_blank">
                                <img className="portfolio-image" src={codequiz} alt="Note Taker application" /></a>
                                <p className="portpara"> This project was CSS/bootstrap homework assignment where we were tasked with using Javascript to create and online code quiz. The quiz will add or remove points based off correct or incorrect answers. Additionally, this application is timed and will end with the time is up. Click on the image above to open the application or click this link to view the <a href="https://github.com/TSanfordGATech/CodeQuiz" target="_blank"> repo </a> </p>
                                <div className="overflow"></div>
                            </div>

                                   {/* First portfolio */}
                                   <div className="portfolio-image-box">
                            <a href="https://tsanfordgatech.github.io/responsive-portfolio/" target="_blank">
                                <img className="portfolio-image" src={firstport} alt="Note Taker application" /></a>
                                <p className="portpara"> This project was to build my first portfolio. I have included it on my react portfolio to show the learning progress I have made. Click on the image above to open the application or click this link to view the <a href="https://github.com/TSanfordGATech/responsive-portfolio" target="_blank"> repo </a> </p>
                                <div className="overflow"></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
