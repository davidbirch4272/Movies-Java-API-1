//https://www.omdbapi.com/?apikey=b5972967&s=new
let movies;
let Search;

async function renderMovies(filter) {

  const movieTitle = document.querySelector(" .search__bar").value

  const movieListEl = document.querySelector(".movies__Wrapper");

  async function main() {
  const movies = (await fetch(`https://www.omdbapi.com/?apikey=b5972967&s=${ movieTitle }`));
  const moviesData = await movies.json();
  console.log(moviesData)
  movieListEl.innerHTML = moviesData.Search.map((imdbID) => userHTML(imdbID)).join("");
  }
  
  movieListEl.classList += ' movies__loading'

if (!movies) {
  movies = await main();
}

  movieListEl.classList.remove('movies__loading')

if (filter === 'Year') {
   Search.sort((a, b) => a.Year - b.Year);
   }
else if (filter === 'Title') {
   Search.sort((a, b) => a.Title - b.Title);
  }

  function userHTML(imdbID) {

    return `<div class="movie">
    <figure class="movies__wrapper">
    <img class="movie__poster" src="${imdbID.Poster}" alt="">
    </figure>
    <div class="movie__title">
    ${imdbID.Title}
    </div>
    <div class="movie__year">
    ${imdbID.Year}
    </div>
    <div class="movie__imdbID">
    ${imdbID.imdbID}
    </div>
    </div>`
    }
  
  movieListEl.innerHTML = moviesHtml;
} 

function filterMovies(event) {
  renderMovies(event.target.value);
  }

setTimeout(() => {
renderMovies();
});






//function(search) {
// If userInput === 'number'
// return 
// function renderMovies{userInput}  
//  else 
//    if  userInput === 'type'
//

 // async function renderShows(filter) {
  //  const showsWrapper = document.querySelector(".books");
    
  //  showsWrapper.classList += ' shows__loading'
    
  //  if (!shows) {
  //    shows = await getShows();
  //  }
  //  
  //  showsWrapper.classList.remove('shows__loading')
  //  
  //  if (filter === year) {
  //     shows.sort((a, b) => a.Year - b.Year);
  ///     }
  //  else if (filter === 'Title') {
  //    shows.sort((a, b) => b.Title - a.Title);
  //  
  //    }
  //  else if (filter === 'Type') {
  //      shows.sort((a, b) => (b.movie - a.movie) || (b.series - a.series));
  //      }
    
  //  const newHTML = shows
  //    map((shows) => {
  //    return `<div class="book">
  //    <figure class="book__img--wrapper">
  //    <img class="book__img" src="${Poster.url}" alt="">
  //    </figure>
  //    <div class="book__title">
   //     ${book.title}
   //   </div>
   //   <div class="book__ratings">
   //     ${ratingsHTML(book.rating)}
   //   </div>
   //   <div class="book__price">
   //   ${priceHTML(book.originalPrice, book.salePrice)}
   //   </div>
   //   </div>`
    //  })
    //  .join("");
    
    //  booksWrapper.innerHTML = booksHtml;
   // } 
    //