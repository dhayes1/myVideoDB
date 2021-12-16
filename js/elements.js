import { searchForVideos, currentPage, totalPages, getVideoDetails } from './search.js';
import { qs, qsa, ce } from './utlities.js'
import { listVideos, saveVideo, searchList } from './Videos.js';
//import Video from './Video.js'

/**
 * @param {array} videoList
 */
export function displaySearchResults(videoList) {
    const main = qs('.main-wrapper');
    main.innerHTML = '';

    const videoContainer = ce('div');
    videoContainer.className = 'main-search-container';
    videoContainer.innerHTML = '';

    for (const video of videoList) {
        videoContainer.appendChild(createVideoElement(video));
    }

    main.appendChild(videoContainer);

    const videoElement = qsa('.search-result');
    for (const video of videoElement) {
        console.log(video);
        video.addEventListener('click', () => {
            console.log(video.id);
            //getVideoDetails(`${video.id}`);
            openVideoDetails(video.id);
        });
    }    
}

/**
 * @param {array} videoList
 */
 export function displayVideoList(videoList) {
    const main = qs('.main-wrapper');
    main.innerHTML = '';

    const videoContainer = ce('div');
    videoContainer.className = 'main-search-container';
    videoContainer.innerHTML = '';

    for (const video of videoList) {
        videoContainer.appendChild(createVideoElement(video));
    }

    main.appendChild(videoContainer);

    const videoElement = qsa('.search-result');
    for (const video of videoElement) {
        console.log(video);
        video.addEventListener('click', () => {
            console.log(video.id);
            //getVideoDetails(`${video.id}`);
            openVideoDetails(video.id);
        });
    }    
}

function createVideoElement(result) {
    const video = ce("div");
    video.className = "content-wrapper search-result";
    video.id = result.imdbID;

    video.appendChild(createPosterElement(result));
    video.appendChild(createTitleElement(result));
    video.appendChild(createYearElement(result));
    video.appendChild(createRuntimeElement(result));
    video.appendChild(createRatedElement(result));
    video.appendChild(createPlotElement(result));

    return video;
}

function createPosterElement(video) {
    const poster = ce("div");
    poster.className = "video-search-poster";
    if (video.Poster.toUpperCase() != 'N/A') {
        poster.style = `background: url(${video.Poster}); background-size: contain;`;
    } else {
        poster.innerHTML = 'No Image';
    }
    poster.id = `${video.imdbID}`;

    return poster;
}

function createYearElement(video) {
    const year = ce("p");
    year.className = "video-search-year search-content";
    year.innerHTML = `<span class="info-title-small">Year:</span>${video.Year}`;

    return year;
}

function createTitleElement(video) {
    const title = ce("p");
    title.className = "video-search-title search-content";
    title.innerHTML = video.Title;

    return title;
}

function createRuntimeElement(video) {
    const runtime = ce("p");
    runtime.className = "video-search-runtime search-content";
    runtime.innerHTML = `<span class="info-title-small">Runtime:</span>${video.Runtime}`;

    return runtime;
}

function createRatedElement(video) {
    const rated = ce("p");
    rated.className = "video-search-rated search-content";
    rated.innerHTML = `<span class="info-title-small">Rated:</span>${video.Rated}`;

    return rated;
}

function createPlotElement(video) {
    const plot = ce("p");
    plot.className = "video-search-plot search-content";
    plot.innerHTML = `<span class="info-title-small">Plot:</span>${video.Plot}`;

    return plot;
}

export function loadSearchPage() {
    const header = qs('.header-wrapper');
    header.innerHTML = '<div class="header-content"><div class="button-settings button-header"></div><div class="button-filter button-header"></div><div class="search-content"><input class="input-search" type="text" name="search_input" placeholder="Enter title"><div class="button-search"></div></div><div class="button-lists button-header"></div></div>';

    const main = qs('.main-wrapper');
    main.innerHTML = 'Search for video title.';

    const settings = qs('.button-settings');
    settings.addEventListener('click', function() {
        console.log('settings clicked');

        // TODO: Write the function to load the settings page.
        // This could be a dropdown or a sliding side menu to
        // that stores preferences to the local storage. These
        // values should be loaded when the app starts.
    });

    const filter = qs('.button-filter');
    filter.addEventListener('click', function() {
        console.log('filter clicked');

        // TODO: write the code for the loading the filters (video type).
        // Currently the default video type is movie. There are 3 acceptable
        // video types movie, series, episode.
    });

    const search = qs('.button-search');
    search.addEventListener('click', function() {
        console.log('search clicked');
        //const pages = qs('.display-pages');
        //pages.innerHTML = '';
        searchForVideos(1);
    });

    const lists = qs('.button-lists');
    lists.addEventListener('click', function() {
        console.log('lists clicked');
        listVideos('myVideos');

        // TODO: Write function to load the lists page.
    });

    const footer = qs('.footer-wrapper');
    footer.innerHTML = '<div class="footer-content"><div class="button-back button-footer"></div><div class="display-pages"></div><div class="button-next button-footer"></div></div>';

    const back = qs('.button-back');
    back.addEventListener('click', function() {
        console.log('back clicked');
        if (currentPage == 1) {
            return;
        } else {
            let activePage = currentPage;
            activePage--;
            searchForVideos(activePage);
        }
    });

    const next = qs('.button-next');
    next.addEventListener('click', function() {
        console.log('next clicked');
        if (currentPage == totalPages) {
            return;
        } else {
            let activePage = currentPage;
            activePage++;
            searchForVideos(activePage);
        }
    });
}

async function openVideoDetails(videoID) {
    const video = await getVideoDetails(videoID);
    video.personalRating = 0;
    video.physicalLocation = '';
    video.List = '';
    video.mediaOwned = [];
    video.statusPhysical = '';
    console.log(video)

    const header = qs('.header-content');
    header.innerHTML = '<div class="button-settings button-header"></div><div class="content-title">Video Details</div><div class="button-save button-header"></div>';

    const settings = qs('.button-settings');
    settings.addEventListener('click', function() {
        console.log("settings clicked!");
    });

    const save = qs('.button-save');
    save.addEventListener('click', function() {
        console.log("save video!");
        if (searchList(video.imdbID)) {
            window.alert(`${video.Title} is already part of your list!`)
            loadSearchPage();
        } else {
            saveVideo(video, 'myVideos');
            listVideos('myVideos');
        }
    });

    const main = qs('.main-wrapper');
    main.innerHTML = `<div class="main-details-container"><div class"detail-title detail">${video.Title}</div><div class="detail-poster detail" style="height: 250px; width:175px; background: url(${video.Poster}); background-size: contain;"></div><p class="detail-rated detail"><span class="info-title-detail">Rated:</span>${video.Rated}</p><p class="detail-year detail"><span class="info-title-detail>Year:</span>${video.Year}</p><p class="detail-imdbRating detail"><span class="info-title-detail">IMDB Rating:</span>${video.imdbRating}</p><div class="detail-list detail"><span class="info-title-detail">List:</span><select class="dropdown" name="list"><option value="owned">Owned</option><option value="wishlist">Wishlist</option></select><p class="detail-actors detail"><span class="info-title-detail">Actors:</span>${video.Actors}</p><p class="detail-genres detail"><span class="info-title-detail">Genres:</span>${video.Genres}</p><p class="detail-plot detail"><span class="info-title-detail">Plot:</span>${video.Plot}</p></div>`;

    const listType = qs('.dropdown');
    listType.addEventListener('change', function() {
        video.List = listType.value;
        console.log(video.List);
    })

    //video.List = listType.value;

    const footer = qs('.footer-content');
    footer.innerHTML = '';
}