'use strict';

const ad = document.querySelector('.promo__adv');
const imgs = ad.querySelectorAll('img');
const title = ad.querySelector('.promo__adv-title');
const bg = document.querySelector('.promo__bg');
const genre = bg.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

title.remove();

imgs.forEach(img => {
    img.remove();
});

genre.textContent = 'Драма';

bg.style.cssText = 'background: url("img/bg.jpg")';

function showMovies(movies){
    movieList.innerHTML = '';
    movieDB.movies.sort();
    movies.forEach((mov, i) => {
        movieList.innerHTML += `  
        <li class="promo__interactive-item">${i + 1} ${mov}
            <div class="delete"></div>
        </li>`;
    })
} 
showMovies(movieDB.movies)
