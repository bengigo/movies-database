import displayShows from './displayList.js';

const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const shows = await response.json();
  const latestShows = shows.slice(0, 20);

  displayShows(latestShows);
};

export default getData;
