// API: http://www.omdbapi.com/?apikey=c1438081&

const movieListEl = document.querySelector(".movie-list");

async function main() {
    const movies = await fetch("http://www.omdbapi.com/?apikey=c1438081&t=Guardians+of+the+Galaxy");
    const movieData = await movies.json();
    movieListEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join("")
}

main();

function movieHTML(movie) {
    return `<div class="movie-card">
        <div class="movie-card__container">
            <h3>Title: ${movie.Title}</h3>
                <p><b>Year:</b> ${movie.Year}</p>
                <p><b>Poster:</b> ${movie.Poster}</p>
            </div>
        </div>`
}