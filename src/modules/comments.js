const countComment = () => {
  const commentsCounterSpan = document.querySelector('.comments-counter');

  const commentCounter = document.querySelector('.comment-section');
  const allChildren = commentCounter.getElementsByTagName('li').length;

  commentsCounterSpan.innerHTML = allChildren;
};

export const displayComments = (comments) => {
  const displayCommentContainer = document.querySelector('.comment-section');
  if (Array.isArray(comments)) {
  comments.forEach((comment) => {
    displayCommentContainer.innerHTML += `
    <li><p class="comment-username">${comment.creation_date} ${comment.username}: ${comment.comment}</p></li>
    <hr>
    `;
  });
  countComment();
};
};


export const getComment = (idTarget) => {
  const urlRoot = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tr6fRffFTZh6EiaoJoDj/comments?item_id=item';

  fetch(`${urlRoot}${idTarget}`)
    .then((response) => response.json())
    .then((json) => displayComments(json))
    .then(() => countComment());
};

export default getComment();