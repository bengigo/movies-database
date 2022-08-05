const displayShows = (shows) => {
  const displayContainer = document.querySelector("#list");
  shows.forEach((show) => {
    displayContainer.innerHTML += `
        <div class="show">
          <img class="poster" src="${show.image.medium}" alt="${show.name} poster">
          <div class="title-row">
            <h2 class="name">${show.name}</h2>
          </div>
          <p class="genre">${show.genres}</p>
          <button id="${show.id}" class="btn-comments">Comments</button>
          <button id="${show.id}" class="btn-reservations">Reservations</button>
          </div>
          <dialog></dialog>
        `;
  });
};

export default displayShows;