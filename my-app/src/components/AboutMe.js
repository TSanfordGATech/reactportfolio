import React from "react";
import author from "../smaller.jpg"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>Who am I.....</h1>
                    <p>
                        Hello! I am Tori. I am located in Georgia. I am a Product Manager for Acuity Brands. I have been with the company for five years in roles from Leadership, BSA in technology, to PM in Technology. I am also a Full-Stack Web Developer. I completed my Full Stack course with GA Tech in May of 2021. Technologies I use Mern (MongoDB, Express, ReactJS, and NodeJS). I also have experiance with all of the basics such as HTML, HTML5, CSS, SQL, JS ES6, MySQL, and starter foundations like Bootstrap.<br></br>
                        <br></br>
                        My goal is to continue my career as a Product Manager with continued focus in expanding my developer knowledge. I am results focused with strong aptitude for identifying and resolving business challenges. I have a strong skill set with lean corporate environments with heavy focus on identifying, analyzing, and eliminating waste from business processes. I am accomplished in creating solutions that meet business, customer, target audience,
                        and stakeholders expectations.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
