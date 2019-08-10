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