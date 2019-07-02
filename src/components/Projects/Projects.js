import React, { Component } from "react";
import Slider from "../Slider/Slider.js"
import Stack from "../Stack/Stack.js"
import "./projects.css";

class Projects extends Component{
    constructor(props){
        super(props)
    }

    state = {
        stack: 0,
    }

    reload = () => {

    }
    
    handleTechClick1 = () => {
        this.setState({
            stack: 1
        })
    }    

    handleTechClick2 = () => {
        this.setState({
            stack: 2
        })
    }    

    handleTechClick3 = () => {
        this.setState({
            stack: 3
        })
    }    

    

    render(){
        // eslint-disable-next-line default-case
        switch(this.state.stack){
            case(0):
            return(
                <div classname='projects-container'>
                    <div className="slider-container">
                        <Slider
                            techClick={this.handleTechClick1.bind(this)}
                            title = "VGnexus" 
                            thumbnail = "https://i.gyazo.com/e58020e8aa302892a0db5a27353dadb0.png"
                            url = "https://vgnexus.com/"
                            codeUrl = "https://github.com/JackRa88it/VG-Nexus"
                            blurb = "A miniclip like website made to host games and accounts! Socialize with friends on the forums and talk smack in the chat!"
                        />
                        <Slider
                            techClick={this.handleTechClick2.bind(this)}
                            title = "CollectUs"
                            thumbnail = "https://i.gyazo.com/582cdfd3c80d85ad719d9cb74358050a.jpg"
                            codeUrl = "https://github.com/DinhDo2312/ArtCollective"
                            url = "https://stormy-brushlands-10294.herokuapp.com/?fbclid=IwAR3axaknsToSN29k2CIIjPIS0zaARDyoeZ5TOfp9EkWJw7po-zGE5Nhvth8"
                            blurb = "A social networking site where artists find, inspire, and collaborate! This is a project I truly care about and use myself!"
                        />
                        <Slider
                            techClick={this.handleTechClick3.bind(this)}
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
                </div>
            )
            case(1):
            return(
                <div classname='projects-container'>
                    <div className="slider-container">
                        <Slider
                            techClick={this.handleTechClick1.bind(this)}
                            title = "VGnexus" 
                            thumbnail = "https://i.gyazo.com/e58020e8aa302892a0db5a27353dadb0.png"
                            url = "https://vgnexus.com/"
                            codeUrl = "https://github.com/JackRa88it/VG-Nexus"
                            blurb = "A miniclip like website made to host games and accounts! Socialize with friends on the forums and talk smack in the chat!"
                        />
                        <Slider
                            techClick={this.handleTechClick2.bind(this)}
                            title = "CollectUs"
                            thumbnail = "https://i.gyazo.com/582cdfd3c80d85ad719d9cb74358050a.jpg"
                            codeUrl = "https://github.com/DinhDo2312/ArtCollective"
                            url = "https://stormy-brushlands-10294.herokuapp.com/?fbclid=IwAR3axaknsToSN29k2CIIjPIS0zaARDyoeZ5TOfp9EkWJw7po-zGE5Nhvth8"
                            blurb = "A social networking site where artists find, inspire, and collaborate! This is a project I truly care about and use myself!"
                        />
                        <Slider
                            techClick={this.handleTechClick3.bind(this)}
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
                    <div className="stackComponent">
                        <Stack
                            stackNum = {1}
                            techUsed = {["React","MySQL","Socket","Express","Passport","Node","Axios"]}
                        />
                    </div>
                </div>
            )
            case(2):
            return(
                <div classname='projects-container'>
                    <div className="slider-container">
                        <Slider
                            techClick={this.handleTechClick1.bind(this)}
                            title = "VGnexus" 
                            thumbnail = "https://i.gyazo.com/e58020e8aa302892a0db5a27353dadb0.png"
                            url = "https://vgnexus.com/"
                            codeUrl = "https://github.com/JackRa88it/VG-Nexus"
                            blurb = "A miniclip like website made to host games and accounts! Socialize with friends on the forums and talk smack in the chat!"
                        />
                        <Slider
                            techClick={this.handleTechClick2.bind(this)}
                            title = "CollectUs"
                            thumbnail = "https://i.gyazo.com/582cdfd3c80d85ad719d9cb74358050a.jpg"
                            codeUrl = "https://github.com/DinhDo2312/ArtCollective"
                            url = "https://stormy-brushlands-10294.herokuapp.com/?fbclid=IwAR3axaknsToSN29k2CIIjPIS0zaARDyoeZ5TOfp9EkWJw7po-zGE5Nhvth8"
                            blurb = "A social networking site where artists find, inspire, and collaborate! This is a project I truly care about and use myself!"
                        />
                        <Slider
                            techClick={this.handleTechClick3.bind(this)}
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
                    <div className="stackComponent">
                        <Stack
                            stackNum= {2}
                            techUsed = {["JS", "Node", "Express", "Mysql", "Handlebars", "Slick", "Passport"]}
                        />
                    </div>
                </div>
            )
            case(3):
            return(
                <div classname='projects-container'>
                    <div className="slider-container">
                        <Slider
                            techClick={this.handleTechClick1.bind(this)}
                            title = "VGnexus" 
                            thumbnail = "https://i.gyazo.com/e58020e8aa302892a0db5a27353dadb0.png"
                            url = "https://vgnexus.com/"
                            codeUrl = "https://github.com/JackRa88it/VG-Nexus"
                            blurb = "A miniclip like website made to host games and accounts! Socialize with friends on the forums and talk smack in the chat!"
                        />
                        <Slider
                            techClick={this.handleTechClick2.bind(this)}
                            title = "CollectUs"
                            thumbnail = "https://i.gyazo.com/582cdfd3c80d85ad719d9cb74358050a.jpg"
                            codeUrl = "https://github.com/DinhDo2312/ArtCollective"
                            url = "https://stormy-brushlands-10294.herokuapp.com/?fbclid=IwAR3axaknsToSN29k2CIIjPIS0zaARDyoeZ5TOfp9EkWJw7po-zGE5Nhvth8"
                            blurb = "A social networking site where artists find, inspire, and collaborate! This is a project I truly care about and use myself!"
                        />
                        <Slider
                            techClick={this.handleTechClick3.bind(this)}
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
                    <div className="stackComponent">
                        <Stack
                            stackNum = {3}
                            techUsed = {["Node"]}
                        />
                     </div>
                </div>
            )

        }
    }
}

export default Projects;

