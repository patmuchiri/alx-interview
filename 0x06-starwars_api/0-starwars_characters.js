#!/usr/bin/node

const request = require('request');

// Get the Movie ID from the command-line argument
const movieId = process.argv[2];

// Check if Movie ID is passed
if (!movieId) {
  console.log('Please provide a Movie ID as an argument');
  process.exit(1);
}

// Construct the URL for the movie details endpoint
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Fetch movie details
request(url, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
  } else {
    // Parse the response body as JSON
    const film = JSON.parse(body);

    // Check if the film exists (valid ID)
    if (film.title) {
      // Loop through each character URL in the 'characters' list
      film.characters.forEach(characterUrl => {
        // Fetch character details
        request(characterUrl, function (err, res, characterBody) {
          if (err) {
            console.error('Error:', err);
          } else {
            const character = JSON.parse(characterBody);
            console.log(character.name); // Print character's name
          }
        });
      });
    } else {
      console.log('Movie not found');
    }
  }
});
