// import displayShows from './displayList.js';

import displayShows from "./displayList";

// const getData = async () => {
//   const response = await fetch('https://api.tvmaze.com/shows');
//   const shows = await response.json();
//   const latestShows = shows.slice(0, 20);

//   displayShows(latestShows);
// };



const getData = async () => {
  await fetch('https://api.tvmaze.com/shows',)
  .then((response) => response.json())
  // .then(response => console.log(response))
  // .then(response => console.log(typeof(response)))
  .then((response) => displayShows(response.slice(0, 20)));
}

export default getData;
