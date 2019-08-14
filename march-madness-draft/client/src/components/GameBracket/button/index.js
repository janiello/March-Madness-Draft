import React, { Component } from "react";
import "./style.css";

class Button extends Component {
    render() {
        return(
            <button onClick={this.props.click}>{this.props.name}</button>
        );
    }
}

export default Button;