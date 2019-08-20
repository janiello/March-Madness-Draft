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
        UserID: [],
        Users: []
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
    this.searchUsersTeam();
    const addTeams = [];
    let userID;
    let teamSeed;
    Teams.map(teams => {
         if (teams.name === this.props.addteam){
             addTeams.push(teams);                
             teamSeed = teams.seed                 
                };
            });
    
     if (this.state.User.teams.length > 7){
        alert("your bracket is full");

    } else {
        API.saveTeam(
            {
                "id": this.state.UserID,
            },
            {
                "teams" : addTeams
            })
            .catch(err => console.log(err))                        
;}
};
searchUsersTeam = () => {
    const teamsInArray = []
    API.getUsers()
    .then( res => {
        res.data.map(users => teamsInArray.push(users.teams.name))
        if (teamsInArray === this.props.addteam){
            alert("team taken")
        }
        console.log(teamsInArray)
    })
}

  
    render() {
       
        return(
                <button addteam={this.props.children} onClick={this.handleAddingTeamToUser} className={this.props.addCSS}>AddTeam</button>
        )
    }
}

export default AddTeam;