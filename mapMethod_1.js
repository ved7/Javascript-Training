//remember to comment out the code to try yourself out
let movies = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        director: "Frank Darabont",
    },
    {
        title: "The Godfather",
        year: 1972,
        director: "Francis Ford Coppola",
    },
    {
        title: "The Godfather: Part II",
        year: 1974,
        director: "Francis Ford Coppola",
    }
];

//extract movies title in an array
let moviesName = movies.map((movie) => movie.year);     // console.log(moviesName);

//return array of movies by Francis Ford Coppola
let reqMovies = movies.filter((movie) => (movie.director === 'Francis Ford Coppola'))      // console.log(reqMovies);

//add property movieFile with title + '-' + year
let moviesFile = movies.map((movie) => {
    movie.movieFile = movie.title + '-' + movie.year
    return movie
})
// console.log(moviesFile);

//extract movieFile in an array
let moviesFileName = movies.map((movie) => {
    movie.movieFile = movie.title + '-' + movie.year;
    return movie.movieFile;
});
// console.log(moviesFileName);
