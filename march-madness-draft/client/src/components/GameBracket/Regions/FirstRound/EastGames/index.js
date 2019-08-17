import React, { Component } from "react";
import "./style.css";
import Teams from "../../../../../teams.json";
import GameWin1 from "../../../GAMES/gameWin1";
import GameWin2 from "../../../GAMES/gameWin2";
import GameWin3 from "../../../GAMES/gameWin3";
import Championship from "../../../GAMES/championship";
import Button from "../../../button"
//import API from "../../../../../utils/API";
import AddTeam from "../../../AddTeamButton";
//import AddTeam from "../../../AddTeamButton";

class EastGames extends Component {
    
    state = {
        Teams: [],
         game01: [],
        // game02: [],
         score001: [],
        // disabled: false,
        // gamewin01: "",
        // gamewin02: "",
        // gamewin03: "",
        // gamewin04: "",
        // gamewin05: "",
        // gamewin06: "",
        // gamewin07: "",
        // gamewin08: "",
        user : []
    };
    componentDidMount() {   
       this.loadTeams();
    };
    
//     loadUser = () => {
//         const user = [];
//         //grab users from the database
//         API.getUsers()
//       .then(res => {
//          // console.log(res.data)
//           // eslint-disable-next-line
//         res.data.map(users => {
//           //   console.log(users.username)
//             if(users.username === "Eduardo") {
//             user.push(users);
//         this.setState({ user: user});
//       //  console.log(this.state.user)  
//         }
//         })
//     })
//       .catch(err => console.log(err));
//   };

    loadTeams = () => {
        
        const eastGames = [];
        const Score0001 = [];
        // eslint-disable-next-line
        Teams.map((teams, i) => {
            if (teams.Division === "East") {
                eastGames.push(teams.name)
            this.setState({Teams: eastGames})
            };   
        });
        eastGames.forEach(function (element) {
            let min = 35;
            let max = 101;
            element = Math.floor(Math.random() * (max - min) + min);
            Score0001.push(element)
        })
        this.setState({
            score001: Score0001
        })
    };
  
    render() {
        const game1 = this.state.gamewin01;
        const game2 = this.state.gamewin02;
        const game3 = this.state.gamewin03;
        const game4 = this.state.gamewin04;
        const game5 = this.state.gamewin05;
        const game6 = this.state.gamewin06;
        const game7 = this.state.gamewin07;
        const game8 = this.state.gamewin08;
        console.log(this.state.score001)
        return (
           
            <div>
                <Button click={this.handleButton} className="button1" name="Start" />
                <GameWin1 game1={game1} game2={game2} game3={game3} game4={game4} game5={game5} game6={game6} game7={game7} game8={game8} />
                <GameWin2 />
                <GameWin3 />
                <Championship />
                <div className="regionE">
                   <div className="egame1">
                   {this.state.Teams[0]} <AddTeam className="eastButtons" addteam={this.state.Teams[0]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.Teams[1]} <AddTeam className="eastButtons" addteam={this.state.Teams[1]} />
                        <div className="score001">{this.state.score001[0]}</div>
                        <div className="score002">{this.state.score001[1]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.Teams[2]} <AddTeam addteam={this.state.Teams[2]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.Teams[3]} <AddTeam addteam={this.state.Teams[3]} />
                        <div className="score001">{this.state.score001[2]}</div>
                        <div className="score002">{this.state.score001[3]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.Teams[4]} <AddTeam addteam={this.state.Teams[4]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.Teams[5]} <AddTeam addteam={this.state.Teams[5]} />
                        <div className="score001">{this.state.score001[4]}</div>
                        <div className="score002">{this.state.score001[5]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.Teams[6]} <AddTeam addteam={this.state.Teams[6]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.Teams[7]} <AddTeam addteam={this.state.Teams[7]} />
                        <div className="score001">{this.state.score001[6]}</div>
                        <div className="score002">{this.state.score001[7]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.Teams[8]} <AddTeam addteam={this.state.Teams[8]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.Teams[9]} <AddTeam addteam={this.state.Teams[9]} />
                        <div className="score001">{this.state.score001[8]}</div>
                        <div className="score002">{this.state.score001[9]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.Teams[10]} <AddTeam addteam={this.state.Teams[10]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.Teams[11]} <AddTeam addteam={this.state.Teams[11]} />
                        <div className="score001">{this.state.score001[10]}</div>
                        <div className="score002">{this.state.score001[11]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.Teams[12]} <AddTeam addteam={this.state.Teams[12]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.Teams[13]} <AddTeam addteam={this.state.Teams[13]} />
                        <div className="score001">{this.state.score001[12]}</div>
                        <div className="score002">{this.state.score001[13]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.Teams[14]} <AddTeam addteam={this.state.Teams[14]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.Teams[15]} <AddTeam addteam={this.state.Teams[15]} />
                        <div className="score001">{this.state.score001[14]}</div>
                        <div className="score002">{this.state.score001[15]}</div>
                    </div>
                  
                </div> 
</div>
        );
};
};

export default EastGames;