import { qs } from './utlities.js'
import { readFromLS, writeToLS } from './ls.js'
import { displayVideoList, loadSearchPage } from './elements.js';
//import { Video } from './Video.js'

export default class Videos {
    constructor () {
        this.element = qs('.videos');
        this.key = 'myVideos';

        getVideos(this.key);
        if (videoList.length != 0) {
            listVideos();
        } else {
            loadSearchPage();
        }
    }
}

let videoList = null;
//let currentFilter = 'All';

/** 
 * check the contents of todoList, a local variable containing a list of ToDos. 
 * If it is null then pull the list of todos from localstorage, update the local variable, and return it
 * @param {string} key The key under which the value is stored under in LS 
 * @return {array} The value as an array of objects
 **/
function getVideos(key) { 
    (videoList === null) ? videoList = readFromLS(key) : videoList; 
}

/** 
 * build a todo object, add it to the todoList, and save the new list to local storage.
 * A todo should look like this: { id : timestamp, content: string, completed: bool }
 * @param {string} key The key under which the value is stored under in LS
 * @param {string} task The text of the task to be saved.
 **/
export function saveVideo(video, key) {
    //const video = new Video(video);

    videoList.push(video);

    writeToLS(key, videoList);
 }

 export function listVideos(key) {
    const header = qs('.header-wrapper');
    header.innerHTML = '<div class="header-content"><div class="button-settings button-header"></div><div class="button-filter button-header"></div><div class="search-content"><select class="list-type"><option value="owned">Owned</option><option value="wishlist">Wishlist</option></select></div><div class="button-find button-header"></div></div>';

    const main = qs('.main-wrapper');
    main.innerHTML = '';

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

    /*
    const search = qs('.button-search');
    search.addEventListener('click', function() {
        console.log('search clicked');
        //const pages = qs('.display-pages');
        //pages.innerHTML = '';
        searchForVideos(1);
    });
    */
    
    displayVideoList(videoList);

    const lists = qs('.button-find');
    lists.addEventListener('click', function() {
        console.log('lists clicked');
        loadSearchPage();

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

export function searchList(imdbID) {
    for (const video of videoList) {
        if (video.imdbID === imdbID) {
            return true;
        } else {
            return false;
        }
    }
}
