
import INVOLVEMENT_URL from './involvementAPI.js';

const comments1 = document.querySelector('.comments-collection');

const displayComments = (item) => {
  const commentsHead = '<h2 class="comments-counter">Comments(0)</h2>';
  comments1.innerHTML = commentsHead;

fetch(`${INVOLVEMENT_URL}/comments?item_id=${item}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) return;
      document.querySelector('.comments-counter').innerHTML = `Comments (${data.length || 0})`;

      data.forEach((comment) => {
        const contentHTML = document.createElement('div');
        contentHTML.classList.add('commenting');
        contentHTML.innerHTML = `
          <div class="comment-head">
          <a href='https://github.com/${comment.username}'>${comment.username}</a>
          <p class="date-posted">-${comment.creation_date}</p>
          </div>
          <p>${comment.comment}</p>`;
        comments1.appendChild(contentHTML);
      });
    });
};

export default displayComments;