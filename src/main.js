export const search = (query, artist) => {
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${artist}`);

export const searchArtists = () => {};
export const searchTracks = () => {};
export const searchPlaylist = () => {};
