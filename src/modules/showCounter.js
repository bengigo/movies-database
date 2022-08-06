const countShows = () => {
  window.addEventListener("load", (e) => {
    let displayContainer = document.querySelector("#list");
    console.log(displayContainer.childElementCount);
    let showcount = displayContainer.childElementCount;
    let showNumDisplay = document.querySelector("#show-num");
    showNumDisplay.textContent = showcount;
  });
};

export default countShows;
