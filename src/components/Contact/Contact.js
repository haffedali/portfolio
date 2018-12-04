import React from "react";
import "./Contact.css";

const Contact = () => {
    return(
    <div className="container">
    <form id="form"method="POST" action="https://formspree.io/haffedmcnair@gmail.com">
        <input id="form-email" type="email" name="email" placeholder="Your email"/>
        <textarea id='form-message' name="message" placeholder="Your message"></textarea>
        <button type='button' class='lead'id='form-button' type="submit">Send</button>
    </form>
    </div>
    )
}

export default Contact;