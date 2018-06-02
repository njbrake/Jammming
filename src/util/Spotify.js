
const clientId = '39aa1c0dc7b047d195e98ccaa5cf9402';
const clientSecret = '6eb5d1f820f94d378379ceb5b1e9b0b6';
const redirectUri= 'http://localhost:3000';

const authorizeUrl= `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=playlist-modify-public`;
let accessToken = null;
let expirationTime = null;
let tokenType = null;
let expiresIn = null;

 export let Spotify =
 {
//authenticate function follow implicit grant flow method for Spotify API
  authenticate()
  {
    accessToken = window.location.href;
    if(accessToken & accessToken!==redirectUri +'/')
      {
        return accessToken;
      }else

      if(accessToken=== redirectUri + '/')
      {
        window.location.assign(authorizeUrl);
      }else
      {
        accessToken = accessToken.split('#');
        accessToken = accessToken[1].split('&');
        tokenType = accessToken[1];
        expiresIn = accessToken[2];
        accessToken = accessToken[0].split('=');
        accessToken = accessToken[1];
        tokenType = tokenType.split('=');
        tokenType = tokenType[1];
        expiresIn = expiresIn.split('=');
        expiresIn = expiresIn[1];
      }
  },
  async search(search)
  {
    this.authenticate();
    try
    {
      let response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${search}`,
        {
          headers:
          {
            Authorization: 'Bearer ' + accessToken
          }
        });
    if(response.ok)
      {
        let jsonResponse = await response.json();
        if(jsonResponse.tracks)
        {
          let endpoint = jsonResponse.tracks.items.map(track => ({
            songName: track.name,
            artistName: track.artists[0].name ,
            albumName:  track.album.name,
            id: 1
          }));
      return endpoint;
        }
      }
    }catch(error){console.log(error);}
  }
}
