#!/usr/bin/node

const request = require('request')

const movieId = process.argv[2] // Get movie ID from command-line argument

// Check if movieId is provided
if (!movieId) {
  console.log('Usage: node script.js <movie_id>')
  process.exit(1)
}

// URL for the API request
const url = `https://swapi.dev/api/films/${movieId}/`

function starWarsMovieCharacters (url) {
  request(url, function (error, response, body) {
    if (error) {
      console.log(`Failed to retrieve movie with ID ${movieId}: ${error}`)
      return
    }

    const movie = JSON.parse(body)
    console.log(`Movie Title: ${movie.title}`)
    console.log('Characters in this movie:')

    // Example of how to print character names
    movie.characters.forEach(function (characterUrl) {
      request(characterUrl, function (err, res, body) {
        if (err) return console.log(err)
        const character = JSON.parse(body)
        console.log(character.name)
      })
    })
  })
}

starWarsMovieCharacters(url)

