import React from "react";
import "./style.css";
import RegionGames from "./RegionGames";


 const Regions = () =>  {
        return (
                <div>
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
                    <RegionGames />
                </div>
        );
    };


export default Regions;