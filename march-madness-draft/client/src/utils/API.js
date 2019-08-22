import axios from "axios";

export default {
    getUsers: function () {
        return axios.get("/api/users");
    },
    getUser: function (id) {
        return axios.get("/api/users" + id);
    },
    getArticles: function () {
        return axios.get("/api/articles")
    },
    // Deletes the book with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a book to the database
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    saveTeam: function (teamId, teamData) {
       console.log(teamId)
        return axios.post("/api/users/" + teamId.id, teamData)}

}