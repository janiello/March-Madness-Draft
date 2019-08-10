import React, { Component } from "react";
import "./style.css";
import Teams from "../../../../../teams.json";
//import Button from "../button";
import GameWin1 from "../../../GAMES/gameWin1";


class MidWestGames extends Component {
    
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
            if (teams.Division === "Midwest") {
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
            console.log(this.state.game01[0])
        } else if (this.state.score001[1] > this.state.score001[0]) {
            this.setState({
                gamewin01: this.state.game01[1]
            })
            console.log(this.state.game01[1])
        };
        if (this.state.score001[2] > this.state.score001[3]) {
            this.setState({
                gamewin02: this.state.game01[2]
            })
            console.log(this.state.game01[2])
        } else if (this.state.score001[3] > this.state.score001[2]) {
            this.setState({
                gamewin02: this.state.game01[3]
            })
            console.log(this.state.game01[3])
        };
        if (this.state.score001[4] > this.state.score001[5]) {
            this.setState({
                gamewin03: this.state.game01[4]
            })
            console.log(this.state.game01[4])
        } else if (this.state.score001[5] > this.state.score001[4]) {
            this.setState({
                gamewin03: this.state.game01[4]
            })
            console.log(this.state.game01[5])
        };
        if (this.state.score001[6] > this.state.score001[7]) {
            this.setState({
                gamewin04: this.state.game01[6]
            })
            console.log(this.state.game01[6])
        } else if (this.state.score001[7] > this.state.score001[6]) {
            this.setState({
                gamewin04: this.state.game01[7]
            })
            console.log(this.state.game01[7])
        };
        if (this.state.score001[8] > this.state.score001[9]) {
            this.setState({
                gamewin05: this.state.game01[8]
            })
            console.log(this.state.game01[8])
        } else if (this.state.score001[9] > this.state.score001[8]) {
            this.setState({
                gamewin05: this.state.game01[9]
            })
            console.log(this.state.game01[9])
        };
        if (this.state.score001[10] > this.state.score001[11]) {
            this.setState({
                gamewin06: this.state.game01[10]
            })
            console.log(this.state.game01[10])
        } else if (this.state.score001[11] > this.state.score001[10]) {
            this.setState({
                gamewin06: this.state.game01[11]
            })
            console.log(this.state.game01[11])
        };
        if (this.state.score001[12] > this.state.score001[13]) {
            this.setState({
                gamewin07: this.state.game01[12]
            })
            console.log(this.state.game01[12])
        } else if (this.state.score001[13] > this.state.score001[12]) {
            this.setState({
                gamewin07: this.state.game01[13]
            })
            console.log(this.state.game01[13])
        };
        if (this.state.score001[14] > this.state.score001[15]) {
            this.setState({
                gamewin08: this.state.game01[14]
            })
            console.log(this.state.game01[14])
        } else if (this.state.score001[15] > this.state.score001[14]) {
            this.setState({
                gamewin08: this.state.game01[15]
            })
            console.log(this.state.game01[15])
        };

        // console.log(gameWinner1)
    }, 7000)
    };
    render() {
        const game0001 = this.state.gamewin01;
        const game0002 = this.state.gamewin02;
        const game0003 = this.state.gamewin03;
        const game0004 = this.state.gamewin04;
        const game0005 = this.state.gamewin05;
        const game0006 = this.state.gamewin06;
        const game0007 = this.state.gamewin07;
        const game0008 = this.state.gamewin08;

        // console.log(animal)
        return (
            <div>
                {/* <Button click={this.handleButton} className="button1" name="Start" /> */}
                <GameWin1 game0001={game0001} game0002={game0002} game0003={game0003} game0004={game0004} game0005={game0005} game0006={game0006} game0007={game0007} game0008={game0008} />
                <div className="regionMW">
                    <div className="egameMW">
                        {this.state.game01[0]}
                        <br />
                        <p className="vsMW"></p>
                        {this.state.game01[1]}
                        <div className="scoreMW">{this.state.score001[0]}</div>
                        <div className="scoreMW2">{this.state.score001[1]}</div>
                    </div>
                    <div className="egameMW">
                        {this.state.game01[2]}
                        <br />
                        <p className="vsMW"></p>
                        {this.state.game01[3]}
                        <div className="scoreMW">{this.state.score001[2]}</div>
                        <div className="scoreMW2">{this.state.score001[3]}</div>
                    </div>
                    <div className="egameMW">
                        {this.state.game01[4]}
                        <br />
                        <p className="vsMW"></p>
                        {this.state.game01[5]}
                        <div className="scoreMW">{this.state.score001[4]}</div>
                        <div className="scoreMW2">{this.state.score001[5]}</div>
                    </div>
                    <div className="egameMW">
                        {this.state.game01[6]}
                        <br />
                        <p className="vsMW"></p>
                        {this.state.game01[7]}
                        <div className="scoreMW">{this.state.score001[6]}</div>
                        <div className="scoreMW2">{this.state.score001[7]}</div>
                    </div>
                    <div className="egameMW">
                        {this.state.game01[8]}
                        <br />
                        <p className="vsMW"></p>
                        {this.state.game01[9]}
                        <div className="scoreMW">{this.state.score001[8]}</div>
                        <div className="scoreMW2">{this.state.score001[9]}</div>
                    </div>
                    <div className="egameMW">
                        {this.state.game01[10]}
                        <br />
                        <p className="vsMW"></p>
                        {this.state.game01[11]}
                        <div className="scoreMW">{this.state.score001[10]}</div>
                        <div className="scoreMW2">{this.state.score001[11]}</div>
                    </div>
                    <div className="egameMW">
                        {this.state.game01[12]}
                        <br />
                        <p className="vsMW"></p>
                        {this.state.game01[13]}
                        <div className="scoreMW">{this.state.score001[12]}</div>
                        <div className="scoreMW2">{this.state.score001[13]}</div>
                    </div>
                    <div className="egameMW">
                        {this.state.game01[14]}
                        <br />
                        <p className="vsMW"></p>
                        {this.state.game01[15]}
                        <div className="scoreMW">{this.state.score001[14]}</div>
                        <div className="scoreMW2">{this.state.score001[15]}</div>
                    </div>
                </div>
</div>
        );
};
};

export default MidWestGames;