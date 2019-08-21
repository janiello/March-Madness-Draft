import React, {Component} from "react";
import API from "../../utils/API";

class TableData extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getUsers()
            .then(response =>
                this.setState({users: response.data}))
                .catch(error => console.log (error));
    };

    render() {
        return (
            <React.Fragment>
                {this.state.users.map(user => (
                    <tr key={user._id}>
                        <td key={user.username}>
                            {user.username}
                        </td>
                        {user.teams.map(team => (
                            <td key={team.id}>
                                {team.name}
                            </td>
                        ))}
                    </tr>
                ))}
            </React.Fragment>
        )
    }
}

export default TableData;