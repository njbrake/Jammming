
const clientId = '39aa1c0dc7b047d195e98ccaa5cf9402';
const clientSecret = '6eb5d1f820f94d378379ceb5b1e9b0b6';
const redirectUri= 'http://localhost:3000';
const scopes = 'user-read-private playlist-modify-public playlist-modify-private';
const authorizeUrl= `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`;
let accesstoken = null;
 export let Spotify = {
//authenticate function follow implicit grant flow method for Spotify API
    authenticate (){
      if(accesstoken !==null){
        return accesstoken;
      }
      let myWindow = window.open(authorizeUrl, "_blank", "width=200, height=100");
      let state = window.location.href;
      myWindow.close();
      console.log("My state is: "+state);
    /*
      fetch(accessTokenUrl, {method: 'POST', headers: {'Content-type': 'application/x-www-form-urlencoded'}, body: data}).then(response => {
        if(response.ok){
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
      /*fetch(accessTokenUrl,{method: 'POST', headers: {'Content-type': 'application/json'}, body: data}).then(response => {
      return response.json();}).then(jsonResponse => {if(jsonResponse.response)
        {
          const endpoint = jsonResponse.response.map(response => ({
            accessToken: response.access_token,
            tokenType: response.token_type,
            scope: response.scope,
            expiresIn: response.expires_in,
            refreshToken: response.refresh_token,
          }));
          return endpoint;
        }}); */
  //  },

  search(search)
  {
    this.authenticate();
  //  fetch(authorizeUrl).then(response => {console.log(response)});

  //  fetch(authorizeUrl,{``}).then(response => {return response.json();}).then(
  //    jsonResponse => {if(jsonResponse.businesses){
  //      return jsonResponse;
  //    }});
    },
  }
/*

  window.open(authorizeUrl);
  try{
      const response = await fetch(authorizeUrl,{});
      if(response.ok){
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      }
  }catch(error) {console.log(error);
}
}
*/
