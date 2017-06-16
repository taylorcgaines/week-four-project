function fetchPerson(search){

  fetch(`https://api.soundcloud.com/users?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=${search}`)
    .then( function(response){
      return response.json()
    })
    .then(function(json){
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

var searchInput = document.querySelector('form')
var searchButton = document.querySelector('#search-button')

document.querySelector('.search-bar').addEventListener('submit', function(event){
  event.preventDefault()
  console.log('searc done');
  var searchValue = document.querySelector('#search-bar').value
  // searchInput.value = ""
  fetchPerson(searchValue)
})
