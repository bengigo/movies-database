// import displayComments from "./getComments.js";
// import fetchComments from './comments.js'

const comments = () => {
  const getShowData = async (id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const showData = await response.json();
    return showData;
  };

  const displayContainer = document.querySelector("#list");
  displayContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-comments")) {
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
        <h3 class="comments-counter">Comments(0)</h3>
        <ul class="comment-section">
        </ul>
        <form action="#" class="add-comments" id="comment-form">
        <h3>Add your comment</h3>
        <input type="text" id="name" name="username1" placeholder="Type your name here">
        <textarea id="comments" name="commentMsg1" cols="40" rows="5" placeholder="Write you comment here.."></textarea>
        <button type="submit" id=${showData} class="submit-comments">Comment</button>
        </form> -->
        `;    

      });
    };


    if (e.target.classList.contains("close")) {
      const dialog = document.querySelector('dialog');
      dialog.close();
    }

    const createComment = (comments) => {
      const commentCount = document.querySelector('.comments-counter');
      commentCount.innerHTML = `comments(${comments.length})`;
      const commentList = document.querySelector('.comment-section');
      commentList.innerHTML = '';
      comments.forEach((comment) => {
        commentList.innerHTML += `<li>${comment.creation_date}: ${comment.username}: ${comment.comment}</li>`;
      });
    };
    
    const apiCommentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6Rsc5dWsUkxFOihStX7m/comments';
    
    const fetchComments = async (id) => {
      const request = new Request(`${apiCommentURL}?item_id=${id}`);
      const response = await fetch(request);
      if (!response.ok) {
        throw new Error('No comments added for this movie');
      }
      const getComment = await response.json();
      createComment(getComment);
    };
    
    
     
    const displayComment = async (e) => {
      e.preventDefault();
      const movieID = e.target;
    
      const name = document.getElementById('name').value.trim();
      const addComment = document.getElementById('comments').value.trim();
      const commentForm = document.getElementById('comment-form');
    
      if (name && addComment) {
        const result = await fetch(apiCommentURL, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            item_id: `${movieID.id}`,
            username: `${name}`,
            comment: `${addComment}`,
          }),
        });
        commentForm.reset();
        await result.text();
        fetchComments(movieID.id);
      }
    };
    fetchComments(id);
    const submitComment = document.querySelector('.submit-comments');
    submitComment.addEventListener('click', displayComment);
    
    // const commentBtns = document.querySelectorAll('.btn-comments');
    // commentBtns.forEach((button) => {
    //   button.addEventListener('click', (e) => {
    //     comments(e.target.parentNode.id);
    //     displaySeries.style.filter = 'blur(12px)';
      // });
    // });
    
    // export default fetchComments();
  });

};


export default comments;