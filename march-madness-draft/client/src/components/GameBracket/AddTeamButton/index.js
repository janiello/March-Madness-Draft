import React, { Component } from "react";
import "./style.css";

class AddTeam extends Component {
    handleAddTeam = () => {
        console.log("hello")
    }
    render() {
        return(
            <div className="buttonWrap">
                <button onClick={this.handleAddTeam}>AddTeam</button>
            </div>
        )
    }
}

export default AddTeam;