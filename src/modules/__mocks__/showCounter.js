const countShows = () => {
  const displayContainer = document.querySelector("#list");
  let showcount = displayContainer.childElementCount;

  return showcount;
};

export default countShows;
