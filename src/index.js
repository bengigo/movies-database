import './style.css';
import getData from './modules/api-data.js';
import comments from './modules/commentPopup.js';
import { getLikes } from './modules/likesData.js';

getData();

comments();

getLikes();
