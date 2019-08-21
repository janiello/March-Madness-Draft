import React, {Component} from 'react';
import "./css/style.css";
import API from "../utils/API";

class Rules extends Component {
  
    render() {
      
    return (
        <div className="rulesBody">
        <div className="aboutStyle">
            <h1>About Alleyoop</h1>
            <p>Sixty-four teams, four regions, six rounds, one winner.
            <br/><br/>
            Our game has all the thrills of fantasy basketball-- chance, skill, luck, and loss.
            <br/><br/>
            Indulge your fantasy football.
            </p>
            <br/>

            <h1>The Rules</h1>

            <p>Each player chooses eight teams to root for, following their progression through the completion of the tournament. Whatever criteria you use to select your eight teams are entirely your own -- whether you choose your teams based on skill, luck, or loyalty just may be the difference between victory or defeat.
            <br/><br/>
            Each team you choose has a corresponding seed number, which is a number generated through an approximation of factors, including the team’s skill, players, and past performances. With each win, as your team(s) progresses into a new round, their seed number compounds and gets added to your individual user score.
            <br/><br/>
            Note: Even if your team does not win the final championship, the victor of this fantasy is he or she who holds the highest score, or accumulation of seed scores.
            <br/><br/>
            Good luck!
            </p>
 </div>
 <iframe width="806" height="453" src="https://www.youtube.com/embed/BLDb8sK95PE" 
 frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
 </div>
    )
}
}


export default Rules;
