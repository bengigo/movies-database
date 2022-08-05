import "./style.css";
import getData from "./modules/api-data.js";
import comments from "./modules/commentPopup";
import displayComments from './modules/comments.js'
import { getLikes } from './modules/likesData.js';

getData();

comments();

displayComments();
getLikes();
