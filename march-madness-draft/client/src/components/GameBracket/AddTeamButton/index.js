import React, { Component } from "react";
import "./style.css";
import API from "../../../utils/API";
import Teams from "../../../teams.json";
class AddTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
        Teams,
        team1: [],
        User: [],
        UserID: []
    };
   
}
componentDidMount() {
  this.loadUser();
}
loadUser = () => {
    const userLoggedIn = [];
    API.getUsers()
    .then(res => {
        res.data.map(user => {
        if (user.username === "Eduardo") {
 
            userLoggedIn.push(user._id) 
            this.setState({
                User : user,
                UserID : user._id
            });
            };
        })
})
}
handleAddingTeamToUser = (event) => {
    event.preventDefault();
    const addTeams = [];
    const userLoggedIn = [];
    let userID;
    const updatedUserTeam = [];
    let teamSeed;
    Teams.map(teams => {
                if (teams.name === this.props.addteam){
                    addTeams.push(teams);                
                    teamSeed = teams.seed                 
                };
            });
    
    API.saveTeam(
       {
            "id": this.state.UserID,
            "score" : teamSeed
        } )
            .then(res => this.loadUser())
            .catch(err => console.log(err))
                        
        
    };
  
    render() {
        
        return(
                <button className={this.props.children} addteam={this.props.children} onClick={this.handleAddingTeamToUser}>AddTeam</button>
        )
    }
}

export default AddTeam;