const apiKey = '';
const clientId = '39aa1c0dc7b047d195e98ccaa5cf9402';
const clientSecret = '6eb5d1f820f94d378379ceb5b1e9b0b6';
const redirectUri= 'http://localhost:3000';
const scopes = 'user-read-private user-read-email';

 export let Spotify = {

  search(search)
  {
    return fetch(``,{``}).then(response => {return response.json();}).then(
      jsonResponse => {if(jsonResponse.businesses){
        return jsonResponse;
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
