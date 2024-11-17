#!/usr/bin/node

const request = require('request');  // Using the request module for HTTP requests

// Get the page number from command-line arguments
const page = process.argv[2];

// Construct the URL to fetch the character data from SWAPI
const url = `https://swapi.dev/api/people/?page=${page}`;

// Make the HTTP request to the SWAPI API
request(url, function (error, response, body) {
  if (error) {
    console.error('Error:', error);  // Print error if any
  } else {
    const data = JSON.parse(body);  // Parse the response body as JSON
    const characters = data.results;  // Extract character results from the response
    
    // Loop through the characters and print their names
    characters.forEach((character) => {
      console.log(character.name);  // Print each character's name
    });

    // If there is a next page, recursively call the function to fetch it
    if (data.next) {
      const nextPage = data.next.split('page=')[1];  // Extract next page number from URL
      process.argv[2] = nextPage;  // Set next page number to continue fetching
      require('child_process').execSync(`./0-starwars_characters.js ${nextPage}`);  // Recursive call
    }
  }
});
