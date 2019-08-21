import React from 'react';
import { Link } from 'react-router-dom';
import "./css/style.css"


function Nav(){
    return(
        <React.Fragment>
        <header className="navbar">
            <h1 className="navh1">Alleyoop Fantasy Basketball</h1>
        <div className="navFlow">
            <div className="divLinkStyle"><Link className="linkStyle" to="/">Rules</Link></div>  |  <div className="divLinkStyle"><Link className="linkStyle"  to="/Bracket">Bracket</Link></div>  |  <div className="divLinkStyle"><Link className="linkStyle" to="/Teams">Teams</Link></div></div>
        </header>
      </React.Fragment>
    )
}

export default Nav;