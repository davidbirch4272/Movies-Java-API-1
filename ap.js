// https://www.omdbapi.com/?apikey=b5972967&s=fast&Furious

const movieListEl = document.querySelector(".movies__Wrapper");

async function main() {
const movies = (await fetch("https://www.omdbapi.com/?apikey=b5972967&s=fast&Furious"));
const moviesData = await movies.json();
movieListEl.innerHTML = moviesData.map((imdbID) => userHTML(imdbID)).join("");
}      
      
      
main();      

function showMovies(imdbID) {
    localStorage.setItem("imdbID", imdbID);
    window.location.href = `${window.location.origin}/selector.html`
    }
      
function userHTML(imdbID) {       
      return `<div class="container">
      <div class="user-card__container">
        <img src=${imdbID.Poster}</img>
        <h2>${imdbID.Title}</h2>
        <p>${imdbID.Year}</p>
        <p>${imdbID.Type}</p>
        <p>${imdbID.imdbID}</p>
        
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
        ${user.website}
        </a></p>

        </div>
        </div>`;
    
  }
