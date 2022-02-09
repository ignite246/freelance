const mongoose = require('mongoose');

const Query = mongoose.Schema({
    "email": String,
    "mobile": String,
    "query": String
});

const queryModel = mongoose.model('query', Query);

module.exports = queryModel;