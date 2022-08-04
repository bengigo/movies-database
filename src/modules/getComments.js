const showsUrl = 'https://api.tvmaze.com/search/shows?q=girls';
const newShowsUrl = 'https://api.tvmaze.com/shows/';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QhgWz32GeSKsu1QMY3gI/likes/';
const commentsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QhgWz32GeSKsu1QMY3gI/comments/';

export const getAllMovies = async () => {
  const response = (await fetch(showsUrl)).json();
  return response;
};

export const newGetAllMovies = async (id) => {
  const response = (await fetch(newShowsUrl+id)).json();
  return response;
};

// export const getAllLikes = async () => {
//   const response = (await fetch(likesUrl)).json();
//   return response;
// };

export const addLikes = async (id) => {
  await fetch(likesUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const getAllComments = async () => {
  const response = (await fetch(commentsUrl)).json();
  return response;
};

export const addComment = async (comment) => {
  await fetch(commentsUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: comment.itemId,
      username: comment.username,
      comment: comment.commentMsg,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};