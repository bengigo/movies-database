/* eslint-disable import/prefer-default-export */
// import { getAllMovies } from './getComments';
import { newGetAllMovies } from './getComments';

// const shows = await getAllMovies();

const requestedResponse = async (id) => {
  const newShows = await newGetAllMovies(id);
  return newShows;
};

export const Display = async (id) => {
  const data = await requestedResponse(id);
  console.log(typeof data)
  const htmlString=`
  <a id="close-button" class="comment-popup-close-button close-button" href="#">X</a>
  <div class="poster-container">
  <img id="media-poster" src="${data.image["medium"]}">
  </div>
  <div class="movie-description">
  <h3>${data.name} </strong> ⭐${data.rating.average}</h3>
  </div>

  <p class="decriptionP"> ${data.genres}</p>
  <p class="decriptionP">${data.language}</p>
  <p class="decriptionP">${data.summary}</p>
  <br>`
    
    
    return htmlString;
    
};





