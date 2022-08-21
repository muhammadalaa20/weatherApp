projectData = {};

// Express to run server and routes
const express = require ("express")
const app = express();
// TODO-Start up an instance of app

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