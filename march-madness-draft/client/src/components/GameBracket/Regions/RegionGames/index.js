import React, { Component } from "react";
import "./style.css";
import Teams from "../../../../teams.json";
import GameWin1 from "../../GAMES/gameWin1";
import GameWin2 from "../../GAMES/gameWin2";
import GameWin3 from "../../GAMES/gameWin3";
import Championship from "../../GAMES/championship";
import Button from "../../button"
import AddTeam from "../../AddTeamButton";
import API from "../../../../utils/API";

class RegionGames extends Component {
    
    state = {
        EastTeams: [],
        WestTeams: [],
        SouthTeams: [],
        MidWestTeams: [],
        game01: [],
        score001: [],
        disable: false,
        teamsID: [],
        color: {color: ""},
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
        this.mounted = true;   
        this.loadTeams();
    

    };
    componentWillUnmount(){   
        this.mounted = false;
    }
   
    // teams are set too a state 
    loadTeams = () => {
        this.mounted= true;
        const eastGames = [];
        const westGames = [];
        const southGames = [];
        const midWestGames =[];
        const Score0001 = [];
        const teamID = [];
        // eslint-disable-next-line
        Teams.map((teams) => {
            if (teams.division === "East") {
                eastGames.push(teams.name)
            this.setState({EastTeams: eastGames})
            }; 
            if (teams.division === "West") {
                westGames.push(teams.name)
            this.setState({WestTeams: westGames})
            }; 
            if (teams.division === "South") {
                southGames.push(teams.name)
            this.setState({SouthTeams: southGames})
            }; 
            if (teams.division === "Midwest") {
                midWestGames.push(teams.name)
            this.setState({MidWestTeams: midWestGames})
            }; 
            teamID.push(teams.id)
        });
        eastGames.forEach(function (element) {
            let min = 70;
            let max = 140;
            element = Math.floor(Math.random() * (max - min) + min);
            Score0001.push(element)
        })
        this.setState({
            score001: Score0001,
            teamsID: teamID
        })
    };
    searchUsersTeam = () => {
        API.getUsers()
        .then( res => {
            res.data.map(users => (
                 // eslint-disable-next-line
                users.teams.map(teamName => {
                     // eslint-disable-next-line
                    this.state.teamsID.map(id => {
                       if(id === teamName.id) {
                          this.setState({color: {color: "red"}})
                       }
                    })
                })
            ))         
            //    disable={{disabled: this.searchUsersTeam ? "false" : "true"}}
        })
    }
    render() {
        const game1 = this.state.gamewin01;
        const game2 = this.state.gamewin02;
        const game3 = this.state.gamewin03;
        const game4 = this.state.gamewin04;
        const game5 = this.state.gamewin05;
        const game6 = this.state.gamewin06;
        const game7 = this.state.gamewin07;
        const game8 = this.state.gamewin08;
        return (
           
            <React.Fragment>
                <Button click={this.handleButton}  name="Start" />
                <GameWin1 game1={game1} game2={game2} game3={game3} game4={game4} game5={game5} game6={game6} game7={game7} game8={game8} />
                <GameWin2 />
                <GameWin3 />
                <Championship />
                <div className="regionE">
                   <div className="egame1">
                   <div className="teamDiv">{this.state.EastTeams[0]}</div> <AddTeam  style={this.state.color} addCSS="addTeamButton td1"  addteam={this.state.EastTeams[0]} />                      
                        <p className="vs"></p>                        
                        <div className="teamDiv">{this.state.EastTeams[1]}</div> <AddTeam addCSS="addTeamButton td2" addteam={this.state.EastTeams[1]} />
                        <div className="score001">{this.state.score001[0]}</div>
                        <div className="score002">{this.state.score001[1]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.EastTeams[2]}</div> <AddTeam addCSS="addTeamButton  td1"  disable={{disabled: this.searchUsersTeam ? "false" : "true"}}  addteam={this.state.EastTeams[2]}/>                     
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.EastTeams[3]}</div> <AddTeam addCSS="addTeamButton td2"  disabled={this.state.disable} addteam={this.state.EastTeams[3]} />
                        <div className="score001">{this.state.score001[2]}</div>
                        <div className="score002">{this.state.score001[3]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.EastTeams[4]}</div> <AddTeam addCSS="addTeamButton  td1" addteam={this.state.EastTeams[4]}/>
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.EastTeams[5]}</div> <AddTeam addCSS="addTeamButton td2" addteam={this.state.EastTeams[5]} />
                        <div className="score001">{this.state.score001[4]}</div>
                        <div className="score002">{this.state.score001[5]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.EastTeams[6]}</div> <AddTeam addCSS="addTeamButton  td1" addteam={this.state.EastTeams[6]}/>
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.EastTeams[7]}</div> <AddTeam addCSS="addTeamButton td2" addteam={this.state.EastTeams[7]} />
                        <div className="score001">{this.state.score001[6]}</div>
                        <div className="score002">{this.state.score001[7]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.EastTeams[8]}</div> <AddTeam addCSS="addTeamButton  td1" addteam={this.state.EastTeams[8]}/>
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.EastTeams[9]}</div> <AddTeam addCSS="addTeamButton td2" addteam={this.state.EastTeams[9]} />
                        <div className="score001">{this.state.score001[8]}</div>
                        <div className="score002">{this.state.score001[9]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.EastTeams[10]}</div> <AddTeam addCSS="addTeamButton  td1" addteam={this.state.EastTeams[10]}/>
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.EastTeams[11]}</div> <AddTeam addCSS="addTeamButton td2" addteam={this.state.EastTeams[11]} />
                        <div className="score001">{this.state.score001[10]}</div>
                        <div className="score002">{this.state.score001[11]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.EastTeams[12]}</div> <AddTeam addCSS="addTeamButton  td1" addteam={this.state.EastTeams[12]}/>
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.EastTeams[13]}</div> <AddTeam addCSS="addTeamButton td2" addteam={this.state.EastTeams[13]} />
                        <div className="score001">{this.state.score001[12]}</div>
                        <div className="score002">{this.state.score001[13]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.EastTeams[14]}</div> <AddTeam addCSS="addTeamButton  td1" addteam={this.state.EastTeams[14]}/>
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.EastTeams[15]}</div> <AddTeam addCSS="addTeamButton td2" addteam={this.state.EastTeams[15]} />
                        <div className="score001">{this.state.score001[14]}</div>
                        <div className="score002">{this.state.score001[15]}</div>
                    </div>
               </div>
                    {/* <GameWin1 game0001={game0001} game0002={game0002} game0003={game0003} game0004={game0004} game0005={game0005} game0006={game0006} game0007={game0007} game0008={game0008} /> */}
                <div className="regionW">
                    <div className="egame1">
                    <div className="teamDiv">{this.state.WestTeams[0]}</div>  <AddTeam addCSS="addTeamButton  td1" addteam={this.state.WestTeams[0]} />               
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.WestTeams[1]}</div>    <AddTeam addCSS="addTeamButton td2" addteam={this.state.WestTeams[1]} />
                        <div className="score001">{this.state.score001[0]}</div>
                        <div className="score002">{this.state.score001[1]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.WestTeams[2]}</div>   <AddTeam addCSS="addTeamButton  td1" addteam={this.state.WestTeams[2]} />
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.WestTeams[3]}</div>    <AddTeam addCSS="addTeamButton td2" addteam={this.state.WestTeams[3]} />
                        <div className="score001">{this.state.score001[2]}</div>
                        <div className="score002">{this.state.score001[3]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.WestTeams[4]}</div>    <AddTeam addCSS="addTeamButton  td1" addteam={this.state.WestTeams[4]} />
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.WestTeams[5]}</div>    <AddTeam addCSS="addTeamButton td2" addteam={this.state.WestTeams[5]} />
                        <div className="score001">{this.state.score001[4]}</div>
                        <div className="score002">{this.state.score001[5]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.WestTeams[6]}</div>    <AddTeam addCSS="addTeamButton  td1" addteam={this.state.WestTeams[6]} />
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.WestTeams[7]}</div>    <AddTeam addCSS="addTeamButton td2" addteam={this.state.WestTeams[7]} />
                        <div className="score001">{this.state.score001[6]}</div>
                        <div className="score002">{this.state.score001[7]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.WestTeams[8]}</div>    <AddTeam addCSS="addTeamButton  td1" addteam={this.state.WestTeams[8]} />
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.WestTeams[9]}</div>    <AddTeam addCSS="addTeamButton td2" addteam={this.state.WestTeams[9]} />
                        <div className="score001">{this.state.score001[8]}</div>
                        <div className="score002">{this.state.score001[9]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.WestTeams[10]}</div>   <AddTeam addCSS="addTeamButton  td1" addteam={this.state.WestTeams[10]} />
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.WestTeams[11]}</div>   <AddTeam addCSS="addTeamButton td2" addteam={this.state.WestTeams[11]} />
                        <div className="score001">{this.state.score001[10]}</div>
                        <div className="score002">{this.state.score001[11]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.WestTeams[12]}</div>   <AddTeam addCSS="addTeamButton  td1" addteam={this.state.WestTeams[12]} />
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.WestTeams[13]}</div>   <AddTeam addCSS="addTeamButton td2" addteam={this.state.WestTeams[13]} />
                        <div className="score001">{this.state.score001[12]}</div>
                        <div className="score002">{this.state.score001[13]}</div>
                    </div>
                    <div className="egame1">
                    <div className="teamDiv">{this.state.WestTeams[14]}</div>   <AddTeam addCSS="addTeamButton  td1" addteam={this.state.WestTeams[14]} />
                        <p className="vs"></p>
                        <div className="teamDiv">{this.state.WestTeams[15]}</div>   <AddTeam addCSS="addTeamButton td2" addteam={this.state.WestTeams[15]} />
                        <div className="score001">{this.state.score001[14]}</div>
                        <div className="score002">{this.state.score001[15]}</div>
                    </div>
                </div>
                <div className="regionS">
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.SouthTeams[0]} />  <div className="teamDivRight">{this.state.SouthTeams[0]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.SouthTeams[1]} />   <div className="teamDivRight">{this.state.SouthTeams[1]}</div> 
                        <div className="scoreLeft1">{this.state.score001[0]}</div>
                        <div className="scoreLeft2">{this.state.score001[1]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.SouthTeams[2]} />  <div className="teamDivRight">{this.state.SouthTeams[2]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4 " addteam={this.state.SouthTeams[3]} />  <div className="teamDivRight"> {this.state.SouthTeams[3]}</div> 
                        <div className="scoreLeft1">{this.state.score001[2]}</div>
                        <div className="scoreLeft2">{this.state.score001[3]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.SouthTeams[4]} />  <div className="teamDivRight">{this.state.SouthTeams[4]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.SouthTeams[5]} />   <div className="teamDivRight">{this.state.SouthTeams[5]}</div> 
                        <div className="scoreLeft1">{this.state.score001[4]}</div>
                        <div className="scoreLeft2">{this.state.score001[5]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.SouthTeams[6]} />  <div className="teamDivRight">{this.state.SouthTeams[6]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.SouthTeams[7]} />   <div className="teamDivRight">{this.state.SouthTeams[7]}</div> 
                        <div className="scoreLeft1">{this.state.score001[6]}</div>
                        <div className="scoreLeft2">{this.state.score001[7]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.SouthTeams[8]} />  <div className="teamDivRight">{this.state.SouthTeams[8]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.SouthTeams[9]} />   <div className="teamDivRight">{this.state.SouthTeams[9]}</div>
                        <div className="scoreLeft1">{this.state.score001[8]}</div>
                        <div className="scoreLeft2">{this.state.score001[9]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.SouthTeams[10]} />  <div className="teamDivRight">{this.state.SouthTeams[10]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.SouthTeams[11]} />   <div className="teamDivRight">{this.state.SouthTeams[11]}</div> 
                        <div className="scoreLeft1">{this.state.score001[10]}</div>
                        <div className="scoreLeft2">{this.state.score001[11]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.SouthTeams[12]} />  <div className="teamDivRight">{this.state.SouthTeams[12]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.SouthTeams[13]} />   <div className="teamDivRight">{this.state.SouthTeams[13]}</div> 
                        <div className="scoreLeft1">{this.state.score001[12]}</div>
                        <div className="scoreLeft2">{this.state.score001[13]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.SouthTeams[14]} />  <div className="teamDivRight">{this.state.SouthTeams[14]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.SouthTeams[15]} />   <div className="teamDivRight">{this.state.SouthTeams[15]}</div> 
                        <div className="scoreLeft1">{this.state.score001[14]}</div>
                        <div className="scoreLeft2">{this.state.score001[15]}</div>
                    </div>
                </div>
                <div className="regionMW">
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.MidWestTeams[0]} />  <div className="teamDivRight">{this.state.MidWestTeams[0]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.MidWestTeams[1]} />   <div className="teamDivRight">{this.state.MidWestTeams[1]}</div> 
                        <div className="scoreLeft1">{this.state.score001[0]}</div>
                        <div className="scoreLeft2">{this.state.score001[1]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.MidWestTeams[2]} />  <div className="teamDivRight">{this.state.MidWestTeams[2]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.MidWestTeams[3]} />   <div className="teamDivRight">{this.state.MidWestTeams[3]}</div> 
                        <div className="scoreLeft1">{this.state.score001[2]}</div>
                        <div className="scoreLeft2">{this.state.score001[3]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.MidWestTeams[4]} />  <div className="teamDivRight">{this.state.MidWestTeams[4]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.MidWestTeams[5]} />  <div className="teamDivRight">{this.state.MidWestTeams[5]}</div> 
                        <div className="scoreLeft1">{this.state.score001[4]}</div>
                        <div className="scoreLeft2">{this.state.score001[5]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.MidWestTeams[6]} />  <div className="teamDivRight">{this.state.MidWestTeams[6]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.MidWestTeams[7]} />  <div className="teamDivRight">{this.state.MidWestTeams[7]}</div>
                        <div className="scoreLeft1">{this.state.score001[6]}</div>
                        <div className="scoreLeft2">{this.state.score001[7]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.MidWestTeams[8]} />  <div className="teamDivRight">{this.state.MidWestTeams[8]}</div>
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.MidWestTeams[9]} />   <div className="teamDivRight">{this.state.MidWestTeams[9]}</div> 
                        <div className="scoreLeft1">{this.state.score001[8]}</div>
                        <div className="scoreLeft2">{this.state.score001[9]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.MidWestTeams[10]} />  <div className="teamDivRight">{this.state.MidWestTeams[10]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.MidWestTeams[11]} />   <div className="teamDivRight">{this.state.MidWestTeams[11]}</div>
                        <div className="scoreLeft1">{this.state.score001[10]}</div>
                        <div className="scoreLeft2">{this.state.score001[11]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.MidWestTeams[12]} />  <div className="teamDivRight">{this.state.MidWestTeams[12]}</div> 
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.MidWestTeams[13]} />   <div className="teamDivRight">{this.state.MidWestTeams[13]}</div>
                        <div className="scoreLeft1">{this.state.score001[12]}</div>
                        <div className="scoreLeft2">{this.state.score001[13]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1 td3" addteam={this.state.MidWestTeams[14]} />  <div className="teamDivRight">{this.state.MidWestTeams[14]}</div>
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1 td4" addteam={this.state.MidWestTeams[15]} />   <div className="teamDivRight">{this.state.MidWestTeams[15]}</div>
                        <div className="scoreLeft1">{this.state.score001[14]}</div>
                        <div className="scoreLeft2">{this.state.score001[15]}</div>
                    </div>
                </div>
                </React.Fragment>
        );
};
};

export default RegionGames;