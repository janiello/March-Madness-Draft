import React from 'react';
import Wrapper from "../components/GameBracket/Wrapper";
import Regions from "../components/GameBracket/Regions";
import Table from "../components/Draftboard/Table";


function Bracket(){
    return (
        <div>
            <Table />
            <Wrapper>
                <Regions />
            </Wrapper>
        </div>
    )
};



export default Bracket;