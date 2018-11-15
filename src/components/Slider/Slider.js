import React from "react";
import "./Slider.css";

const Slider = (props) => {
    return(
        <div class="card">
            <img class="card-img-top" src={props.thumbnail} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.blurb}</p>
                <a id="site" href={props.url} class="btn btn-primary"><i class="fas fa-globe"></i></a>
                <a id="code" href={props.codeUrl} class="btn btn-warning"><i class="fab fa-github"></i></a>
            </div>
        </div>
    )
}

export default Slider;