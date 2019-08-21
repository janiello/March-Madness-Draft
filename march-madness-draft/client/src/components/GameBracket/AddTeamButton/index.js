import React, { Component } from "react";
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
        Users: [],
        disable: false
    };
   
}
componentDidMount() {
    this.loadUser();

}
loadUser = () => {
    const userLoggedIn = [];
    API.getUsers()
    .then(res => {
        // eslint-disable-next-line
        res.data.map(user => {
        if (user.username === "Joe") {
 
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
    // eslint-disable-next-line
    Teams.map(teams => {
         if (teams.name === this.props.addteam){
             addTeams.push(teams);                               
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
    render() {
       
        return(
                <button addteam={this.props.children} onClick={this.handleAddingTeamToUser}  className={this.props.addCSS}>AddTeam</button>
        )
    }
}

export default AddTeam;