const numOfReservation = (response) => {
  if (typeof response === 'object') {
    return response.length;
  }
  return 'no match';
};

module.exports = numOfReservation;
