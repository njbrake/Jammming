const apiKey = '';
const clientId = '39aa1c0dc7b047d195e98ccaa5cf9402';
const clientSecret = '6eb5d1f820f94d378379ceb5b1e9b0b6';
const redirectUri= 'http://localhost:3000';
const scopes = 'user-read-private user-read-email';

 export let Spotify = {

//  search(search)
//  {
//    return fetch(``,{``}).then(response => {return response.json();}).then(
//      jsonResponse => {if(jsonResponse.businesses){
//        return jsonResponse;
///      }});
//    }
//},
const authorize = async () => {
       const authorizeUrl= `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`;
window.open(authorizeUrl);
try{
const response = await fetch(authorizeUrl,{});
 if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch(error) {
    console.log(error);
}
}
}
