const express = require('express');
const routes = express.Router();

const detailModel = require('../models/detail');
const sliderModel = require('../models/slider');
const serviceModel = require('../models/service');
const queryModel = require('../models/query');

routes.get("/", async (req, res) => {
    const details = await detailModel.findOne({ "_id": "61fae058f62f759fb40bbe72" });
    //   console.log(details);

    const slides = await sliderModel.find();
    //   console.log(slides);

    const services = await serviceModel.find();

    //    console.log(services);


    res.render("index", {
        "details": details,
        "slides": slides,
        "services": services
    });
});

routes.get("/gallery", async (req, res) => {
    const details = await detailModel.findOne({ "_id": "61fae058f62f759fb40bbe72" });
    res.render("gallery", {
        "details": details
    });
});

routes.post("/process-contact-form", async (req, res) => {
    console.log("Form submitted");
    console.log(req.body);
    try {
        const data = await queryModel.create(req.body);
        console.log(data);
        res.redirect("/");

    } catch (error) {
        console.log(error);
        res.redirect("/");
    }

    //saving data to db : need a model

});


module.exports = routes;