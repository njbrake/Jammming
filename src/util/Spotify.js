
const clientId = '39aa1c0dc7b047d195e98ccaa5cf9402';
const clientSecret = '6eb5d1f820f94d378379ceb5b1e9b0b6';
const redirectUri= 'http://localhost:3000';
const scopes = 'user-read-private playlist-modify-public playlist-modify-private';
const authorizeUrl= `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`;
let accessToken = null;
let expirationTime = null;

 export let Spotify = {
//authenticate function follow implicit grant flow method for Spotify API
    authenticate (){
      //if(accessToken !==null){
      //  return accessToken;
    //  }
      window.location = authorizeUrl;
      accessToken = window.location.href;
      console.log(accessToken);
      accessToken = accessToken.split('#');

      accessToken = accessToken[1].split('&');
      let tokenType = accessToken[1];
      let expiresIn = accessToken[2];
      accessToken = accessToken[0].split('=');
      accessToken = accessToken[1];
      tokenType = tokenType.split('=');
      tokenType = tokenType[1];
      expiresIn = expiresIn.split('=');
      expiresIn = expiresIn[1];
      console.log('access token is: ' + accessToken);
      console.log(' token type is: ' + tokenType);
      console.log('expires in: ' +expiresIn);

      /*
      const data = `grant_type:authorization_code,code:${state},redirect_uri:${redirectUri},client_id:${clientId},client_secret:${clientSecret}`;
      fetch(accessTokenUrl, {method: 'POST', headers: {'Content-type': 'application/x-www-form-urlencoded'}, body: data}).then(response => {
        if(response.ok){
          console.log(state);
          return response.json();
        }
        throw new Error('Request failed!');
      },networkError => {console.log(networkError.message)}).then(jsonResponse=>{
        if(jsonResponse.response)
          {
            const endpoint = jsonResponse.response.map(response => ({
              accessToken: response.access_token,
              tokenType: response.token_type,
              scope: response.scope,
              expiresIn: response.expires_in,
              refreshToken: response.refresh_token,
            }));
            return endpoint;
      }});
      */

    },

  async search(search)
  {
    this.authenticate();
    console.log('i made it through authenticate and this is my token: ' + accessToken);
    try{
      console.log("im inside");
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?q=jazz&type=album',
    {headers: {
      Authorization: 'Bearer' + accessToken}
    });
    console.log("here's what I got so far" + response);
    if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  }catch(error){console.log(error);}
    }
}
