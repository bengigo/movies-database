/*  eslint operator-linebreak: ["error", "after", { "overrides": { "+=": "before" } }]  */
/*  eslint comma-dangle: ["error", "never"]   */

const endpointLink =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j2re1UnEtKqKdvrLaCym/';
const fetchReservations = async (movieId) => {
  const response = await fetch(
    `${endpointLink}reservations?item_id=${movieId}`
  ).then((response) => response.json());
  if (!response.ok) throw Error('show reggie there is a problem');
};

export default fetchReservations;
