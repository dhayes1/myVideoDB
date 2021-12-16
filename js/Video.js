let videos = [];

export default class Video {
    constructor(actors, awards, boxOffice, country, dvd, director, genre, language, metascore, plot, poster, production, rated, ratings, released, response, runtime, title, totalSeasons, type, website, writer, year, imdbID, imdbRating, imdbVotes) {
        this.Actors = this.createArray(actors);
        this.Awards = awards;
        this.BoxOffice = boxOffice;
        this.Country = country;
        this.DVD = dvd;
        this.Director = director;
        this.Genre = this.createArray(genre);
        this.Language = language;
        this.Metascore = metascore;
        this.Plot = plot;
        this.Poster = poster;
        this.Production = production;
        this.Rated = rated;
        this.Ratings = ratings;
        this.Released = released;
        this.Response = response;
        this.Runtime = runtime;
        this.Title = title;
        this.totalSeasons = totalSeasons;
        this.Type = type;
        this.Website = website;
        this.Writer = this.createArray(writer);
        this.Year = year;
        this.imdbID = imdbID;
        this.imdbRating = imdbRating;
        this.imdbVotes = imdbVotes;

        // additional info
        this.personalRating = 0;
        this.physicalLocation = '';
        this.List = '';
        this.mediaOwned = [];
        this.statusPhysical = '';
        
    }

    
    // getters
    getActors() { return this.Actors; }
    getAwards() { return this.Awards; }
    getBoxoffice() { return this.BoxOffice; }
    getCountry() { return this.Country; }
    getDVD() { return this.DVD; }
    getDirector() { return this.Director; }
    getGenre() { return this.Genre; }
    getLanguage() { return this.Language; }
    getMetascore() { return this.Metascore; }
    getPlot() { return this.Plot; }
    getPoster() { return this.Poster; }
    getProduction() { return this.Production; }
    getRated() { return this.Rated; }
    getRatings() { return this.Ratings; }
    getReleased() { return this.Released; }
    getResponse() { return this.Response; }
    getRuntime() { return this.Runtime; }
    getTitle() { return this.Title; }
    getTotalSeasons() { return this.totalSeasons; }
    getType() { return this.Type; }
    getWebsite() { return this.Website; }
    getWriter() { return this.Writer; }
    getYear() { return this.Year; }
    getImdbID() { return this.imdbID; }
    getImdbRating() { return this.imdbRating; }
    getImdbVotes() { return this.imdbVotes; }
    
    getPersonalRating() { return this.personalRating; }
    getPhysicalLocation() { return this.physicalLocation; }
    getList() { return this.List; }
    getMediaOwned() { return this.mediaOwned; }
    getStatusPhysical() { return this.statusPhysical; }

    // setters
    setActors(_actors) {
        if (Array.isArray(_actors)) {
            this.Actors = _actors; 
        } else {
            this.Actors = createArray(_actors);
        }
    }
    setAwards(_awards) { this.Awards = _awards; }
    setBoxoffice(_boxOffice) { this.BoxOffice = _boxOffice; }
    setCountry(_country) { this.Country = _country; }
    setDVD(_dvd) { this.DVD = _dvd; }
    setDirector(_director) { this.Director = _director; }
    setGenre(_genre) {
        if (Array.isArray(_genre)) {
            this.Genre = _genre; 
        } else {
            this.Genre = createArray(_genre);
        }
    }
    setLanguage(_language) { this.Language = _language; }
    setMetascore(_metascore) { this.Metascore = _metascore; }
    setPlot(_plot) { this.Plot = _plot; }
    setPoster(_poster) { this.Poster = _poster; }
    setProduction(_production) { this.Production = _production; }
    setRated(_rated) { this.Rated = _rated; }
    setRatings(_ratings) { this.Ratings = _ratings; }
    setReleased(_released) { this.Released = _released; }
    setResponse(_response) { this.Response = _response; }
    setRuntime(_runtime) { this.Runtime = _runtime; }
    setTitle(_title) { this.Title = _title; }
    setTotalSeasons(_totalSeasons) { this.totalSeasons = _totalSeasons; }
    setType(_type) { this.Type = _type; }
    setWebsite(_website) { this.Website = _website; }
    setWriter(_writer) { this.Writer = _writer; }
    setYear(_year) { this.Year = _year; }
    setImdbID(_imdbID) { this.imdbID = _imdbID; }
    setImdbRating(_imdbRating) { this.imdbRating = _imdbRating; }
    setImdbVotes(_imdbVotes) { this.imdbVotes = _imdbVotes; }
    
    setPersonalRating(_personalRating) { this.personalRating = _personalRating; }
    setPhysicalLocation(_physicalLocation) { this.physicalLocation = _physicalLocation; }
    setList(_List) { this.List = _List; }
    setMediaOwned(_mediaOwned) { this.mediaOwned = _mediaOwned; }
    setStatusPhysical(_statusPhysical) { this.statusPhysical = _statusPhysical; }

    // methods
    createArray(string) {
        console.log(typeof(string));
        //return string.split(',');
    }
}