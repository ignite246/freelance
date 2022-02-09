const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("Hello From Author");
});

routes.get("/date", (req, res) => {
    res.send(new Date());
});

routes.get("/about", (req, res) => {
    res.send("Rahul Kumar is a Developer @ TCS");
});

routes.get("/joke", (req, res) => {
    res.send("My Joke is not going to understand you");
});


module.exports = routes;