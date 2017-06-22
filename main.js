function fetchPerson(search) {

  fetch(`https://api.soundcloud.com/tracks?client_id=${apinum}&q=${search}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log("data", json)


      for (i = 0; i < json.length; i++){
        var track = {}
        track.user = json[i].user.username;
        track.artwork = json[i].artwork_url;
        track.title = json[i].title;
        console.log(track)

        const html = `
          <div class="track">
            <div class="trackArt"><img src="${track.artwork}"></div>
            <div class="trackName">${track.title}</div>
            <div class="trackUser">${track.user}</div>
          </div>
          `

        document.querySelector(".results").insertAdjacentHTML('afterbegin', html)
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
