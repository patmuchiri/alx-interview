#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.log("Usage: script.js <movie_id>");
  process.exit(1);
}


const starWarsMovieCharacters = (movieId) => {
  const URL = "https://swapi-api.alx-tools.com/api/films";
  request('${URL}/${movieId}', (err,_, body) => {
    if (err) {
      console.log('Failed to retrieve movie with ID ${movieId}:', err);
      return;
    }
    const charactersUrl = JSON.parse(body).characters;
    const charNames = charactersUrl.map(url => new Promise((resolve, reject) => {
      request(url, (err, _,body) => {
        if (err) {
	  reject(err);
	}
	resolve(JSON.parse(body).name);
      });
    }));
    Promise.all(charNames)
      .then(names => console.log(names.join('\n')))
      .catch(err => console.log(err));
  });
}

const movieId = process.argv[2];
starWarsMovieCharacters(movieId);
