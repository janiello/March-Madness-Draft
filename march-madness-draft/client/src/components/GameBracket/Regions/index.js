import React, { Component } from "react";
import "./style.css";
import EastGames from "./FirstRound/EastGames";
import WestGames from "./FirstRound/WestGames"
import Wrapper from "../Wrapper";
import SouthGames from "./FirstRound/SouthGames";
import MidWestGames from "./FirstRound/MidWest";
class Regions extends Component {
    render() {
        return (
            <Wrapper>
                <div className="ERgames">
                    <div className="E">
                        <h1>East</h1>
                    </div>
                    <div className="W">
                        <h1>West</h1>
                    </div>
                    <div className="S">
                        <h1>South</h1>
                    </div>
                    <div className="MW">
                        <h1>MidWest</h1>
                    </div>
                    <EastGames />
                    <SouthGames />
                    <WestGames />
                    <MidWestGames />
                </div>
            </Wrapper>
        );
    };
};

export default Regions;