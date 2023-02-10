#!/usr/bin/node
//Here is the script in JavaScript that will print out all the characters of a Star Wars movie:

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const film = JSON.parse(body);
    const characters = film.characters;
    characters.forEach(characterUrl => {
      request(characterUrl, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});


 
