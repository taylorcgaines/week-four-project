function fetchPerson(search) {

  fetch(`https://api.soundcloud.com/users?client_id=${apinum}&q=${search}`)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log("data", json)

      // const user = json.username;
      //
      // const html = `
      //   <div class="result">
      //     <div class="name">
      //       <a href="${}">${user}</a>
      //     </div>
      //   </div>
      //   `
      //
      // document.querySelector(".results").insertAdjacentHTML('afterbegin', html)
    })
}

var searchInput = document.querySelector('form');
var searchButton = document.querySelector('#search-button');

document.querySelector('#search-bar').addEventListener('submit', function(event) {
  event.preventDefault();
  var searchValue = document.querySelector('#search-field').value;
  // searchInput.value = ""
  fetchPerson(searchValue)
})
