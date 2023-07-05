'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
const ad = document.querySelector('.promo__adv');
const imgs = ad.querySelectorAll('img');
const title = ad.querySelector('.promo__adv-title');
const bg = document.querySelector('.promo__bg');
const genre = bg.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');
const addForm = document.querySelector('.add');
const inputForm = addForm.querySelector('.adding__input');
const inputCheck = addForm.querySelector('[type = "checkbox"]');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const deleteAdv = (...arg) => {
    arg[0].remove();

    arg[1].forEach(img => {
        img.remove();
    });
}
deleteAdv(title, imgs)

const makeChange = (...arg) => {
    arg[0].textContent = 'Драма';

    arg[1].style.cssText = 'background: url("img/bg.jpg") center 0/cover no-repeat;';
}
makeChange(genre, bg)


const sortArray = (arr) => {
    arr.sort();
}


function showMovies(films, parent){
    parent.innerHTML = '';
    sortArray(films);

    films.forEach((film, i) => {
        parent.innerHTML += `  
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>`;
    })

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            showMovies(films, parent);
        })
    })
} 
showMovies(movieDB.movies, movieList)


function addMovie(){

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let newMovie = inputForm.value;
        const favorite = inputCheck.checked;

        if(newMovie){
            if(newMovie.length > 21){
                newMovie = `${newMovie.substring(0,22)}...`
            }
            if(favorite){
                alert('Добавили любимый фильм')
            }
            movieDB.movies.push(newMovie);
            sortArray(movieDB.movies);
            showMovies(movieDB.movies, movieList);
        }
        e.target.reset();
    })
}
addMovie(movieDB.movies);

});