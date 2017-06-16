function fetchPerson(search){

  fetch(`https://api.soundcloud.com/users?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f?q=${search}`)
    .then( function(response){
      return response.json()
    })
    .then(function(json){
      console.log("data", json)

      const name = json.name;
      const birth_year = json.birth_year;

      const html = `
        <div class="song">
          <div class="name">
            <a href="${json.url}">${name}</a>
          </div>
          <div class="year">${birth_year}</div>
        </div>
        `

      document.querySelector(".results").insertAdjacentHTML('afterbegin', html)
    })
}

var search_input = document.querySelector('#search-bar')
var search-button = document.querySelector('#search-button')

for (var i = 1; i <= 100; i++) {
  fetchPerson(i)
}
