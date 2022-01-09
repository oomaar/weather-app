const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));

let projectData = {};

app.get("/all", (req, res) => {
    res.send(projectData);
    console.log(projectData);
});

app.post("/add", (req, res) => {
    Data = {
        temp: req.body.temp,
        date: req.body.date,
        feeling: req.body.feeling
    }
    projectData = Data;
    console.log(projectData);
    res.end();
});

const port = `2000`;
app.listen(port, () => console.log(`Server is up and running on port: http://localhost:${port}`));