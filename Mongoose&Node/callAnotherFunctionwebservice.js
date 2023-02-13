
//create req body to call anther web service
// needs request module

var request = require('request');


request.post({
  url: 'https://somenew.com/v1/',
  headers: {
    'content-type': 'application/json',
  },
  json: {
    "name": "My name is alex",
    "gender": ["All"],
    "Subject": "french",
    "Body": "men",
    "arrayOfLikes": {
      "sf": "tennis"
    }

  }
}, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // your response body 
  }
})