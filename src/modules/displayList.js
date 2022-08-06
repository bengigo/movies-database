const displayShows = (shows) => {
  const displayContainer = document.querySelector('#list');
  shows.forEach((show) => {
    displayContainer.innerHTML += `
        <div class="show" id="${show.id}">
          <img class="poster" src="${show.image.medium}" alt="${show.name} poster">
          <div class="title-row">
            <h2 class="name">${show.name}</h2>
            <div class="likes">
            <span id="${show.id}" class="heart material-symbols-outlined">favorite</span>            <p class="num-display" id=${show.id}>0</p>
            </div>
          </div>
          <p class="genre">${show.genres}</p>
          <button id="${show.id}" class="btn-comments">Comments</button>
          <button id="${show.id}" class="btn-reservations" movie-image="${show.image.medium}" 
          title="${show.name}" 
          language="${show.language}"
          premier="${show.premiered}"
          ended="${show.ended}"
          rating="${show.rating.average}"> Book Reservations</button>

          
          <dialog></dialog>
          </div>

        `;
  });
};

export default displayShows;
