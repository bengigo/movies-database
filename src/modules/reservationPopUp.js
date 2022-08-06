import fetchReservations from './api-info.js';
import addReservation from './addReservation.js';

const displayReserve = () => {
  const showTheReservePopUp = ({ ...info }) => {
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
        <h3 class="reservation-title">
        reservation (<span class="numberOf-reservations-booked">0</span>)
      </h3>
      <span class="reservations">
          reservation data
      </span>
      
      <h2>Book Reservation</h2>
      <div class="Reserv-form">
      <input type="text" name="username" class="username" id="username" placeholder="Your name" required>
      <input type="text" name="dateStart" class="dateStart" id="date-started" placeholder="Start date" required>
      <input type="text" name="dateEnd" class="dateEnd" id="data-ended" placeholder="End date" required>
      <button class="add-reserve-btn" id="${info.id}" type="submit">Submit</button>
      </div>
        `;
    const hideReservationBtn = thePopUpInfo.querySelector(
      '.material-symbols-outlined',
    );
    thePopUpInfo.style.display = 'flex';

    hideReservationBtn.addEventListener('click', () => {
      document.querySelector('#show-the-reservation').style.display = 'none';
    });
    const data = () => {
      fetchReservations(info.id).then((res) => {
        const reservations = thePopUpInfo.querySelector('.reservations');
        const reservationsCounter = thePopUpInfo.querySelector(
          '.numberOf-reservations-booked',
        );
        if (res.error === true) {
          reservationsCounter.innerHTML = '0';
          reservations.innerHTML = 'Book a reservation, we are expecting you';
        } else {
          reservations.innerHTML = '';
          reservationsCounter.innerHTML = res.data.length;
          res.data.forEach((reservation) => {
            reservations.innerHTML += `
            <li><strong>From</strong> ${reservation.date_start} <strong>to</strong> ${reservation.date_end} <strong>by</strong> ${reservation.username}</li>
            `;
          });
        }
      });
    };
    const name = document.querySelector('#username');
    const start = document.querySelector('#date-started');
    const end = document.querySelector('#data-ended');
    const reserveBtn = document.querySelector('.add-reserve-btn');
    reserveBtn.addEventListener('click', (e) => {
      const id = e.target.attributes.id.value;
      addReservation(id, name, start, end).then(data());
      name.value = '';
      start.value = '';
      end.value = '';

      data();
    });
    fetchReservations(info.id).then((res) => {
      const reservations = thePopUpInfo.querySelector('.reservations');
      const reservationsCounter = thePopUpInfo.querySelector(
        '.numberOf-reservations-booked',
      );
      if (res.error === true) {
        reservationsCounter.innerHTML = '0';
        reservations.innerHTML = 'Book a reservation, we are expecting you';
      } else {
        reservations.innerHTML = '';
        reservationsCounter.innerHTML = res.data.length;
        res.data.forEach((reservation) => {
          reservations.innerHTML += `
          <li><strong>From</strong> ${reservation.date_start} <strong>to</strong> ${reservation.date_end}<strong> by</strong> ${reservation.username}</li>
          `;
        });
      }
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
