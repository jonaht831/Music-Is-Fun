import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(songs) {
  console.log(songs)
  //YOUR CODING STARTS HERE
  let template = ''
  for (let i = 0; i < songs.length; i++) {
    const song = songs[i]
    template += `
    <div class="col-4">
      <div class="card">
        <img class="card-img-top" src="${song.albumArt}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${song.title}</p>
          <p class="card-text">${song.artist}</p>
          <p class="card-text">${song.collection}</p>
          <p class="card-text">${song.price}</p>
          <audio controls><source src="${song.preview}" type="audio/mpeg"></audio>
        </div>
      </div>
    </div>`
  }
  document.getElementById('song-list').innerHTML = template
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController