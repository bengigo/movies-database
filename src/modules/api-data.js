// fetch data from the api

const getData = async () => {
  await fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json());
  // .then((json) => displayShow(json).slice(0, 20));
};
export default getData;
