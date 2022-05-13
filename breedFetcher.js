const request = require('request');
const args = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data.length < 1) {
      return callback("Requested breed doesn't exist", null);
    }
      
    callback(null, data[0].description);
    
  });
};

module.exports = { fetchBreedDescription };