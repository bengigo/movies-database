const numOfReservation = require('./numOfReservation.js');

describe('counter testing', () => {
  test('counting the number of reservation booked counter', () => {
    // Arrange
    const collectionOfData = [
      {
        item_id: 1,
        username: 'michael',
        date_start: '2012-05-6',
        date_end: '2012-07-6',
      },
      {
        item_id: 2,
        username: 'bengi',
        date_start: '2011-05-6',
        date_end: '2012-08-6',
      },
      {
        item_id: 3,
        username: 'Reggie',
        date_start: '2015-05-10',
        date_end: '2016-08-6',
      },
    ];

    const res = numOfReservation(collectionOfData);

    expect(res).toBe(3);
  });

  test('test if the numbers of reservations are 0', () => {
    // Arrange
    const collectionOfData = 0 || 'no match';
    // Act
    const res = numOfReservation(collectionOfData);

    // Assert
    expect(res).toBe(0 || 'no match');
  });
});
