import commentFunction from "./popup";

export const displayShows = (shows) => {
  const displayContainer = document.querySelector('#list');
  shows.forEach((show) => {
    displayContainer.innerHTML += `
        <div class="show">
          <img class="poster" src="${show.image.medium}" alt="${show.name} poster">
          <h2 class="name">${show.name}</h2>
          <p class="genre">${show.genres}</p>
          <button id="${show.id}-comments" class="btn-comments">Comments</button>
          <button id="${show.id}-reservations" class="btn-reservations">Reservations</button>
          </div>
        `;
  });
};


export default displayShows;