// import displayShows from './modules/displayList.js';
// import commentsAdded from './modules/addComments.js';
// import displayComments from './modules/displayComments.js'


// displayShows();
// commentsAdded();
// displayComments();

// getData();

// displayShows();

// const testBtn = document.querySelectorAll('.btn-comments');
// testBtn.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         console.log('hey');
//     })
// })

// const displayContainer = document.querySelector('#list');
//  displayContainer.addEventListener('click', (e) => {
//     if(e.target.classList.contains('btn-comments')) {
//         alert('heyyo');
//     }
//  });


/* eslint-disable import/prefer-default-export */


import './style.css';
import getData from './modules/api-data.js';
// import popup from './modules/popup.js';


getData();
// popup();

import { Display } from './modules/showComments.js';
import { addLikes, getAllLikes, getAllMovies, addComment } from './modules/getComments';
import Comment from './modules/comments.js';
import displayComments from './modules/displayComments';

const shows = await getAllMovies();
// const likes = await getAllLikes();
const modal = document.querySelector('.modal');
const image = document.getElementById('img-detail');
const btnModalComments = document.querySelectorAll('#modal-comments');
const total = document.querySelectorAll('.likeId');
const btnLikes = document.querySelectorAll('#btnLikes');
const formComments = document.querySelectorAll('.formComment');
let formId = 0;

// START LIKES SECTION

export const showLikes = async (showId) => {
  let totalLikes = '';

  const like = likes.filter((l) => l.item_id === showId);
  if (like[0]) {
    totalLikes = like[0].likes;
  }
  return totalLikes;
};

btnLikes.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const id = parseInt(event.target.getAttribute('data-showid'), 10);
    addLikes(id);
    total.forEach((el) => {
      showLikes(id).then((totalLikes) => {
        el.innerHTML = `<br><br><span class="likes_count">Likes(${totalLikes})`;
      });
    });
  });
});

// END LIKES SECTION

// START COMMENT MODAL SECTION

const toggleModal = (showId) => {
  const show = shows.filter((s) => s.show.id === showId);

  if (show.length > 0) {
    image.src = show[0].show.image.medium;
  }

  modal.classList.toggle('show-modal');
};

btnModalComments.forEach((Modalcomment) => {
  Modalcomment.addEventListener('click', (event) => {
    event.preventDefault();
    const id = parseInt(event.target.getAttribute('data-showid'), 10);
    toggleModal(id);
    formId = id;
  });
});

// closeButton.addEventListener('click', toggleModal);

// ADD COMMENT

formComments.forEach((formComment) => {
  formComment.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(formId);
    const formData = new FormData(event.target);
    const username = formData.get('name');
    const commentMsg = formData.get('comment');
    const comment = new Comment(formId, username, commentMsg);
    addComment(comment);
    formComment.reset();
  });
});

const displayContainer = document.querySelector('#list');
const overlay = document.querySelector('.over-lay');

displayContainer.addEventListener('click', async (e) => {
  if(e.target.classList.contains('btn-comments')) {
    overlay.classList.add('active')
    const getCommentId = e.target.id.split('-')[0];
    overlay.insertAdjacentHTML('afterbegin',await Display(getCommentId))
    window.scroll({ top: 0, left: 0 });}
});

const closeButton = document.querySelector('#close-button');


if(closeButton) {
    overlay.classList.remove('active')
    const getCommentId = e.target.id.split('-')[0];
    getCommentId.close();
  }
