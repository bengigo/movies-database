const showLikes = (dataObject) => {
  dataObject.forEach((data) => {
    const numDisplays = document.querySelectorAll('.num-display');
    numDisplays.forEach((display) => {
      if (display.id === data.item_id) {
        display.textContent = data.likes;
      }
    });
  });
};

export default showLikes;
