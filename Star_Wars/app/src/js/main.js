import 'webp-in-css/polyfill';

let btnPeople = document.querySelector('.btn_peoples');
let btnFilms = document.querySelector('.btn_films');
let btnStarships = document.querySelector('.btn_starships');

// ============= ЮНИТЫ ===============================================

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


// формируем список юнитов
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


// получаем один юнит 
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
        <div>height: ${response.height}</div>
        <div>world: ${response.homeworld}</div>
        <div class="films">Films: ${response.films}</div>
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


// ============== ЭПИЗОДЫ ===============================================

// получаем список эпизодов
function getFilms(url = 'https://swapi.co/api/films/'){
  fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000/',
        'Referer': 'http://localhost:3000/'
      }
  })
  .then(response => response.json())  
  .then(json => makeFilmsList(json))
};

btnFilms.addEventListener('click', () => {
  getFilms();    
});


// формируем список эпизодов
function makeFilmsList(response) {
  
  if (response.results.length > 0) {
    let filmDiv = document.querySelector("#episode");
    
    response.results.map(function(elem) {
      const item = `
      <div>
        <a href="${elem.url}" class="film_link" target="_blank">${elem.title}</a>
        <div><span class="description">Description</span>: ${elem.opening_crawl}</div>
      </div>`;
      
      filmDiv.insertAdjacentHTML('beforeend', item)
    });
  }
}

// получаем один эпизод 
function getFilm(url){
  fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000/',
        'Referer': 'http://localhost:3000/'
      }
  })
  .then(response => response.json())
  .then(json => makeFilmInfo(json));
};

// выводим эпизод
function makeFilmInfo(response) {
  console.log(response);
  
    let filmInfo = document.querySelector(".film-info");
    
      const item = `
      <div>
        <div>Title: ${response.title} </div> 
        <div>Description: ${response.opening_crawl}</div>
        <div>Characters: ${response.characters}</div>
      </div>`
      
      filmInfo.innerHTML = item;
}

document.addEventListener('click', function(elem) {

  if(elem.target.matches('.film_link')) {
    let href = elem.target.getAttribute('href');
    getFilm(href)
    elem.preventDefault();
  }
});


// ============== КОРАБЛИ  ===============================================

// получаем список кораблей
function getStarships(url = 'https://swapi.co/api/starships/'){
  fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000/',
        'Referer': 'http://localhost:3000/'
      }
  })
  .then(response => response.json())  
  .then(json => makeStarshipsList(json))
};

btnStarships.addEventListener('click', () => {
  getStarships();    
});


// формируем список кораблей
function makeStarshipsList(response) {
  
  if (response.results.length > 0) {
    let starshipDiv = document.querySelector("#starship");
    
    response.results.map(function(elem) {
      const item = `
      <div>
        <a href="${elem.url}" class="starship_link" target="_blank">${elem.name}</a>
      </div>`;
      
      starshipDiv.insertAdjacentHTML('beforeend', item)
    });
  }

  if (response.next !== null) {
    getStarships(response.next);
  }
}

// получаем один корабль 
function getStarship(url){
  fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000/',
        'Referer': 'http://localhost:3000/'
      }
  })
  .then(response => response.json())
  .then(json => makeStarshipInfo(json));
};

// выводим корабль
function makeStarshipInfo(response) {
  console.log(response);
  
    let starshipInfo = document.querySelector(".starship-info");
    
      const item = `
      <div>
        <div>Title: ${response.name} </div> 
        <div>Model: ${response.model}</div>
        <div>Films: ${response.films}</div>
      </div>`
      
      starshipInfo.innerHTML = item;
}

document.addEventListener('click', function(elem) {

  if(elem.target.matches('.starship_link')) {
    let href = elem.target.getAttribute('href');
    getStarship(href)
    elem.preventDefault();
  }
});

