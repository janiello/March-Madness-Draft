import React, { Component } from "react";
import "./style.css";
import Teams from "../../../../../teams.json";
import GameWin1 from "../../../GAMES/gameWin1";
import GameWin2 from "../../../GAMES/gameWin2";
import GameWin3 from "../../../GAMES/gameWin3";
import Championship from "../../../GAMES/championship";
import Button from "../../../button"
import API from "../../../../../utils/API";
import AddTeam from "../../../AddTeamButton";
//import AddTeam from "../../../AddTeamButton";

class EastGames extends Component {
    
    state = {
        Teams: [],
        // game01: [],
        // game02: [],
        // score001: [],
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
        // const Game1 = [];

        // eslint-disable-next-line
        // this.state.Teams.map(teams => {
        //     if (teams.Division === "East") {
        //         Game1.push(teams.name);
        //     }
        // });
        // this.setState({
        //     game01: Game1
        // })
        this.loadUser();
       this.loadTeams();

    }
    
    loadUser = () => {
        const user = [];
        //grab users from the database
        API.getUsers()
      .then(res => {
         // console.log(res.data)
          // eslint-disable-next-line
        res.data.map(users => {
          //   console.log(users.username)
            if(users.username === "Eduardo") {
            user.push(users);
        this.setState({ user: user});
      //  console.log(this.state.user)  
        }
        })
    })
      .catch(err => console.log(err));
  };

    loadTeams = () => {
        
         const eastGames = [];
        // const Score1 = [];
        // const Score0001 = [];
        // eslint-disable-next-line
        Teams.map((teams, i) => {
            if (teams.Division === "East") {
                eastGames.push(teams.name)
            this.setState({Teams: eastGames})
            };   
        });
        console.log(eastGames)
        // Score1.forEach(function (element) {
        //     let min = 35;
        //     let max = 101;
        //     element = Math.floor(Math.random() * (max - min) + min);
        //     Score0001.push(element)
        // })
        // this.setState({
        //     game01: Game1,
        //     score001: Score0001
        // })
    };
    //     setTimeout(() => {
    //     if (this.state.score001[0] > this.state.score001[1]) {
    //         this.setState({
    //             gamewin01: this.state.game01[0]
    //         })
    //     } else if (this.state.score001[1] > this.state.score001[0]) {
    //         this.setState({
    //             gamewin01: this.state.game01[1]
    //         })
    //     };
    //     if (this.state.score001[2] > this.state.score001[3]) {
    //         this.setState({
    //             gamewin02: this.state.game01[2]
    //         })
    //     } else if (this.state.score001[3] > this.state.score001[2]) {
    //         this.setState({
    //             gamewin02: this.state.game01[3]
    //         })
    //     };
    //     if (this.state.score001[4] > this.state.score001[5]) {
    //         this.setState({
    //             gamewin03: this.state.game01[4]
    //         })
    //     } else if (this.state.score001[5] > this.state.score001[4]) {
    //         this.setState({
    //             gamewin03: this.state.game01[4]
    //         })
    //     };
    //     if (this.state.score001[6] > this.state.score001[7]) {
    //         this.setState({
    //             gamewin04: this.state.game01[6]
    //         })
    //     } else if (this.state.score001[7] > this.state.score001[6]) {
    //         this.setState({
    //             gamewin04: this.state.game01[7]
    //         })
    //     };
    //     if (this.state.score001[8] > this.state.score001[9]) {
    //         this.setState({
    //             gamewin05: this.state.game01[8]
    //         })
    //     } else if (this.state.score001[9] > this.state.score001[8]) {
    //         this.setState({
    //             gamewin05: this.state.game01[9]
    //         })
    //     };
    //     if (this.state.score001[10] > this.state.score001[11]) {
    //         this.setState({
    //             gamewin06: this.state.game01[10]
    //         })
    //     } else if (this.state.score001[11] > this.state.score001[10]) {
    //         this.setState({
    //             gamewin06: this.state.game01[11]
    //         })
    //     };
    //     if (this.state.score001[12] > this.state.score001[13]) {
    //         this.setState({
    //             gamewin07: this.state.game01[12]
    //         })
    //     } else if (this.state.score001[13] > this.state.score001[12]) {
    //         this.setState({
    //             gamewin07: this.state.game01[13]
    //         })
    //     };
    //     if (this.state.score001[14] > this.state.score001[15]) {
    //         this.setState({
    //             gamewin08: this.state.game01[14]
    //         })
    //     } else if (this.state.score001[15] > this.state.score001[14]) {
    //         this.setState({
    //             gamewin08: this.state.game01[15]
    //         })
    //     };

