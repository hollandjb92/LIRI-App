# LIRI-BOT

<p>LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.</p>

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

<p>You will need <a href="https://nodejs.org/en/">Node.js</a> and  <a href="https://www.npmjs.com/">NPM</a>  installed on your system.</p>

### Installing

<ol>
<li>
<p>Clone project:</p>
<pre><code> "git clone https://github.com/hollandjb92/LIRI-App.git"
</code></pre>
</li>
<li>
<p>Inside the root directory of the cloned filed, run the following command in your terminal/bash:</p>
<pre><code> "npm install"
</code></pre>
</li>
</ol>

## Running the Application

<ol>
<li>
<pre><code> "node liri.js concert-this [artist/band name here]"
</code></pre>
<ul>
<li>This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:</li>
      <ul>
        <li>Name of the venue</li>
         <li>Venue location</li>
         <li>Date of the Event</li>
    </ul>
      
      
</ul>  



</li>
<li>
<pre><code> "node liri spotify-this-song [song name here]"
</code></pre>
<ul>
<li>This will show the following information about the song in your terminal/bash window</li>
     <ul>
        <li>Artist(s)</li>
         <li>Song Name</li>
         <li>A preview link of the song from Spotify</li>
         <li>The album the song is from</li>
    </ul>
      
      
</ul>



</li>
<li>
<pre><code> "node liri.js movie-this [movie name here]"
</code></pre>
<ul>
<li>This will output the following information to your terminal/bash window</li>
       <ul>
        <li>Title of the movie</li>
         <li>Year the movie came out</li>
         <li>IMDB rating of the movie</li>
         <li>Rotten Tomatoes rating of the movie</li>
           <li>Country where the movie was produced</li>
           <li>Language of the movie</li>
           <li>Plot of the movie</li>
           <li>Actors in the movie</li>
      </ul>
</ul>
      
      
      
</li>
<li>
<pre><code> "node liri.js do-what-it-says"
</code></pre>
<ul>
<li>Runs a command that you have run in the past</li>
</ul>
</li>
</ol>


## Demo

<p>INSERT A GIF OF ME USING THE APP LATER</p>

## Built With
<ul>
<li><a href="https://nodejs.org/en/">Node.js</a></li>
<li><a href="https://www.npmjs.com/package/node-spotify-api">Spotify</a></li>
<li><a href="https://www.npmjs.com/package/omdb" rel="nofollow">OMDb</a></li>
    <li><a href="https://www.artists.bandsintown.com/bandsintown-api" rel="nofollow">Bands in Town</a></li>
<li><a href="https://www.npmjs.com/package/axios" rel="nofollow">Axios</a></li>
     <li><a href="https://www.npmjs.com/package/moment" rel="nofollow">Moment.js</a></li>
  <li><a href="https://www.npmjs.com/package/dotenv" rel="nofollow">DotEnv</a></li>
</ul>
