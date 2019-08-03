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
  state = {
    whitemen: [
      {
        id: 1,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/US_Supreme_Court_Justice_Lewis_Powell_-_1976_official_portrait.jpg',
        name: 'Lewis Powell',
        clicked: false,
      },
      {
        id: 2,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Earl_Warren.jpg',
        name: 'Earl Warren',
        clicked: false,
      },
      {
        id: 3,
        photo: 'http://cdn.loc.gov/service/pnp/cph/3b00000/3b07000/3b07800/3b07876r.jpg',
        name: 'Harry Blackmun',
        clicked: false,
      },
      {
        id: 4,
        photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/John_Marshall_Harlan_II_official.jpg',
        name: 'John Marshall Harlan II',
        clicked: false,
      },
      {
        id: 5,
        photo: 'https://www.senate.gov/artandhistory/history/resources/graphic/xlarge/AbeFortas.jpg',
        name: 'Abe Fortas',
        clicked: false,
      },
      {
        id: 7,
        photo: 'https://www.nysfda.org/images/PageImages/2019Additions/Justice_John_Paul_Stevens_III.jpg',
        name: 'John Paul Stevens',
        clicked: false,
      },
      {
        id: 8,
        photo: 'https://www.conservapedia.com/images/a/a2/Rehnquist.jpg',
        name: 'John William Rehnquist',
        clicked: false,
      },
      {
        id: 9,
        photo: 'https://s3.amazonaws.com/libapps/accounts/2491/images/por_11073_p2.jpg',
        name: 'Warren E Burger',
        clicked: false,
      }
    ],
  };

  // Men's Game

  handleBtnClick = (id) => {
    let foundID = (this.state.whitemen.find((whiteman) =>
      (whiteman.id === id)
    ))
    this.gameLogic(foundID);
    this.shuffle();
  }

  shuffle = () => {
    let c = this.state.whitemen;
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [c[i], c[j]] = [c[j], c[i]];
    }
    this.setState({
      whitemen: [...c]
    })
  }

  gameLogic = (guy) => {
    if (guy.clicked === false) {
      this.markClicked(guy.id);
      this.incrementScore();
    }
    else {
      this.resetScoreZero();
      this.resetClicked();
      alert("You lose!");
    }
  }

  markClicked = (id) => {
    this.setState({
      whitemen: this.state.whitemen.map((whiteman) => {
        if (whiteman.id === id) {
          whiteman.clicked = !whiteman.clicked;
        }
        return (whiteman);
      })
    })
  }

  resetClicked = () => {
    this.setState({
      whitemen: this.state.whitemen.map((whiteman) => {
        if (whiteman.clicked === true) {
          whiteman.clicked = !whiteman.clicked;
        }
        return (whiteman);
      })
    })
  }


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
    );
  }
}

export default App;
