import React, {Component} from "react";
import API from "../../utils/API";

class TableData extends Component {
    state = {
        users: [],
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
            <div>
                {this.state.users.map(user => (
                    <tr>
                        {user.username}
                    </tr>
                ))}
            </div>
        )
    }
}

export default TableData;