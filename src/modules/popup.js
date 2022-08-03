import displayComments from './displayComments';
import addComment from './addComments.js';
import getData  from './api-data';

const commentFunction = () => {
  getData();
  const commentButtons = document.querySelectorAll('.btn-comments');
  const openPopup = (event) => {
    const targetId = event.target.id;
    const dialog = document.querySelector('dialog');
    dialog.showModal();
    getSingleMovieData(targetId).then((singleData) => {
      dialog.innerHTML = `
          <a id="close-button" class="comment-popup-close-button" href="#">X</a>
          <div class="poster-container">
          <img id="media-poster" src="${singleData.image.original}">
          </div>
          <div class="movie-description">
          <p class="comment-popup-movie-name">${singleData.name} </strong> ⭐${singleData.rating.average}</p>
          <p><strong>Genre:</strong> ${singleData.genres}</p>
          <p>${singleData.summary}</p>
          </div>
          <br>
          <div class="comment-section">
          <p id="review-title">Reviews (<span id="review-count">0</span>)</p>
          <form action="#" class="add-comments">
            <h3>Add your comment</h3>
            <input type="text" id="name" name="username1" placeholder="Type your name here">
            <textarea id="comments" name="message" cols="40" rows="5" placeholder="Write you comment here.."></textarea>
            <button type="submit" class="submit-comments">Comment</button>
          </form>
        `;

      const closeButton = document.querySelector('#close-button');
      closeButton.addEventListener('click', () => {
        dialog.close();
      });
      displayComments(targetId);
      addComment(targetId);
    });
  };
  const addClickEvent = (button) => {
    button.addEventListener('click', openPopup);
  };
  commentButtons.forEach(addClickEvent);
};
export default commentFunction;