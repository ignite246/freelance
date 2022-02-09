const mongoose = require('mongoose');

const service = mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    linkName: String,
    linkUrl: String
});

const serviceModel = mongoose.model('service', service);

module.exports = serviceModel;