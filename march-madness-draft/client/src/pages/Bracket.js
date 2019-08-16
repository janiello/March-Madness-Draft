import React from 'react';
import Wrapper from "../components/GameBracket/Wrapper";
import Regions from "../components/GameBracket/Regions";
import API from "../utils/API";

function Bracket(){
    return(
        <header>
            <h3>The Teams. The Games. The Bracket.</h3>
        </header>,
        <Wrapper>
            <Regions />
        </Wrapper>
    )
};



export default Bracket;