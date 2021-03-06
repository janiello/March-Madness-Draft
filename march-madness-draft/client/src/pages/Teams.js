import React, { Component } from 'react';
import TeamsCard from './../../../client/src/components/Teams/TeamsDiv/TeamsDiv';
import Wrapper from './../../../client/src/components/Teams/Wrapper/Wrapper'


class Teams extends Component {

    render(){
        return(
            
            <Wrapper>
            { this.props.teams.map(team => (
                <TeamsCard key={team.id} team = {team}  />
            ))}
            </Wrapper>
        )
    }

}



export default Teams;