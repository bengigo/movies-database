import './style.css';
import getData from './modules/api-data.js';
import comments from './modules/commentPopup.js';
import showLikes from './modules/displayLikes';
import { getLikes } from './modules/likesData';

getData();

comments();

// showLikes();
getLikes();