const apiKey = '';
const clientId = '39aa1c0dc7b047d195e98ccaa5cf9402';
const clientSecret = '6eb5d1f820f94d378379ceb5b1e9b0b6';
const redirectUri= 'http://localhost:3000';
const scopes = 'user-read-private user-read-email';

 let Spotify = {
  search(term,location,sortBy)
  {
    var request = require('request'); // "Request" library

    var client_id = clientId; // Your client id
    var client_secret = clientSecret; // Your secret

    // your application requests authorization
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var options = {
          url: 'https://api.spotify.com/v1/users/jmperezperez',
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };
        request.get(options, function(error, response, body) {
          console.log(body);
        });
      }
    });
    return fetch(``,{``}).then(response => {return response.json();}).then(
      jsonResponse => {if(jsonResponse.businesses){

      }});
    }
  }


  /**
   * This is an example of a basic node.js script that performs
   * the Client Credentials oAuth2 flow to authenticate against
   * the Spotify Accounts.
   *
   * For more information, read
   * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
   */
