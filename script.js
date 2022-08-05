'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 11);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

/* for (let i = 0; i < 2; i++) {
    const lastFilm = prompt ('Один из последних просмотренных фильмов?', 'Тор');
    const lastFilmRate = prompt('На сколько оцените его?', 5);
    if(lastFilm !== null && lastFilmRate !== null && lastFilm !== '' && lastFilmRate !== '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = lastFilmRate;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
} */
let count = 2;
while (count !== 0) {
    let lastFilm = prompt ('Один из последних просмотренных фильмов?', 'Тор');
    let lastFilmRate = prompt('На сколько оцените его?', 5);
    if(lastFilm !== null && lastFilmRate !== null && lastFilm !== '' && lastFilmRate !== '' && lastFilm.length < 50) {
        count--;
        personalMovieDB.movies[lastFilm] = lastFilmRate;
    }
}

if(personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else if(personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    console.log('Вы классический зритель');
} else if(personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
    console.log('Просмотрено довольно мало фильмов');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);
