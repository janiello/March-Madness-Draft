import React, { Component } from "react";
import "./style.css";
import API from "../../../utils/API";
import Teams from "../../../teams.json";
class AddTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
        Teams: []
    };
   
}
    handleAddingTeamToUser = () => {
        const addTeams = [];
        Teams.map(teams => {
            if (teams.name === this.props.addteam){
                addTeams.push(teams)
            }
        })
        API.getUsers()
        .then(res => {
            res.data.map(user => {
        if (user.username === "Eduardo") {
            
        };
    });
       });
       console.log(addTeams)
           
        
    };
  
    render() {
        return(
                <button addteam={this.props.children} onClick={this.handleAddingTeamToUser}>AddTeam</button>
        )
    }
}

export default AddTeam;