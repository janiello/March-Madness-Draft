import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Teams from './components/layout/Teams';
import Rules from './components/layout/Rules';
import BracketSubhead from './components/layout/BracketSubhead';
import Bracket from './components/layout/Bracket';
import './App.css';
import RulesSubhead from './components/layout/TeamsSubhead';
import TeamsSubhead from './components/layout/RulesSubhead';
class App extends Component {
    state = [
        
    ]

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path={"/"} render={(props) => (
                        <React.Fragment>
                            <RulesSubhead />
                            <Rules />
                        </React.Fragment>
                    )} />
                    <Route path={"/Teams"} render={(props) => (
                        <React.Fragment>
                            <TeamsSubhead />
                            <Teams />
                        </React.Fragment>
                    )}
                    />
                    <Route path={"/Bracket"} render={(props) => (
                        <React.Fragment>
                            <BracketSubhead />
                            <Bracket />
                        </React.Fragment>
                    )}
                    />
                </div>
            </Router>
        )
    }
}

export default App;
