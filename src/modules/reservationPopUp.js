// import fetchReservations from './api-info';
const displayReserve = () => {
  const showTheReservePopUp = (info) => {
    const thePopUpInfo = document.querySelector('#show-the-reservation');
    thePopUpInfo.innerHTML = `
      <span class="material-symbols-outlined">
      close
      </span>
        <section class="movieContent">
        <div id="poster-branding">
            <img src="${info.image}" />
            <h3 class="movie-title">${info.title}</h3>
        </div>
  
        <ol id="movie-metrics">
            <li>
                <strong>Language</strong>: ${info.language}
                <strong>Premier</strong>: ${info.premier}
            </li>
            <li>
            <strong>Rating</strong>: ${info.rating} 
            <strong>Ended</strong>: ${info.ended}
            </li>
        </ol>
        `;
    const hideReservationBtn = thePopUpInfo.querySelector(
      '.material-symbols-outlined',
    );
    thePopUpInfo.style.display = 'flex';

    hideReservationBtn.addEventListener('click', () => {
      document.querySelector('#show-the-reservation').style.display = 'none';
    });
  };
  const shows = document.querySelectorAll('.btn-reservations');
  shows.forEach((show) => {
    const id = show.getAttribute('id');
    const title = show.getAttribute('title');
    const image = show.getAttribute('movie-image');
    const rating = show.getAttribute('rating');
    const premier = show.getAttribute('premier');
    const ended = show.getAttribute('ended');
    const language = show.getAttribute('language');
    show.addEventListener('click', () => {
      showTheReservePopUp({
        id,
        title,
        image,
        premier,
        rating,
        ended,
        language,
      });
    });
  });
};

export default displayReserve;
