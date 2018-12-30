import React, { Component } from "react";
import JS from "./TechLogo/JS.png"
import HTML from "./TechLogo/HTML.png"
import NodePicture from "./TechLogo/Node.jpg"
import MySQL from "./TechLogo/MySQL.png"
import ReactPicture from "./TechLogo/React.png"
import Handlebars from "./TechLogo/Handlebars.png"
import CSS from "./TechLogo/CSS.png"
import Express from "./TechLogo/Express.png"
import "./Stack.css";

class Stack extends Component{
    constructor(props){
        super(props)
    }

    // stackNum = this.props.stackNum;
    render(){
        switch(this.props.stackNum){
            case(1):
                return(
                    <div className="container container-tech">
                        <div className="techRow row">
                            <img className="techBox col-sm" src={ReactPicture}/>
                            <img className="techBox col-sm" src={JS}/>
                            <img className="techBox col-sm" src={HTML}/>
                            <img className="techBox col-sm" src={NodePicture}/>
                            <img className="techBox col-sm" src={MySQL}/>
                            <img className="techBox col-sm" src={CSS}/>
                            <img className="techBox col-sm" src={Express}/>
                        </div>
                    </div>
                )
            case(2):
                return(
                    <div className="container container-tech">
                        <div className="techRow row">
                            <img className="techBox col-sm" src={JS}/>
                            <img className="techBox col-sm" src={Express}/>
                            <img className="techBox col-sm" src={NodePicture}/>
                            <img className="techBox col-sm" src={MySQL}/>
                            <img className="techBox col-sm" src={Handlebars}/>
                            <img className="techBox col-sm" src={HTML}/>
                            <img className="techBox col-sm" src={CSS}/>
                        </div>
                    </div>
                )
            case(3):
                return(
                    <div className="container container-tech">
                        <div className="techRow row">
                            {/* <img className="techBox three" src={JS}/> */}
                            <img id='bamazon' className="techBox three" src={NodePicture}/>
                        </div>
                    </div>
                )
        }
    }
}

export default Stack;