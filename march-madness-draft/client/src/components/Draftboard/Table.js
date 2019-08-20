import React from "react";
import TableData from "./TableData";

function Table(props) {
    return (
        <div className={props.tableCSS}>
            <table className="user-data">
                <tr className="header">
                    <th>User</th>
                    <th>Team 1</th>
                    <th>Team 2</th>
                    <th>Team 3</th>
                    <th>Team 4</th>
                    <th>Team 5</th>
                    <th>Team 6</th>
                    <th>Team 7</th>
                    <th>Team 8</th>
                </tr>
                <TableData />
            </table>
        </div>
    )
}

export default Table;