import { createMovieElement } from './elements.js';

let videosArray = [];

const search = document.querySelector('#button-search');
search.addEventListener('click', findVideos);

async function findVideos(pageNumber = 1) {
    // get video title from search input
    const title = document.getElementById("input-title").value;

    // get search type
    const type = document.getElementById("input-type").value;

    const api = `http://www.omdbapi.com/?apikey=7665b6fb&s=${title}&type=${type}&page=${pageNumber}`;
    
    console.log('Getting videos!');
    videosArray = await getVideos(api);

    console.log('Received video info!');
    console.log('Video info:');
    console.log(videosArray);
}

async function getVideos(api) {
    // fetch movie titles from omdbAPI.com
    // promise
    let response = await fetch(api);
    let jsonVideoData = await response.json();
    
    console.log('Received search results data!');
    
    console.log('Getting video details!');
    
    return getMovieInfo(jsonVideoData.Search);
}

async function getMovieInfo(videoArray) {
    let videoDetails = [];
    videoArray.forEach(async (video) => {
        let response = await fetch(`http://www.omdbapi.com/?apikey=7665b6fb&i=${video.imdbID}`); // promise
        let details = await response.json();

        //console.log(details);
        videoDetails.push(details);
    })

    console.log('Publishing video details!');
    //console.log(videoDetails);
    return videoDetails;
}