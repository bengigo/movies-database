
import "./style.css";
import getData from './modules/api-data.js';
import comments from './modules/commentPopup.js';
import displayComments from './modules/comments.js';
import { getLikes, postLikes } from './modules/likesData.js';
import countShows from "./modules/showCounter";


getData();

comments();

displayComments();


getLikes();

const displayContainer = document.querySelector('#list');
displayContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('heart')) {
    const targetId = e.target.id;
    postLikes(targetId);
  }
});

displayContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("heart")) {
    const numDisplay = e.target.nextElementSibling;
    let numOfLikes = Number(e.target.nextElementSibling.textContent);
    numOfLikes = numOfLikes + 1;
    numDisplay.textContent = String(numOfLikes);
  }
});

countShows();