// API: http://www.omdbapi.com/?apikey=c1438081&

const movieListEl = document.querySelector(".movie-list");

var api = 'https://www.omdbapi.com/?apikey=c1438081&s=';
var input = 'guardians';

function setup() {
    var button = select('#submit');
    button.mousePressed(main);
    input = select('#movieKeyword');
}

//var url = api + input.value();

async function main() {
    
    const movies = await fetch("https://www.omdbapi.com/?apikey=c1438081&s=" + input);
    const movieData = await movies.json();
    movieListEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join("");
 }

 main();

 function movieHTML(movie) {
    return `<div class="movie-card">
        <div class="movie-card__container">
            <h3>Title: ${movie.Title}</h3>
                <p><b>Year:</b> ${movie.Year}</p>
                <p><b>Poster:</b> <a href="${movie.Poster}" target="_blank">${movie.Poster}</a></p>
            </div>
        </div>`
    }