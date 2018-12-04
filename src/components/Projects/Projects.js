import React from "react";
import Slider from "../Slider/Slider.js"
import "./projects.css";

const Projects = () => {
    return(
        <div>
        <Slider
            title = "VGnexus" 
            thumbnail = "https://i.gyazo.com/e58020e8aa302892a0db5a27353dadb0.png"
            url = "https://vgnexus.com/"
            codeUrl = "https://github.com/JackRa88it/VG-Nexus"
            blurb = "A miniclip like website made to host games and accounts! Socialize with friends on the forums and talk smack in the chat!"
        />
        <Slider 
            title = "CollectUs"
            thumbnail = "https://i.gyazo.com/582cdfd3c80d85ad719d9cb74358050a.jpg"
            codeUrl = "https://github.com/DinhDo2312/ArtCollective"
            url = "https://stormy-brushlands-10294.herokuapp.com/?fbclid=IwAR3axaknsToSN29k2CIIjPIS0zaARDyoeZ5TOfp9EkWJw7po-zGE5Nhvth8"
            blurb = "A social networking site where artists find, inspire, and collaborate! This is a project I truly care about and use myself!"
        />
        <Slider 
            title = "Bamazon"
            thumbnail = "https://cdn-images-1.medium.com/max/1200/1*BK36TSiJLI48i2ZM6ozFdg.jpeg"
            codeUrl = "https://github.com/haffedali/bamazon"
            blurb = "This is a command line interface Node project. Manage your inventory in the manager view, and make your purchases in the customer view!"
        />
        <Slider
            title = "And more to come!"
            thumbnail = "https://c7.uihere.com/files/296/575/586/plus-and-minus-signs-computer-icons-clip-art-plus-sign.jpg"
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

