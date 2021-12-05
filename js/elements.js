export function createSearchElement() {
    const page = document.querySelector('.content-page');

    const search = document.createElement
}

export function displayMovieDetails(videoList) {
    const movieContainer = document.getElementById('movie-list-container');
    movieContainer.innerHTML = '';

    for (const video of videoList) {
        movieContainer.appendChild(createVideoElement(video));
    }
}

function createVideoElement(result) {
    const movie = document.createElement("div");

    movie.appendChild(createPosterElement(result));
    movie.appendChild(createTitleElement(result));
    movie.appendChild(createYearElement(result));
    movie.appendChild(createRuntimeElement(result));
    movie.appendChild(createRatedElement(result));

    return movie;
}

function createPosterElement(movie) {
    const poster = document.createElement("img");
    poster.className = "poster";
    poster.src = `${movie.Poster}`;
    poster.id = `${movie.imdbID}`;

    return poster;
}

function createYearElement(movie) {
    const year = document.createElement("div");
    year.className = "year";
    year.innerHTML = `<span class="info-title-small">Year:</span>${movie.Year}`;

    return year;
}

function createTitleElement(movie) {
    const title = document.createElement("div");
    title.className = "title";
    title.innerHTML = `<span class="info-title-small">Title:</span>${movie.Title}`;

    return title;
}

function createRuntimeElement(movie) {
    const runtime = document.createElement("div");
    runtime.className = "runtime";
    console.log('imdb Search:')
    console.log(movie);
    runtime.innerHTML = `<span class="info-title-small">Runtime:</span>${movie.Runtime}`;

    return runtime;
}

function createRatedElement(movie) {
    const rated = document.createElement("div");
    rated.className = "rated";
    rated.innerHTML = `<span class="info-title-small">Rated:</span>${movie.Rated}`;

    return rated;
}