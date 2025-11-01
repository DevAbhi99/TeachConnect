import React from "react";
import './Footer.css';

function Footer(){
    return (
        <>
   <div className="footer_main">
    <div className="Help"><h2 id="help">Help</h2></div>
    <div className="footer_btns">
        <span><a href="https://kiit.ac.in/sap/#"><button id="footerbtn">Get User And Password</button></a></span>
        <span id="fb1"><a href="https://kiit.ac.in/sap/semester-registration-process/"><button id="footerbtn">Semester Registration</button></a></span>
        <span id="fb2"><a href="https://kiit.ac.in/sap/know-your-mentor/"><button id="footerbtn">Know Your Mentor</button></a></span>
    </div>
    <div className="EAM">
        <span id="footertext">Know More about <a href="https://kiit.ac.in/sap/eam-kiit-sap/"><button id="eamdiv">EAM DIVISION</button></a></span>
    </div>
   </div>

        </>
    )
}

export default Footer;