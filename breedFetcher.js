const request = require('request');
const args = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (error) {
    return console.log("Failed to recieve request", error);
  }
  const data = JSON.parse(body);
  if (data.length < 1) {
    console.log("Requested breed is not found. Try another");
  } else {
    console.log(data[0].description);
  }
});