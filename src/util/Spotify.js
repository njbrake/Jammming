
const clientId = '';
const redirectUri= 'http://localhost:3000';
const authorizeUrl= `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=playlist-modify-public`;
let accessToken = null;
let tokenType = null;
let expiresIn = null;
let userId = null;

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
    await this.authenticate();
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
            id: track.id,
            uri: track.uri
          }));
          return endpoint;
        }
      }
    }catch(error){console.log(error);}
  },

  async fetchUserId()
  {
    try
    {
      let response = await fetch(`https://api.spotify.com/v1/me`,
        {
          headers:
          {
            Authorization: 'Bearer ' + accessToken
          }
        });
    if(response.ok)
      {
        let jsonResponse = await response.json();
        if(jsonResponse.id)
        {
          const endpoint = jsonResponse.id;
          return endpoint;
        }
      }
    }catch(error){console.log(error);}
  },

  async playlistSave(playlistName, playlistSongs)
  {
    console.log(playlistSongs);
    await this.authenticate;
    userId = await this.fetchUserId();
    //create new playlist
    let url = `https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${userId}/playlists`;
    let playlistId = null;
    const data = JSON.stringify(
      {
        name: playlistName
      });
    try
    {
      const response = await fetch(url, {
  			method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json',
  				'Authorization': 'Bearer ' + accessToken
        }
      });
      if(response.ok)
        {
          let jsonResponse = await response.json();
          if(jsonResponse.id)
          {
            playlistId = jsonResponse.id;
          }
        }
    }catch (error)
      {
        console.log(error);
      }
    //add songs to the playlist
    for(let i=0;i < playlistSongs.length;i++)
    {
      await this.addSongToPlaylist(playlistSongs[i],playlistId);
    }

  },

  async addSongToPlaylist(song,playlistId)
  {
    let url = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks?uris=${song.uri}`;
      try
      {
        let response = await fetch(url, {
    			method: 'POST',
          headers: {
            'Content-type': 'application/json',
    				'Authorization': 'Bearer ' + accessToken
          }
        });
        if(response.ok)
          {
            let jsonResponse = await response.json();
            if(jsonResponse.id)
            {
              return jsonResponse;
            }
          }
      }catch (error)
        {
          console.log(error);
          return error;
        }
  }
}
