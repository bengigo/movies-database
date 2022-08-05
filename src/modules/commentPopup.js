import displayComments, { getComment } from "./comments.js";

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
        <ul class="comment-section">
        <h3 class="comments-counter">Comments(0)</h3>
        </ul>
        <form action="#" class="add-comments">
        <h3>Add your comment</h3>
        <input type="text" id="name" name="username1" placeholder="Type your name here">
        <textarea id="comments" name="commentMsg1" cols="40" rows="5" placeholder="Write you comment here.."></textarea>
        <button type="submit" class="submit-comments">Comment</button>
        </form> -->
        `;    

      });
    };


    if (e.target.classList.contains("close")) {
      const dialog = document.querySelector('dialog');
      dialog.close();
    }
    const targetId = e.target.id;

    displayComments(targetId);
    getComment(targetId);

  });

};


export default comments;