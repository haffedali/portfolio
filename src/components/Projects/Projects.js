import React from "react";
import Slider from "../Slider/Slider.js"
import "./projects.css";

const Projects = () => {
    return(
        <div>
        <Slider
            title = "VGnexus" 
            thumbnail = "/assets/vg.png"
            url = "https://vgnexus.com/"
            blurb = "A miniclip like website made to host games and accounts! Socialize with friends on the forums and talk smack in the chat!"
        />
        <Slider 
            title = "CollectUs"
            thumbnail = "/assets/art.png"
            url = "https://stormy-brushlands-10294.herokuapp.com/?fbclid=IwAR3axaknsToSN29k2CIIjPIS0zaARDyoeZ5TOfp9EkWJw7po-zGE5Nhvth8"
            blurb = "A social networking site where artists could meet, find inspire eachother, and collaborate! This is a project I truly care about and use myself!"
        />
        </div>
    )
    // return(
    //     <div className="bubble-row">
    //         <a href="https://vgnexus.com/"><img src="/assets/vg.png"/></a>
    //         <a href="https://stormy-brushlands-10294.herokuapp.com/?fbclid=IwAR3axaknsToSN29k2CIIjPIS0zaARDyoeZ5TOfp9EkWJw7po-zGE5Nhvth8"><img src="assets/art.png"/></a>
    //         <div className="bubble-three"></div>        
    //     </div>
    // )
}

export default Projects;

