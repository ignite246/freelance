const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("Hello from TCS Routes");
});

routes.get("/jobs", (req, res) => {
    res.send("Various Jobs");
});

routes.get("/career", (req, res) => {
    res.send("Big career oppurtunities");
});

routes.get("/ceo", (req, res) => {
    res.send("Rajesh Gopinathan");
});


module.exports = routes;