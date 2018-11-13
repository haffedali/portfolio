import React from "react";
import "./Slider.css";

const Slider = (props) => {
    return(
        <div class="card">
            <img class="card-img-top" src={props.thumbnail} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.blurb}</p>
                <a href={props.url} class="btn btn-primary">Website</a>
                <a href="#" class="btn btn-warning">SourceCode</a>
            </div>
        </div>
    )
}

export default Slider;