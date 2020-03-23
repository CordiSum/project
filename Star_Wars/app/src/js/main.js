import 'webp-in-css/polyfill';

document.addEventListener('DOMContentLoaded', () => {
    
  function fetchPerson(id){

    fetch(`https://swapi.co/api/people/${id}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:3000/',
          'Referer': 'http://localhost:3000/'
        }
      })
      .then( function(response){
        return response.json()
      })
      .then(function(json){
        console.log("data", json)
  
        if (!json.name){
          return;
        }
  
        const name = json.name;
        const birth_year = json.birth_year;
        const height = json.height;
  
        // If you were doing document.createElement
        // const character = document.createElement('div');
        // character.className = "character";
        // character.textContent = name + ": " + birth_year;
        // document.querySelector("#characters").appendChild(character)
  
        const people = `
          <div class="character">
            <div class="name">
              <a href="${json.url}">${name}</a>
            </div>
            <div class="year">${birth_year}</div>
            <div class="height">${height}</div>
          </div>
        `
        document.querySelector("#characters").insertAdjacentHTML('afterbegin', people)
  
      })
  }
  
  // fetchPerson(1)
  for (var i = 1; i <= 100; i++) {
    fetchPerson(i)
  }
});