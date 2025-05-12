//https://www.omdbapi.com/?apikey=b5972967&s=new

async function renderMovies(filter) {

  const movieTitle = document.querySelector(" .search__bar").value

  const movieListEl = document.querySelector(".movies__Wrapper");

  const spinner = document.querySelector(".fa-spinner");

  movieListEl.classList += ' movies__loading'

  const movies = await fetch(`https://www.omdbapi.com/?apikey=b5972967&s=${ movieTitle }`);
  const moviesData = await movies.json();  
  
  console.log(moviesData)


movieListEl.classList.remove('movies__loading')

if(filter === 'NEW_TO_OLD') {
  moviesData.Search.sort((a, b) => b.Year - a.Year)
}
if(filter === 'OLD_TO_NEW') {
  moviesData.Search.sort((a, b) => a.Year - b.Year)
}

movieListEl.innerHTML = moviesData.Search.map((imdbID) => userHTML(imdbID)).join("");

} 

function userHTML(imdbID) {
  
    return `<div class="movie">
    <figure class="movies__Wrapper">
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