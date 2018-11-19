import React from "react";
import "./Slider.css";

const Slider = (props) => {
    return(
        <div class="card">
        <div classname="image">
            <img class="card-img-top" src={props.thumbnail} alt="Card image cap" />
        </div>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.blurb}</p>
            </div>
            <div className="button-case">
                    <a id="site" href={props.url} target="_blank" class="btn btn-info"><i class="fas fa-globe"></i></a>
                    <a id="code" href={props.codeUrl} target="_blank" class="btn btn-warning"><i class="fab fa-github"></i></a>
            </div>   
        </div>
    )
}

export default Slider;