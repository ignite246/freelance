const mongoose = require('mongoose');

const Detail = mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links: [
        {
            label: String,
            url: String
        }
    ]
});

const detailsModel = mongoose.model('detail', Detail);

module.exports = detailsModel;