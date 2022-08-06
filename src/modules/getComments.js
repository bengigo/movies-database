// import displayComments from './comments.js';

// const formEl = document.querySelector('.comment collection');
// const { username1, commentMsg1 } = formEl.elements;
// const addComment = () => {
//   formEl.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const username = username1.value;
//     const comment = commentMsg1.value;

//     const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x3jKfe1LZsfM9ZMX6ICC';

//     if (!username || !comment) return;

//     await fetch(`${involvementURL}/comments`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         item_id: formEl.idTarget,
//         username: username1,
//         comment: commentMsg1,
//       }),
//     });

//     username1.value = '';
//     commentMsg1.value = '';

//     displayComments(formEl.idTarget);
//   });
// };

// export default addComment;