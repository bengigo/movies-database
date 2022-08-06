import "./style.css";
import getData from "./modules/api-data.js";
import comments  from './modules/commentPopup.js';

import displayComments from './modules/comments.js'

getData();

comments();

displayComments();


// import comments  from './modules/commentPopup.js';

// document.addEventListener('DOMContentLoaded', comments);