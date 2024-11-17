const assert = require('assert');
const { getStarWarsCharacters } = require('./0-starwars_characters');

// Example test to check if the function fetches characters
async function testFetchCharacters () {
  try {
    const characters = await getStarWarsCharacters();
    assert(Array.isArray(characters), 'Characters should be an array');
    assert(characters.length > 0, 'Characters array should not be empty');
    console.log('testFetchCharacters passed');
  } catch (err) {
    console.error('testFetchCharacters failed:', err);
  }
}

// Running the test
testFetchCharacters();
