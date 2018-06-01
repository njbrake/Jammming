
const clientId = '39aa1c0dc7b047d195e98ccaa5cf9402';
const clientSecret = '6eb5d1f820f94d378379ceb5b1e9b0b6';
const redirectUri= 'http://localhost:3000';
const scopes = 'user-read-private playlist-modify-public playlist-modify-private';
const authorizeUrl= `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`;
let accesstoken = null;
 export let Spotify = {

    authenticate (){
      if(accesstoken !==null){
        return accesstoken;
      }
      let myWindow = window.open("authorizeUrl", "_blank", "width=200, height=100");
      let state = window.location.search;
      state = state.substring(6);
      myWindow.close();
      console.log("My state is: "+state);
      const accessTokenUrl= `https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token`;
      let data = {
        grant_type: 'authorization_code',
        code: state,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret
      }//`grant_type:,code:${state},redirect_uri:${redirectUri},client_id:${clientId},client_secret:${clientSecret}`;
      data = JSON.stringify(data);
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
