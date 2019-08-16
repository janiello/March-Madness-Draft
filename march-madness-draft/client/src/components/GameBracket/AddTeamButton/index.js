import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import Teams from "../../../teams.json";
class AddTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
        Teams,
        team1: []
    };
   
}
// componentDidMount() {
//     const addTeams = [];
//     this.state.Teams.map(teams => {
//         console.log(teams.id)
//                     if (teams.id === this.props.addteam){
//                         addTeams.push(teams);
//                     };
//                 });
//     this.setState({team1: addTeams})
// }
handleAddingTeamToUser = () => {
    const addTeams = [];
    const userLoggedIn = [];
    const userID = [];
    const updatedUserTeam = [];
    let teamSeed;
    Teams.map(teams => {
                if (teams.name === this.props.addteam){
                    addTeams.push(teams);
                    teamSeed = teams.seed
                };
            });
            console.log(this.state.team1)
    API.getUsers()
        .then(res => {
            res.data.map(user => {
        if (user.username === "Eduardo") {
         API.saveTeam({
             "_id" : user._id,
             "teams" : addTeams,
             "score" : teamSeed
         })
                };
            });
               });   

        
    };
  
    render() {
        
        return(
                <button addteam={this.props.children} onClick={this.handleAddingTeamToUser}>AddTeam</button>
        )
    }
}

export default AddTeam;