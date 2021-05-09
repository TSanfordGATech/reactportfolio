import React from "react";
import faceb from "../Images/fb.png";
import git from "../Images/git.png";
import link from "../Images/link.png";

const Contacts = () => {
    return (
        <div id="contacts" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-center py-5">Lets get in touch!</h1>
                <div className="image-box-wrapper row justify-content-center mx-auto">
                    {/* starting with facebook */}
                    <div className="portfolio-image-box">
                        <a href="https://www.facebook.com/ToriDClark/" target="_blank">
                            <img className="profile-img" src={faceb} alt="Facebook link"  height="200px" width="100px" /> </a>
                        <div className="overflow"></div>
                        {/* github link*/}
                        <div className="portfolio-image-box">
                            <a href="https://github.com/TSanfordGATech/" target="_blank">
                                <img className="profile-img" src={git} alt="github link" height="200px" width="100px" /></a>
                            <div className="overflow"></div>
                        </div>

                        {/* linkin */}
                        <div className="portfolio-image-box">
                            <a href="https://www.linkedin.com/in/tori-clark/" target="_blank">
                                <img className="profile-img" src={link} alt="linkedin link" height="200px" width="100px" /></a>
                            <div className="overflow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts