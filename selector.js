//https://www.omdbapi.com/?apikey=b5972967&s=new

async function renderMovies(filter = "") {
  const movieTitle = document.querySelector(".search__bar");
  const movieListEl = document.querySelector(".movies__Wrapper");
  
  
  movieListEl.innerHTML = `<i class="fas fa-spinner movies__loading--spinner"></i>`;
  
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=b5972967&s=${movieTitle.value.trim()}`
  );
  
  const moviesData = await movies.json();  
  
  if(filter === 'NEW_TO_OLD') {
    moviesData.Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  }
  if(filter === 'OLD_TO_NEW') {
    moviesData.Search.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
  }
  
  const moviesHTML =  moviesData.Search.map((movie) => userHTML(movie)).join("");
  
  movieListEl.innerHTML = moviesHTML; 
  
} 

function userHTML(movie) {
  
  return `<div class="movie">
  <figure class="movies__Wrapper">
  <img class="movie__poster" src="${movie.Poster}" alt="">
  </figure>
  <div class="movie__title">
  ${movie.Title}
  </div>
  <div class="movie__year">
  ${movie.Year}
  </div>
  <div class="movie__imdbID">
  ${movie.imdbID}
  </div>
  </div>`
}

document.addEventListener('DOMContentLoaded', function() { const searchBar =document.querySelector('.search__bar'); searchBar.addEventListener('keydown', function(event) { if (event.key ==='Enter') { event.preventDefault(); renderMovies(); } }); });


 function filterMovies(event) {
  renderMovies(event.target.value);
 }

 setTimeout(() => {
  
 }, 10000)
  