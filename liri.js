//requiring stuff

require("dotenv").config();
const keys = require("./keys");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");
const colors = require("colors");


//DETERMINING USER INPUT AND DECIDING WHAT FUNCTION WILL BE CALLED//
let args = process.argv;
let method = args[2];
let userInput = args.slice(3).join(" ");
// console.log(userInput);

//switch statement to determine which function to fun
// switch (method) {
//   case "concert-this":
//     concertThis(userInput);
//     break;
//   case "spotify-this-song":
//     spotifyThis(userInput);
//     break;
//   case "movie-this":
//     movieThis(userInput);
//     break;
//   case "do-what-it-says":
//     doThis();
//     break;
//   default:
//     console.log("Something went wrong. Please check your input and try again".red);
// }

//ALTERNATE WAY TO DO IT THAT I KIND OF LIKE MORE ACTUALLY:

let choice = {
  "concert-this": _ => {
    !userInput ? console.log("Please provide an artist".red) : concertThis(userInput);
  },
  "spotify-this-song": _ => {
    !userInput ? spotifyThis("Nobody Mitski") : spotifyThis(userInput);
  },
  "movie-this": _ => {
    !userInput ? movieThis("Lady Bird") : movieThis(userInput);
  },
  "do-what-it-says": _ => {
    doThis();
  }
}

choice[method]();


//BANDS IN TOWN//
function concertThis(userInput) {

  //default artist if no input is provided
  // if (!userInput) {
  //   return console.log("Please provided an artist".red);
  // }
  //axios call
  axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(res => {

    // console.log(res)
    //loop through all the concerts available and print for each
    for (i = 0; i < res.data.length; i++) {

      let concert = res.data[i];
      //to get rid of the time part of the date
      let date = concert.datetime.split("T");

      let concertResults = "\n---------------------------------------\n\n" + "Venue:  ".cyan + concert.venue.name + "\nLocation: ".cyan + concert.venue.city + "\nDate: ".cyan + moment(date[0]).format("MM/DD/YYYY") + "\n\n---------------------------------------\n";

      console.log(concertResults);

    }


    //errors happen!
  }).catch(err => {
    console.log(err)
  })

}

//SPOTIFY//
function spotifyThis(userInput) {
  //default song if no input is provided
  if (!userInput) {
    userInput = "Nobody Mitski";
  }
  //call using node-spotify-api
  spotify.search({
    type: "track",
    query: userInput
  }, (err, res) => {
    //errors happen!
    if (err) throw err;
    // console.log(res)
    //print to console
    let song = res.tracks.items[0];

    let spotifyResults = "\n---------------------------------------\n\n" + "Artist(s): ".red + song.artists[0].name + "\nSong Title: ".green + song.name + "\nPreview: ".blue + song.preview_url + "\nAlbum: ".magenta + song.album.name + "\n\n---------------------------------------\n";

    console.log(spotifyResults);
  })
}


//OMDB//
function movieThis(userInput) {
  //default movie if no input is provided
  if (!userInput) {
    userInput = "Lady Bird";
  }

  //axios call
  axios.get("https://www.omdbapi.com/?t=" + userInput + "&apikey=trilogy").then(res => {
    // console.log(res)

    //print to console
    let movie = res.data;
    let movieResults = "\n---------------------------------------\n\n" + "Movie Title: ".cyan + movie.Title + "\nRelease Year: ".cyan + movie.Year + "\nIMDB Rating(IMDB sucks btw): ".cyan + movie.imdbRating + "\nRotten Tomatoes Rating: ".cyan + movie.Ratings[1].Value + "\nProduced In: ".cyan + movie.Country + "\nLanguage: ".cyan + movie.Language + "\nPlot: ".cyan + movie.Plot + "\nStarring: ".cyan + movie.Actors +
      "\n\n---------------------------------------\n";

    console.log(movieResults);

    //errors happen!
  }).catch(err => {
    console.log(err)
  })


}

//DO WHAT IT SAYS//
function doThis() {
  fs.readFile("random.txt", "utf8", (function (err, data) {
    if (err) throw err;

    let split = data.split(",");

    spotifyThis(split[1])
  }))
}

//BONUS IF I FEEL LIKE IT//