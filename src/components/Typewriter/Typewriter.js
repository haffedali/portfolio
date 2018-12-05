import React, { Component } from "react";
import Projects from "../Projects/Projects.js"
import './typewriter.css';

class Typewriter extends Component{

    state = {
        num: 1,
        message: "I'm a developer.",
    }

    // fireSecondMessage = () => {
    //     setTimeout(()=>{this.setState({
    //         num: 2,
    //         message: "I'm a developer"
    //     })}, 3500);
    // }

    // componentDidMount(){
    //     this.fireSecondMessage()
    // }

    render(){
        if(this.state.num === 1){
            return(    
                <div className="backer">
                    <div class="typewriter">
                        <h1>{this.state.message}</h1>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="backer">
                    <div class="typewritertwo">
                        <h1>{this.state.message}</h1>
                    </div>
                    
                </div>
            )
        }

    }
}
export default Typewriter;