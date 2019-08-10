import React from 'react';
import { Link } from 'react-router-dom';



function Nav(count){
    return(
        <header style={headerStyle}>
            <h1>Fantasy Basketball</h1>
            <Link style={linkStyle} to="/">Rules  </Link> | <Link style={linkStyle} to="/Bracket">Bracket</Link> | <Link style={linkStyle} to="/Teams">Teams</Link> | <Link style={linkStyle} to="/Draft">Draft</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}
const linkStyle={
    color: '#fff',
    textDecoration: 'none'
}

export default Nav;