import React, { Component } from "react";
import './home.css';
import Nav from "../Nav/Nav.js";
import Contact from "../Contact/Contact.js";
import Typewriter from "../Typewriter/Typewriter.js";
import Projects from "../Projects/Projects.js"
import About from "../About/About.js";
import Footer from "../Footer/Footer.js"

class Home extends Component{
    state ={
        display: 'typewriter',
        stack: 'none'
    }

displaySwitchProjects = () => {
    this.setState({display: 'projects'})
  }

displaySwitchTypewriter = () => {
    this.setState({display: 'typewriter'})
  }

displaySwitchAbout = () => {
    this.setState({display: 'about'})
  }
displaySwitchContact = () => {
    this.setState({display: 'contact'})
}



render(){
    switch(this.state.display){
        case("typewriter"):
            return(
                <div class="body">
                    <Nav
                        projects={this.displaySwitchProjects.bind(this)}
                        typewriter={this.displaySwitchTypewriter.bind(this)} 
                        about={this.displaySwitchAbout.bind(this)} 
                        contact={this.displaySwitchContact.bind(this)}  
                    />
                    <Typewriter />
                    <Footer />
                </div>
            )
        case("about"):
            return(
                <div class="body">
                    <Nav 
                        projects={this.displaySwitchProjects.bind(this)}
                        typewriter={this.displaySwitchTypewriter.bind(this)} 
                        about={this.displaySwitchAbout.bind(this)} 
                        contact={this.displaySwitchContact.bind(this)}  
                    />
                    <About />
                    <Footer />
                </div>
            )
        case("projects"):
            return(
                <div class="body">
                    <Nav 
                        projects={this.displaySwitchProjects.bind(this)}
                        typewriter={this.displaySwitchTypewriter.bind(this)} 
                        about={this.displaySwitchAbout.bind(this)} 
                        contact={this.displaySwitchContact.bind(this)}  
                    />
                    <Projects 
                    />
                    <Footer />
                </div>
            )
        case("contact"):
            return(
                <div>
                    <Nav 
                        projects={this.displaySwitchProjects.bind(this)}
                        typewriter={this.displaySwitchTypewriter.bind(this)} 
                        about={this.displaySwitchAbout.bind(this)} 
                        contact={this.displaySwitchContact.bind(this)}  
                    />
                    <Contact />
                    <Footer />
                </div>
            )
        default:
          //do something
    }
    }
}
    

export default Home;