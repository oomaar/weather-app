// Require Express to run server and routes
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Routes
app.get("/add", (req, res) => res.send(projectData));
app.post("/add", (req, res) => projectData = req.body);

// Setup Server
const port = 5500;
app.listen(port, () => console.log(`Server is up and running on port: ${port}`));