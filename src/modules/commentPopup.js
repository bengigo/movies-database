
// import displayComments from "./getComments.js";
// import fetchComments from './comments.js'
 

import displayComments from './comments.js';

const comments = () => {
  const getShowData = async (id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const showData = await response.json();
    return showData;
  };

  const displayContainer = document.querySelector('#list');
  displayContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-comments')) {
 
  const displayContainer = document.querySelector("#list");
  displayContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-comments")) {

  const displayContainer = document.querySelector('#list');
  displayContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-comments')) {

      const dialog = document.querySelector('dialog');
      dialog.showModal();
      const targetId = e.target.id;

      getShowData(targetId).then((showData) => {
        dialog.innerHTML = `
        <div class="Popup-container">
        <span class="close material-symbols-outlined">&times</span>
        <img class="popup-poster" src="${showData.image.medium}">
        <div class="title-row">
          <h3>${showData.name}</h3> ⭐<span>${showData.rating.average}</span>
        </div>
        <p class="poster-container">${showData.genres}</p>
        <p class="poster-container">${showData.language}</p>
        <p class="poster-container">${showData.summary}</p>
        <br>
        <h3 class="comments-counter">Comments(<span>0</span>)</h3>
        <ul class="comment-section">
        </ul>

        <form action="#" class="add-comments" id="comment-form">
        <h3>Add your comment</h3>
        <input type="text" id="name" name="username1" placeholder="Type your name here">
        <textarea id="comments" name="commentMsg1" cols="40" rows="5" placeholder="Write you comment here.."></textarea>
        <button type="submit" id=${showData.id} class="submit-comments">Comment</button>
        </form>
        `;

        fetchComments(targetId);

        const submit = document.querySelector('.submit-comments');

        submit.addEventListener('click', (e) => {
          e.preventDefault();
          const commentList = document.querySelector('.comment-section');
          const name = document.getElementById('name').value.trim();
          const addComment = document.getElementById('comments').value.trim();
          const form = document.querySelector('form');
          const newComment = new Comment(+e.target.id, name, addComment);
          const date = Date().split(' ').splice(1, 3).join(' ')
            .split(' ')
            .reverse();
          const month = ('JanFebMarAprMayJunJulAugSepOctNovDec'.indexOf(date.slice(2).join('')) / 3 + 1);
          const commentCount = document.querySelector('.comments-counter span');

          if (name && addComment) {
            (postComment(newComment));
            commentList.innerHTML += `<li>${date[0].concat(`-0${month}-${date[1]}`)} ${name}: ${addComment}</li>`;
            let count = +commentCount.textContent;
            count += 1;
            commentCount.textContent = count;
          }
          form.reset();
        });
      });
    }

    if (e.target.classList.contains('close')) {
      const dialog = document.querySelector('dialog');
      dialog.close();
    }

    const createComment = (comments) => {
      const commentCount = document.querySelector('.comments-counter');
      commentCount.innerHTML = `Comments (<span>${comments.length}</span>)`;
      const commentList = document.querySelector('.comment-section');
      commentList.innerHTML = '';
      comments.forEach((comment) => {
        commentList.innerHTML += `<li>${comment.creation_date}: ${comment.username}: ${comment.comment}</li>`;
      });
    };

    const apiCommentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x3jKfe1LZsfM9ZMX6ICC/comments';

    const fetchComments = async (id) => {
      const request = new Request(`${apiCommentURL}?item_id=${id}`);
      const response = await fetch(request);
      if (!response.ok) {
        throw new Error('No comments added for this movie');
      }
      const getComment = await response.json();
      createComment(getComment);
    };

    class Comment {
      constructor(item_id, username, comment) {
        this.item_id = item_id;
        this.username = username;
        this.comment = comment;
      }
    }

    const postComment = async (comment) => {
      const posts = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x3jKfe1LZsfM9ZMX6ICC/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      });
      const result = await posts.json();
      return result;
    };
  });
};
});

};
  });
};
export default comments;