// Act as the app API endpoint.
projectData = {};

// Express to run server and routes
const express = require ("express")
const app = express();

// Dependencies 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors());
// Initializing the main project folder 
app.use(express.static('website'));

const port = 5000;

const server = app.listen(port, listening);

function listening(){
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
}

// GET route
app.get('/all', (req, res) => {
    res.send(projectData)
  })


// POST route
app.post('/addWeather', addWeatherData);

function addWeatherData (req,res) {
console.log(req.body)
  newEntry = {
    temp: req.body.temp,
    content: req.body.content,
    date: req.body.date
  }

  projectData.push(newEntry)
}