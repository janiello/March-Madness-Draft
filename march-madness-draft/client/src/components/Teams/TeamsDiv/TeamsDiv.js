import React from "react";
import "./teamsStyle.css"

function TeamsCard(props) {
    
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.team.name} src={props.team.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.team.name}
          </li>
          <li>
            <strong>Seed:</strong> {props.team.seed}
          </li>
          <li>
            <strong>Division:</strong> {props.team.division}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamsCard;
