import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bracket from './pages/Bracket';
import Teams from './pages/Teams';
import Rules from './pages/Rules';
import Nav from './pages/Nav';
import './App.css';

class App extends Component {
 

    render() {
        return (
            <Router>
                <div className="App">
                    <Nav />
                    <Route exact path={"/"} render={(props) => (
                        <React.Fragment>
                            <Rules />
                        </React.Fragment>
                    )} />
                    <Route path={"/Teams"} render={(props) => (
                        <React.Fragment>
                            <Teams />
                        </React.Fragment>
                    )}
                    />
                    <Route path={"/Bracket"} render={(props) => (
                        <React.Fragment>
                            <Bracket />
                        </React.Fragment>
                    )} />
                    </div>
            </Router>
           
        )
    }
 }

export default App;
