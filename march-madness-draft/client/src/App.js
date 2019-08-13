import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bracket from './components/pages/Bracket';
import Teams from './components/pages/Teams';
import Rules from './components/pages/Rules';
import Nav from './components/pages/Nav';
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
                    )}
                    />
                </div>
            </Router>
        )
    }
 }
// class App extends Component {
//     render() {
//         return(
//             <div className="App">
//                 <Nav />
//                 <Rules />
//                 <Teams />
//                 <Bracket />
//             </div>
//         )
//     }
// }

export default App;
