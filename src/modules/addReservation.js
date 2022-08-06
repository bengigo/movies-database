const endPoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j2re1UnEtKqKdvrLaCym/reservations/';

const addReservation = async (itemId, username, dateStart, dateEnd) => {
  if (username.value !== '' || dateStart.value !== '' || dateEnd.value !== '') {
    try {
      const response = await fetch(`${endPoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
          username: username.value,
          date_start: dateStart.value,
          date_end: dateEnd.value,
        }),
      });
      const Data = await response.json();
      return Data;
    } catch (err) {
      return false;
    }
  }
  return false;
};

export default addReservation;
