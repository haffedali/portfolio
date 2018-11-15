import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Slider.css";

const Slider = (props) => {
    return(
        <div class="card">
            <img class="card-img-top" src={props.thumbnail} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.blurb}</p>
                <a id="site" href={props.url} class="btn btn-primary"></a>
                <a id="code" href="#" class="btn btn-warning"></a>
            </div>
        </div>
    )
}

export default Slider;