function fetchPerson(search) {

  fetch(`https://api.soundcloud.com/tracks?client_id=${apinum}&q=${search}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log("data", json)


      for (i = 0; i < json.length; i++){
        var track = {}
        track.id = json[i].id;
        track.user = json[i].user.username;
        track.artwork = json[i].artwork_url;
        track.title = json[i].title;
        track.play = json[i].stream_url;
        console.log(track)

        const html = `
          <div class="track playMe">
            <div class="trackArt"><img src="${track.artwork}"  id="${track.id}"></div>
            <div class="trackName">${track.title}</div>
            <div class="trackUser">${track.user}</div>
          </div>
          `
        var result = document.querySelector(".results").insertAdjacentHTML('afterbegin', html)

      }
    }).then(function(){
      var tracklink = document.querySelectorAll('.playMe img')

      for (i=0;i<tracklink.length;i++){
        tracklink[i].addEventListener('click', function(event) {
          const trackId = event.target.id;
          const player = `
            <audio class="music-player" autoplay controls="controls" src="https://api.soundcloud.com/tracks/${trackId}/stream?client_id=${apinum}"></audio>
            `
          document.querySelector(".player").insertAdjacentHTML('afterbegin', player)
        })
      }

    })
}

var searchInput = document.querySelector('form');
var searchButton = document.querySelector('#search-button');

document.querySelector('#search-bar').addEventListener('submit', function(event) {
  event.preventDefault();
  var searchValue = document.querySelector('#search-field').value;
  fetchPerson(searchValue);
})
