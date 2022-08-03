import displayShows from './displayList.js';
// import commentFunction from './popup.js';


// const getData = async () => {
//   const response = await fetch('https://api.tvmaze.com/shows');
//   const shows = await response.json();
//   const latestShows = shows.slice(0, 20);
//   displayShows(latestShows);
//   commentFunction();
// };

const getData = async () => {
  await fetch('https://api.tvmaze.com/shows',)
  .then((response) => response.json())
  .then((response) => displayShows(response.slice(0,20)));
}

export default getData;
