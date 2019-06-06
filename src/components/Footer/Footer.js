import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <div id="footer-container">
            <div className="linkContainer">
                <div class="link"><a href="https://www.linkedin.com/in/haffed-ali-991b1916b/" target="_blank"><i class="fab fa-linkedin"></i></a></div>
                <div class="link"><a href="https://github.com/haffedali" target="_blank"><i class="fab fa-github-square"></i></a></div>
                <div class="link"><a href="https://angel.co/haffed-ali" target="_blank"><i class="fab fa-angellist"></i></a></div>
            </div>
        </div>
    )
}

export default Footer;