import displayShows from './displayList.js';
// import commentFunction from './popup.js';



// const getData = async () => {
//   const response = await fetch('https://api.tvmaze.com/shows');
//   const shows = await response.json();
//   const latestShows = shows.slice(0, 20);
//   displayShows(latestShows);
//   commentFunction();
// };

//   displayShows(latestShows);
// };



const getData = async () => {
  await fetch('https://api.tvmaze.com/shows',)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response[0])
    displayShows(response.slice(0,20));
  });
}

export default getData;
