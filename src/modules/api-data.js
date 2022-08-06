import displayShows from './displayList';
import displayReserve from './reservationPopUp.js';

const getData = async () => {
  await fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((response) => displayShows(response.slice(0, 20)));

  displayReserve();
};

export default getData;
