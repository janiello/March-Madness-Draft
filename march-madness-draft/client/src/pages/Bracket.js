import React from 'react';
import Wrap from "../components/GameBracket/Wrapper";
import Table from "../components/Draftboard/Table";
import "./css/style.css";
import Regions from "../components/GameBracket/Regions";

function Bracket(){

    return (
        
        <div className="bracketContainer">
            <Table />
            <Wrap wrapperCSS="wrapperCSS" regions={<Regions />} />
        </div>
    )
};



export default Bracket;