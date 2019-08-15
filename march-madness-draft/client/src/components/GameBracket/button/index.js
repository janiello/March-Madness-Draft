import React, { Component } from "react";
import "./style.css";

class Button extends Component {
    render() {
        return(
            <button id="Button" onClick={this.props.click}>{this.props.name}</button>
        );
    }
}

export default Button;