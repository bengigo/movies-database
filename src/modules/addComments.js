import INVOLVEMENT_URL from './involvementAPI.js';
import displayComments from './displayComments.js';

const formEl = document.querySelector('.add-comments');
const { username1, message } = formEl.elements;
const addComment = () => {
  formEl.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = username1.value;
    const comment = message.value;

    if (!username || !comment) return;

    await fetch(`${INVOLVEMENT_URL}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: formEl.dataset.item,
        username,
        comment,
      }),
    });

    username1.value = '';
    message.value = '';

    displayComments(formEl.dataset.item);
  });
};

export default addComment;