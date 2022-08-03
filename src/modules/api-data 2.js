const getData = async () => {
  await fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json());
};
export default getData;
