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

// Function to fetch character data
const fetchCharacter = (characterUrl) => {
  return new Promise((resolve, reject) => {
    request(characterUrl, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        const character = JSON.parse(body);
        resolve(character.name);
      }
    });
  });
};

// Fetch movie details and characters
request(url, async (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    // Parse the response body as JSON
    const film = JSON.parse(body);

    // Check if the film exists (valid ID)
    if (film.title) {
      try {
        // Fetch all characters and print their names in the same order
        const characterPromises = film.characters.map(fetchCharacter);
        const characters = await Promise.all(characterPromises);

        // Print each character name
        characters.forEach(character => console.log(character));
      } catch (err) {
        console.error('Error fetching characters:', err);
      }
    } else {
      console.log('Movie not found');
    }
  }
});
