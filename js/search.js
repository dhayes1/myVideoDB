import { displaySearchResults } from './elements.js';
import { qs } from './utlities.js'

let currentPage = 1;
let totalPages = 0;

/** Search for videos **
 *  Create the api string for api call
 *  Results are returned with minimal information.
 *  @param {number} pageNumber The page number to call from the api
 **/
async function searchForVideos(pageNumber) {
    currentPage = pageNumber;
    
    /** Get page elements **/
    // user input value
    const title = qs('.input-search').value;
    
    // page number display
    const pageDisplay = qs('.display-pages')

    /** Define the api call **/
    // video type to search for
    // TODO: Figure out a way to make this selectable.
    // There are 3 types of videos to search for (movie, series, & episode).
    const type = 'movie';

    // api string
    const api = `https://www.omdbapi.com/?apikey=7665b6fb&s=${title}&type=${type}&page=${pageNumber}`;

    // create an empty array for storing search results
    let searchResults = [];

    // fill array with search results
    searchResults = await getSearchResults(api);
    //console.log(searchResults);

    displaySearchResults(searchResults);

    const page = qs('.display-pages');
    page.innerHTML = `${currentPage} / ${totalPages}`;
}

/** Gather more information **
 *  Calls omdbAPI.com using the imdbID to get additional information.
 *  @param {string} api The api call 
 */
async function getSearchResults(api) {
    /** Fetch video titles from omdbAPI.com **/
    let results = await fetch(api);    // promise
    let resultsData = await results.json();

    // calculate the total number of pages for an initial search
    if (resultsData.totalResults > 10 && currentPage == 1) {
        calculatePages(resultsData.totalResults);
    }

    // return array detailed video information
    return getSearchDetails(resultsData.Search);
}

async function getSearchDetails(videoArray) {
    // create an empty array for storing detailed video information
    let videoDetails = [];
    
    // get details of each video in the video array
    for await (let video of videoArray) {
        let result = await fetch(`https://www.omdbapi.com/?apikey=7665b6fb&i=${video.imdbID}`); // promise
        let resultData = await result.json();

        //console.log(details);
        videoDetails.push(resultData);
    }

    //return array of detailed video information
    return videoDetails;
}

async function getVideoDetails(videoID) {
    const result = await fetch(`https://www.omdbapi.com/?apikey=7665b6fb&i=${videoID}`); // promise
    const resultData = await result.json();

    //console.log(resultData);

    return resultData;
}

function calculatePages(totalResults) {
    if (totalResults%10 != 0) {
        //console.log(parseInt(totalResults/10 + 1));
        totalPages = parseInt(totalResults/10 + 1);
    } else {
        totalPages = parseInt(totalResults/10);
    }
}

export { searchForVideos, currentPage, totalPages, getVideoDetails };