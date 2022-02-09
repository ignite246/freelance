const mongoose = require('mongoose');

const Slider = mongoose.Schema({
    title: String,
    subtitle: String,
    imageUrl: String,
    class: String
});

const sliderModel = mongoose.model('Slider', Slider);

module.exports = sliderModel;