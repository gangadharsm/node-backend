const express = require("express");
const app = express();
app.get('/', (req, res) => res.json({name:'Gangadhara'}))

module.exports = app;
