'use strict';

let numberOfFilms;

const start = () => {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 11);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 11);
    }
};
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const rememberMyFilms = () => {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt ('Один из последних просмотренных фильмов?', 'Тор');
        const lastFilmRate = prompt('На сколько оцените его?', 5);
        if(lastFilm !== null && lastFilmRate !== null && lastFilm !== '' && lastFilmRate !== '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = lastFilmRate;
        } else {
            i--;
        }
    }
};
rememberMyFilms();

/* let count = 2;
while (count !== 0) {
    let lastFilm = prompt ('Один из последних просмотренных фильмов?', 'Тор');
    let lastFilmRate = prompt('На сколько оцените его?', 5);
    if(lastFilm !== null && lastFilmRate !== null && lastFilm !== '' && lastFilmRate !== '' && lastFilm.length < 50) {
        count--;
        personalMovieDB.movies[lastFilm] = lastFilmRate;
    }
} */

const detectPersonalLevel = () => {
    if(personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else if(personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
        console.log('Просмотрено довольно мало фильмов');
    } else {
        console.log('Произошла ошибка');
    }
};
//detectPersonalLevel();

const showMyDB = (hidden) => {
    if(!hidden) {
        console.log(personalMovieDB);
    }
};
showMyDB(personalMovieDB.privat);

const writeYourGenres = () => {
    for (let i = 1; i <= 3; i++) {
        const favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        if(favouriteGenre !== null && favouriteGenre !== null && favouriteGenre !== '' && favouriteGenre !== '') {
            //personalMovieDB.genres.push(favouriteGenre);
            personalMovieDB.genres[i - 1] = favouriteGenre;
        } else {
            i--;
        }
    }
};
writeYourGenres();