    // }, 0)
//    };
// handleTeams = () => {
//     Teams.map((teams, i) => {
//         if (teams.Division === "East") {
//             console.log(teams)
//         return (
//             <div>
//            <li key={teams.id}>{teams.name}
//             <br />
//             <p className="vs"></p>
//            </li>
            
//         </div>

          
//         );
        
//         };
//     })
// }
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
                <Button click={this.handleButton} className="button1" name="Start" />
                <GameWin1 game1={game1} game2={game2} game3={game3} game4={game4} game5={game5} game6={game6} game7={game7} game8={game8} />
                <GameWin2 />
                <GameWin3 />
                <Championship />
                <div className="regionE">
                   <div className="egame1">
                   {this.state.Teams[0]} <AddTeam addteam={this.state.Teams[0]}/>
                        <br />
                        <p className="vs"></p>
                        {this.state.Teams[1]} <AddTeam addteam={this.state.Teams[1]} />
                        {/* <div className="score001">{this.state.score001[2]}</div>
                        <div className="score002">{this.state.score001[3]}</div> */}
                    </div>
                    {/* <div className="gameTwo egame1">
                        {this.state.game01[2]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[3]}
                        <div className="score001">{this.state.score001[2]}</div>
                        <div className="score002">{this.state.score001[3]}</div>
                    </div>
                    <div className="gameThree egame1">
                        {this.state.game01[4]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[5]}
                        <div className="score001">{this.state.score001[4]}</div>
                        <div className="score002">{this.state.score001[5]}</div>
                    </div>
                    <div className="gameFour egame1">
                        {this.state.game01[6]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[7]}
                        <div className="score001">{this.state.score001[6]}</div>
                        <div className="score002">{this.state.score001[7]}</div>
                    </div>
                    <div className="gameFive egame1">
                        {this.state.game01[8]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[9]}
                        <div className="score001">{this.state.score001[8]}</div>
                        <div className="score002">{this.state.score001[9]}</div>
                    </div>
                    <div className="gameSix egame1">
                        {this.state.game01[10]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[11]}
                        <div className="score001">{this.state.score001[10]}</div>
                        <div className="score002">{this.state.score001[11]}</div>
                    </div>
                    <div className="gameSeven egame1">
                        {this.state.game01[12]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[13]}
                        <div className="score001">{this.state.score001[12]}</div>
                        <div className="score002">{this.state.score001[13]}</div>
                    </div>
                    <div className="gameEight egame1">
                        {this.state.game01[14]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[15]}
                        <div className="score001">{this.state.score001[14]}</div>
                        <div className="score002">{this.state.score001[15]}</div>
        </div> */}
                       








                    {/* 
                {Teams.map((teams, i) => {
                    if (teams.Division === "East") {
                        //console.log(teams);
                        if (teams.id === 1 || teams.id ===2)
                        return (
                                <div className="egame1">
                                    <li key={teams.id}>{teams.name} <AddTeam key={"teams_" + i}/>
                                    <br />
                                    <p className="vs"></p>
                                    </li>
                                   </div>
                                    );
                                 
            // return (
            //     <div>
            //         <li key={teams.id}>{teams.name} <AddTeam key={"teams_" + i}/>
            //         <br />
            //         <p className="vs"></p>
            //         </li>
                   
                    
            //         );
                };
            })}
                    {/* <div className="egame1">
                    {this.loadTeams()} 
                    </div>
                    <div className="gameTwo egame1">
                        {this.state.game01[2]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[3]}
                        <div className="score001">{this.state.score001[2]}</div>
                        <div className="score002">{this.state.score001[3]}</div>
                    </div>
                    <div className="gameThree egame1">
                        {this.state.game01[4]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[5]}
                        <div className="score001">{this.state.score001[4]}</div>
                        <div className="score002">{this.state.score001[5]}</div>
                    </div>
                    <div className="gameFour egame1">
                        {this.state.game01[6]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[7]}
                        <div className="score001">{this.state.score001[6]}</div>
                        <div className="score002">{this.state.score001[7]}</div>
                    </div>
                    <div className="gameFive egame1">
                        {this.state.game01[8]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[9]}
                        <div className="score001">{this.state.score001[8]}</div>
                        <div className="score002">{this.state.score001[9]}</div>
                    </div>
                    <div className="gameSix egame1">
                        {this.state.game01[10]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[11]}
                        <div className="score001">{this.state.score001[10]}</div>
                        <div className="score002">{this.state.score001[11]}</div>
                    </div>
                    <div className="gameSeven egame1">
                        {this.state.game01[12]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[13]}
                        <div className="score001">{this.state.score001[12]}</div>
                        <div className="score002">{this.state.score001[13]}</div>
                    </div>
                    <div className="gameEight egame1">
                        {this.state.game01[14]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[15]}
                        <div className="score001">{this.state.score001[14]}</div>
                        <div className="score002">{this.state.score001[15]}</div>
        </div> */}
                </div> 
</div>
        );
};
};

export default EastGames;