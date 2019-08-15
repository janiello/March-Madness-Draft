const db = require("../models");

module.exports = {
    displayAll: function(request, response) {
        db.Group
            .find(request.query)
            .then(dbModel => response.json(dbModel))
            .catch(err => response.status(422).json(err));
    }
}