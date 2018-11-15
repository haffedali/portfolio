import React, { Component } from "react";
import './home.css';
import Nav from "../Nav/Nav.js";
import Contact from "../Contact/Contact.js";
import Typewriter from "../Typewriter/Typewriter.js";
import Projects from "../Projects/Projects.js"
import About from "../About/About.js";

class Home extends Component{
    state ={
        display: 'typewriter',
    }

// populatePage = () => {
//     setTimeout(()=>{this.setState({
//         intro: 'done'
//     })}, 6500);
// }
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

// componentDidMount(){
//     this.populatePage()
// }

render(){
    switch(this.state.display){
        case("typewriter"):
            return(
                <div>
                    <Nav
                        projects={this.displaySwitchProjects.bind(this)}
                        typewriter={this.displaySwitchTypewriter.bind(this)} 
                        about={this.displaySwitchAbout.bind(this)} 
                        contact={this.displaySwitchContact.bind(this)}  
                    />
                    <Typewriter />
                </div>
            )
        case("about"):
            return(
                <div>
                    <Nav 
                        projects={this.displaySwitchProjects.bind(this)}
                        typewriter={this.displaySwitchTypewriter.bind(this)} 
                        about={this.displaySwitchAbout.bind(this)} 
                        contact={this.displaySwitchContact.bind(this)}  
                    />
                    <About />
                </div>
            )
        case("projects"):
            return(
                <div>
                    <Nav 
                        projects={this.displaySwitchProjects.bind(this)}
                        typewriter={this.displaySwitchTypewriter.bind(this)} 
                        about={this.displaySwitchAbout.bind(this)} 
                        contact={this.displaySwitchContact.bind(this)}  
                    />
                    <Projects />
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
                </div>
            )
        default:
          //do something
    }
    // if(this.state.intro !== 'done'){
    //     return(
    //         <Typewriter />
    //         )
    // }
    // else {
        // return(
        //     <div>
        //         {/* something other than typewriter here */}
        //         <Nav />
        //         <Typewriter />
        //     </div>
        // )
    // }
    }
}
    

export default Home;