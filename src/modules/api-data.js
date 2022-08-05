import displayShows from './displayList';

const getData = async () => {
  await fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((response) => displayShows(response.slice(0, 20)));
};

export default getData;