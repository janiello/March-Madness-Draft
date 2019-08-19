import React, { Component } from "react";
import "./style.css";
import Teams from "../../../../teams.json";
import GameWin1 from "../../GAMES/gameWin1";
import GameWin2 from "../../GAMES/gameWin2";
import GameWin3 from "../../GAMES/gameWin3";
import Championship from "../../GAMES/championship";
import Button from "../../button"
import AddTeam from "../../AddTeamButton";

class RegionGames extends Component {
    
    state = {
        EastTeams: [],
        WestTeams: [],
        SouthTeams: [],
        MidWestTeams: [],
        game01: [],
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
    
    loadTeams = () => {
        
        const eastGames = [];
        const westGames = [];
        const southGames = [];
        const midWestGames =[];
        const Score0001 = [];
        // eslint-disable-next-line
        Teams.map((teams) => {
            if (teams.Division === "East") {
                eastGames.push(teams.name)
            this.setState({EastTeams: eastGames})
            }; 
            if (teams.Division === "West") {
                westGames.push(teams.name)
            this.setState({WestTeams: westGames})
            }; 
            if (teams.Division === "South") {
                southGames.push(teams.name)
            this.setState({SouthTeams: southGames})
            }; 
            if (teams.Division === "Midwest") {
                midWestGames.push(teams.name)
            this.setState({MidWestTeams: midWestGames})
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
        return (
           
            <div>
                <Button click={this.handleButton}  name="Start" />
                <GameWin1 game1={game1} game2={game2} game3={game3} game4={game4} game5={game5} game6={game6} game7={game7} game8={game8} />
                <GameWin2 />
                <GameWin3 />
                <Championship />
                <div className="regionE">
                   <div className="egame1">
                   {this.state.EastTeams[0]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[0]} />
                        <br />
                        <p className="vs"></p>
                        {this.state.EastTeams[1]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[1]} />
                        <div className="score001">{this.state.score001[0]}</div>
                        <div className="score002">{this.state.score001[1]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.EastTeams[2]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[2]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.EastTeams[3]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[3]} />
                        <div className="score001">{this.state.score001[2]}</div>
                        <div className="score002">{this.state.score001[3]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.EastTeams[4]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[4]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.EastTeams[5]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[5]} />
                        <div className="score001">{this.state.score001[4]}</div>
                        <div className="score002">{this.state.score001[5]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.EastTeams[6]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[6]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.EastTeams[7]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[7]} />
                        <div className="score001">{this.state.score001[6]}</div>
                        <div className="score002">{this.state.score001[7]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.EastTeams[8]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[8]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.EastTeams[9]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[9]} />
                        <div className="score001">{this.state.score001[8]}</div>
                        <div className="score002">{this.state.score001[9]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.EastTeams[10]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[10]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.EastTeams[11]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[11]} />
                        <div className="score001">{this.state.score001[10]}</div>
                        <div className="score002">{this.state.score001[11]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.EastTeams[12]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[12]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.EastTeams[13]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[13]} />
                        <div className="score001">{this.state.score001[12]}</div>
                        <div className="score002">{this.state.score001[13]}</div>
                    </div>
                    <div className="egame1">
                   {this.state.EastTeams[14]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[14]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.EastTeams[15]} <AddTeam addCSS="addTeamButton" addteam={this.state.EastTeams[15]} />
                        <div className="score001">{this.state.score001[14]}</div>
                        <div className="score002">{this.state.score001[15]}</div>
                    </div>
               </div>
                    {/* <GameWin1 game0001={game0001} game0002={game0002} game0003={game0003} game0004={game0004} game0005={game0005} game0006={game0006} game0007={game0007} game0008={game0008} /> */}
                <div className="regionW">
                    <div className="egame1">
                        {this.state.WestTeams[0]}  <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[0]} />
                        <br />
                        <p className="vs"></p>
                        {this.state.WestTeams[1]}    <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[1]} />
                        <div className="score001">{this.state.score001[0]}</div>
                        <div className="score002">{this.state.score001[1]}</div>
                    </div>
                    <div className="egame1">
                        {this.state.WestTeams[2]}   <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[2]} />
                        <br />
                        <p className="vs"></p>
                        {this.state.WestTeams[3]}    <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[3]} />
                        <div className="score001">{this.state.score001[2]}</div>
                        <div className="score002">{this.state.score001[3]}</div>
                    </div>
                    <div className="egame1">
                        {this.state.WestTeams[4]}    <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[4]} />
                        <br />
                        <p className="vs"></p>
                        {this.state.WestTeams[5]}    <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[5]} />
                        <div className="score001">{this.state.score001[4]}</div>
                        <div className="score002">{this.state.score001[5]}</div>
                    </div>
                    <div className="egame1">
                        {this.state.WestTeams[6]}    <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[6]} />
                        <br />
                        <p className="vs"></p>
                        {this.state.WestTeams[7]}    <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[7]} />
                        <div className="score001">{this.state.score001[6]}</div>
                        <div className="score002">{this.state.score001[7]}</div>
                    </div>
                    <div className="egame1">
                        {this.state.WestTeams[8]}    <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[8]} />
                        <br />
                        <p className="vs"></p>
                        {this.state.WestTeams[9]}    <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[9]} />
                        <div className="score001">{this.state.score001[8]}</div>
                        <div className="score002">{this.state.score001[9]}</div>
                    </div>
                    <div className="egame1">
                        {this.state.WestTeams[10]}   <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[10]} />
                        <br />
                        <p className="vs"></p>
                        {this.state.WestTeams[11]}   <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[11]} />
                        <div className="score001">{this.state.score001[10]}</div>
                        <div className="score002">{this.state.score001[11]}</div>
                    </div>
                    <div className="egame1">
                        {this.state.WestTeams[12]}   <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[12]} />
                        <br />
                        <p className="vs"></p>
                        {this.state.WestTeams[13]}   <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[13]} />
                        <div className="score001">{this.state.score001[12]}</div>
                        <div className="score002">{this.state.score001[13]}</div>
                    </div>
                    <div className="egame1">
                        {this.state.WestTeams[14]}   <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[14]} />
                        <br />
                        <p className="vs"></p>
                        {this.state.WestTeams[15]}   <AddTeam addCSS="addTeamButton" addteam={this.state.WestTeams[15]} />
                        <div className="score001">{this.state.score001[14]}</div>
                        <div className="score002">{this.state.score001[15]}</div>
                    </div>
                </div>
                <div className="regionS">
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[0]} />  {this.state.SouthTeams[0]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[1]} />   {this.state.SouthTeams[1]} 
                        <div className="scoreLeft1">{this.state.score001[0]}</div>
                        <div className="scoreLeft2">{this.state.score001[1]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[2]} />  {this.state.SouthTeams[2]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[3]} />   {this.state.SouthTeams[3]} 
                        <div className="scoreLeft1">{this.state.score001[2]}</div>
                        <div className="scoreLeft2">{this.state.score001[3]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[4]} />  {this.state.SouthTeams[4]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[5]} />   {this.state.SouthTeams[5]} 
                        <div className="scoreLeft1">{this.state.score001[4]}</div>
                        <div className="scoreLeft2">{this.state.score001[5]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[6]} />  {this.state.SouthTeams[6]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[7]} />   {this.state.SouthTeams[7]} 
                        <div className="scoreLeft1">{this.state.score001[6]}</div>
                        <div className="scoreLeft2">{this.state.score001[7]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[8]} />  {this.state.SouthTeams[8]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[9]} />   {this.state.SouthTeams[9]} 
                        <div className="scoreLeft1">{this.state.score001[8]}</div>
                        <div className="scoreLeft2">{this.state.score001[9]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[10]} />  {this.state.SouthTeams[10]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[11]} />   {this.state.SouthTeams[11]} 
                        <div className="scoreLeft1">{this.state.score001[10]}</div>
                        <div className="scoreLeft2">{this.state.score001[11]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[12]} />  {this.state.SouthTeams[12]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[13]} />   {this.state.SouthTeams[13]} 
                        <div className="scoreLeft1">{this.state.score001[12]}</div>
                        <div className="scoreLeft2">{this.state.score001[13]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[14]} />  {this.state.SouthTeams[14]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.SouthTeams[15]} />   {this.state.SouthTeams[15]} 
                        <div className="scoreLeft1">{this.state.score001[14]}</div>
                        <div className="scoreLeft2">{this.state.score001[15]}</div>
                    </div>
                </div>
                <div className="regionMW">
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[0]} />  {this.state.MidWestTeams[0]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[1]} />   {this.state.MidWestTeams[1]} 
                        <div className="scoreLeft1">{this.state.score001[0]}</div>
                        <div className="scoreLeft2">{this.state.score001[1]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[2]} />  {this.state.MidWestTeams[2]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[3]} />   {this.state.MidWestTeams[3]} 
                        <div className="scoreLeft1">{this.state.score001[2]}</div>
                        <div className="scoreLeft2">{this.state.score001[3]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[4]} />  {this.state.MidWestTeams[4]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[5]} />   {this.state.MidWestTeams[5]} 
                        <div className="scoreLeft1">{this.state.score001[4]}</div>
                        <div className="scoreLeft2">{this.state.score001[5]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[6]} />  {this.state.MidWestTeams[6]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[7]} />   {this.state.MidWestTeams[7]} 
                        <div className="scoreLeft1">{this.state.score001[6]}</div>
                        <div className="scoreLeft2">{this.state.score001[7]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[8]} />  {this.state.MidWestTeams[8]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[9]} />   {this.state.MidWestTeams[9]} 
                        <div className="scoreLeft1">{this.state.score001[8]}</div>
                        <div className="scoreLeft2">{this.state.score001[9]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[10]} />  {this.state.MidWestTeams[10]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[11]} />   {this.state.MidWestTeams[11]} 
                        <div className="scoreLeft1">{this.state.score001[10]}</div>
                        <div className="scoreLeft2">{this.state.score001[11]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[12]} />  {this.state.MidWestTeams[12]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[13]} />   {this.state.MidWestTeams[13]} 
                        <div className="scoreLeft1">{this.state.score001[12]}</div>
                        <div className="scoreLeft2">{this.state.score001[13]}</div>
                    </div>
                    <div className="egame2">
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[14]} />  {this.state.MidWestTeams[14]} 
                        <br />
                        <p className="vs2"></p>
                        <AddTeam addCSS="addTeamButton1" addteam={this.state.MidWestTeams[15]} />   {this.state.MidWestTeams[15]} 
                        <div className="scoreLeft1">{this.state.score001[14]}</div>
                        <div className="scoreLeft2">{this.state.score001[15]}</div>
                    </div>
                </div>
</div>
        );
};
};

export default RegionGames;