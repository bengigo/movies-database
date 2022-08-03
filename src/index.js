import './style.css';
import getData from './modules/api-data.js';

getData();

// displayShows();

const testBtn = document.querySelectorAll('.btn-comments');
testBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log('hey');
    })
})

const displayContainer = document.querySelector('#list');
 displayContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-comments')) {
        alert('heyyo');
    }
 });