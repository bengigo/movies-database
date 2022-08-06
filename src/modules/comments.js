
// const createComment = (comments) => {
//   const commentCount = document.querySelector('.comments-counter');
//   commentCount.innerHTML = `(${comments.length})`;
//   const commentList = document.querySelector('.comment-section');
//   commentList.innerHTML = '';
//   comments.forEach((comment) => {
//     commentList.innerHTML += `<li>${comment.creation_date}: ${comment.username}: ${comment.comment}</li>`;
//   });
// };

// const apiCommentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6Rsc5dWsUkxFOihStX7m/comments';

// const fetchComments = async (id) => {
//   const request = new Request(`${apiCommentURL}?item_id=${id}`);
//   const response = await fetch(request);
//   if (!response.ok) {
//     throw new Error('No comments added for this movie');
//   }
//   const getComment = await response.json();
//   createComment(getComment);
// };


 
// const displayComment = async (e) => {
//   e.preventDefault();
//   const movieID = e.target;

//   const name = document.getElementById('name').value.trim();
//   const addComment = document.getElementById('comments').value.trim();
//   const commentForm = document.getElementById('comment-form');

//   if (name && addComment) {
//     const result = await fetch(apiCommentURL, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify({
//         item_id: `${movieID.id}`,
//         username: `${name}`,
//         comment: `${addComment}`,
//       }),
//     });
//     commentForm.reset();
//     await result.text();
//     fetchComments(movieID.id);
//   }
// };
// // fetchComments(id);
// const submitComment = document.querySelector('.submit-comments');
// submitComment.addEventListener('click', displayComment);

// const commentBtns = document.querySelectorAll('.btn-comments');
// commentBtns.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     comments(e.target.parentNode.id);
//     displaySeries.style.filter = 'blur(12px)';
//   });
// });

// export default fetchComments();
=======
export const countComment = () => {
  const commentsCounterSpan = document.querySelector('.comments-counter');

  const commentCounter = document.querySelector('.comment-section');
  const allChildren = commentCounter.getElementsByTagName('li').length;

  commentsCounterSpan.innerHTML = allChildren;
};

export const displayComment = (comments) => {
  const displayCommentContainer = document.querySelector('.comment-section');
  comments.forEach((comment) => {
    displayCommentContainer.innerHTML += `
    <li><p class="comment-username">${comment.creation_date} ${comment.username}: ${comment.comment}</p></li>
    <hr>
    `;
  });
  countComment();
};

export const getComment = (idTarget) => {
  const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x3jKfe1LZsfM9ZMX6ICC/comments?item_id=item1';

  fetch(`${involvementURL}${idTarget}`)
    .then((response) => response.json())
    .then((json) => displayComment(json))
    .then(() => countComment());
};

export default getComment;

