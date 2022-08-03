import displayComments from './displayComments';
import commentsAdded from './addComments.js';

const commentFunction = () => {
  const getMovieData = async (id) => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const show = await response.json();
      return show;
  }
  const commentButtons = document.querySelectorAll('.btn-comments');
  const openPopup = (event) => {
    const targetId = event.target.id;
    const dialog = document.querySelector('#list');
    dialog.showModal();
    getMovieData(targetId).then((singleData) => {
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
            <input type="text" id="name" class="alert-button" name="username1" placeholder="Type your name here">
            <textarea id="comments" class="alert-button" name="message" cols="40" rows="5" placeholder="Write you comment here.."></textarea>
            <button type="submit" class="submit-comments">Comment</button>
          </form>
        `;

      const closeButton = document.querySelector('#close-button');
      closeButton.addEventListener('click', () => {
        dialog.close();
      });
      displayComments(targetId);
      commentsAdded(targetId);
    });
  };

  // commentButtons.classList.add('active');
  // commentButtons.style.diplay = 'red';
// commentButtons.onClick = () => {
//     openPopup();
// }
  const addClickEvent = (button) => {
    button.addEventListener('click', openPopup);
  };
  commentButtons.forEach(addClickEvent);
};
export default commentFunction;