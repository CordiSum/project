import 'webp-in-css/polyfill';

let btnPeople = document.querySelector('.btn_peoples');

let btnFilms = document.querySelector('.btn_films');
let btnStarships = document.querySelector('.btn_starships');

// список юнитов
function makePeoplesList(response) {
  
  if (response.results.length > 0) {
    let peopleDiv = document.querySelector("#people");
    
    response.results.map(function(elem) {
      const item = `
      <div>
        <a href="${elem.url}" class="people_link" target="_blank">${elem.name}</a>
      </div>`;
      
      peopleDiv.insertAdjacentHTML('beforeend', item)
    });
  }

  if (response.next !== null) {
    getPeoples(response.next);
  }
}

// получаем список юнитов
function getPeoples(url = 'https://swapi.co/api/people/'){
  fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000/',
        'Referer': 'http://localhost:3000/'
      }
  })
  .then(response => response.json())
  .then(json => makePeoplesList(json));
};

btnPeople.addEventListener('click', () => {
  getPeoples();    
});


// получаем один юнит ============================================================
function getPeople(url){
  fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000/',
        'Referer': 'http://localhost:3000/'
      }
  })
  .then(response => response.json())
  .then(json => makePeopleInfo(json));
};

// выводим юнит
function makePeopleInfo(response) {
  console.log(response);
  
    let peopleInfo = document.querySelector(".people-info");
    
      const item = `
      <div>
        <div>name: ${response.name} </div> 
        <div>world: ${response.homeworld}</div>
        <div>height: ${response.height}</div>
      </div>`
      
      peopleInfo.innerHTML = item;
}

document.addEventListener('click', function(elem) {

  if(elem.target.matches('.people_link')) {
    let href = elem.target.getAttribute('href');
    getPeople(href)
    elem.preventDefault();
  }

});

