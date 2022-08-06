/* eslint operator-linebreak: ["error", "after", { "overrides": { "+=": "before" } }] */
const endpointLink =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j2re1UnEtKqKdvrLaCym/reservations/';

const fetchReservations = async (movieId) => fetch(`${endpointLink}?item_id=${movieId}`)
  .then((res) => res.json())
  .then((data) => (data.error ?
    {
      error: true,
      debug: data,
      msg: data.error.message,
    } :
    {
      error: false,
      data,
    }))
  .catch(() => ({
    error: true,
    msg: 'Something went wrong, please try again later',
  }));

export default fetchReservations;
