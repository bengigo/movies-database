const numOfReservation = (response) => {
  if (typeof response === 'object') {
    return response.length;
  } else {
    return 'no match';
  }
};

module.exports = numOfReservation;
