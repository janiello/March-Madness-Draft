import axios from "axios";

export default {
    getUsers: function () {
        return axios.get("/api/users");
    },
    getUser: function (id) {
        return axios.get("/api/users" + id);
    },
    // Deletes the book with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a book to the database
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    saveTeam: function (teamData) {
       console.log(teamData)
        return axios.post("/api/users" + teamData.id , teamData)}

}