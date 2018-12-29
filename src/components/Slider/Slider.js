import React from "react";
import "./Slider.css";

const Slider = (props) => {
    return(
        <div class="card">
        <div className="image">
            <img class="card-img-top" src={props.thumbnail} alt="Card image cap" />
        </div>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <div class="card-text-container">
                    <p class="card-text">{props.blurb}</p>
                </div>
                
            </div>
            <div className="button-case">
                    <a id="site" href={props.url} target="_blank" class="btn btn-info"><i class="fas fa-globe"></i></a>
                    <button type="button" class="btn btn-light" onClick={props.techClick}>Tech</button>
                    <a id="code" href={props.codeUrl} target="_blank" class="btn btn-warning"><i class="fab fa-github"></i></a>
            </div>   
        </div>
    )
}

export default Slider;