import React, {Component} from 'react';
import classes from "./Contact.module.css";

class Contact extends Component {
    render() {
        return (
            <div className="container">
                Name: <input type="text"/>
                Name: <input type="text"/>
                <button type="button">Submit</button>
            </div>
        );
    }
}

export default Contact;