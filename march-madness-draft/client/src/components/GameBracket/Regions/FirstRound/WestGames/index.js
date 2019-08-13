import React, { Component } from "react";
import "./style.css";
import Teams from "../../../../../teams.json";
//import Button from "../button";
import GameWin1 from "../../../GAMES/gameWin1";


class WestGames extends Component {
    
    state = {
        Teams,
        game01: [],
        game02: [],
        score001: [],
        disabled: false,
        gamewin01: "",
        gamewin02: "",
        gamewin03: "",
        gamewin04: "",
        gamewin05: "",
        gamewin06: "",
        gamewin07: "",
        gamewin08: ""
    };

    componentDidMount() {
        const Game1 = [];
        const Score1 = [];
        const Score0001 = [];
        // eslint-disable-next-line
        this.state.Teams.map(teams => {
            if (teams.Division === "West") {
                Game1.push(teams.name);
                Score1.push(teams.wins)
            }
        });
        Score1.forEach(function (element) {
            let min = 35;
            let max = 101;
            element = Math.floor(Math.random() * (max - min) + min);
            Score0001.push(element)
        })
        this.setState({
            game01: Game1,
            score001: Score0001
        })
       
        
        setTimeout(() => {
        if (this.state.score001[0] > this.state.score001[1]) {
            this.setState({
                gamewin01: this.state.game01[0]
            })
        } else if (this.state.score001[1] > this.state.score001[0]) {
            this.setState({
                gamewin01: this.state.game01[1]
            })
        };
        if (this.state.score001[2] > this.state.score001[3]) {
            this.setState({
                gamewin02: this.state.game01[2]
            })
        } else if (this.state.score001[3] > this.state.score001[2]) {
            this.setState({
                gamewin02: this.state.game01[3]
            })
        };
        if (this.state.score001[4] > this.state.score001[5]) {
            this.setState({
                gamewin03: this.state.game01[4]
            })
        } else if (this.state.score001[5] > this.state.score001[4]) {
            this.setState({
                gamewin03: this.state.game01[4]
            })
        };
        if (this.state.score001[6] > this.state.score001[7]) {
            this.setState({
                gamewin04: this.state.game01[6]
            })
        } else if (this.state.score001[7] > this.state.score001[6]) {
            this.setState({
                gamewin04: this.state.game01[7]
            })
        };
        if (this.state.score001[8] > this.state.score001[9]) {
            this.setState({
                gamewin05: this.state.game01[8]
            })
        } else if (this.state.score001[9] > this.state.score001[8]) {
            this.setState({
                gamewin05: this.state.game01[9]
            })
        };
        if (this.state.score001[10] > this.state.score001[11]) {
            this.setState({
                gamewin06: this.state.game01[10]
            })
        } else if (this.state.score001[11] > this.state.score001[10]) {
            this.setState({
                gamewin06: this.state.game01[11]
            })
        };
        if (this.state.score001[12] > this.state.score001[13]) {
            this.setState({
                gamewin07: this.state.game01[12]
            })
        } else if (this.state.score001[13] > this.state.score001[12]) {
            this.setState({
                gamewin07: this.state.game01[13]
            })
        };
        if (this.state.score001[14] > this.state.score001[15]) {
            this.setState({
                gamewin08: this.state.game01[14]
            })
        } else if (this.state.score001[15] > this.state.score001[14]) {
            this.setState({
                gamewin08: this.state.game01[15]
            })
        };

    }, 7000)
    };
    render() {
        const game01 = this.state.gamewin01;
        const game02 = this.state.gamewin02;
        const game03 = this.state.gamewin03;
        const game04 = this.state.gamewin04;
        const game05 = this.state.gamewin05;
        const game06 = this.state.gamewin06;
        const game07 = this.state.gamewin07;
        const game08 = this.state.gamewin08;

        return (
            <div>
            
                <GameWin1 game01={game01} game02={game02} game03={game03} game04={game04} game05={game05} game06={game06} game07={game07} game08={game08} />
                <div className="regionW">
                    <div className="egame1">
                        {this.state.game01[0]}
                        <br />
                        <p className="vs"></p>
                        {this.state.game01[1]}
                        <div className="score001">{this.state.score001[0]}</div>
                        <div className="score002">{this.state.score001[1]}</div>
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
                    </div>
                </div>
</div>
        );
};
};

export default WestGames;