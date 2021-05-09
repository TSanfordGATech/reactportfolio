import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Tori Sanford</h1>
                <Typed
                    className="typed-text"
                    strings={["Product Manager", "Full stack developer", "Entrepreneur", "Business Woman"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
            </div>

        </div>
    )
}

export default Header;
