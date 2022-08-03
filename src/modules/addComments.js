import displayComments from './displayComments.js';

const commentsAdded = (idItems) => {
    const INVOLVEMENT_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QhgWz32GeSKsu1QMY3gI/comments';

    const formElements = (commentor, comments, callback) => {
        fetch(`${INVOLVEMENT_URL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            item_id: `item${idItems}`,
            username: `${commentor}`,
            comment: `${comments}`,

        }),

        });
    
    const dateFormatYmd = (date) => date.toISOString().slice(0,10);
    const d = dateFormatYmd(new Date());
    callback([
        { creationDate: `${d}`, username: `${commentor}`, comment: `${comments}` },
        
    ]);
    }
    const formContent = document.querySelector('.add-comments');
    formContent.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentorSelector = document.querySelector('#name');
        const commentsSelector = document.querySelector('#comments');
        const commentor = commentorSelector.value;
        const comments = commentsSelector.value;
        formElements(commentor, comments, displayComments)
    });
};

export default commentsAdded;

