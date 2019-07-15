require("dotenv").config();

const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const axios = require("axios");
const Spotify = require("node-spotify-api");
const moment = require("moment");
const colors = require("colors");


//DETERMINING USER INPUT AND DECIDING WHAT FUNCTION WILL BE CALLED//
let args = process.argv;
let method = args[2];
let userInput = args.slice(3).join(" ");
console.log(userInput);

switch (method) {
  case "concert-this":
    concertThis(userInput);
    break;
  case "spotify-this-song":
    spotifyThis(userInput);
    break;
  case "movie-this":
    movieThis(userInput);
    break;
  case "do-what-it-says":
    doThis();
    break;
  default:
    console.log("Something went wrong. Please check your input and try again".red);
}



//BANDS IN TOWN//
function concertThis() {

}

//SPOTIFY//

function spotifyThis(userInput) {
  //select default song
  if (!userInput) {
    userInput = "Hakuna Matata";
  }

}

//OMDB//

function movieThis() {

}

//DO WHAT IT SAYS//
function doThis() {

}

//BONUS IF I FEEL LIKE IT//