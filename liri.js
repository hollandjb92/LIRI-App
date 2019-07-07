require("dotenv").config();

let keys = require("./keys");
let spotify = new Spotify(keys.spotify);