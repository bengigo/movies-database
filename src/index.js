import "./style.css";
import getData from "./modules/api-data.js";
import comments from "./modules/commentPopup";
import displayComments from './modules/comments.js'

getData();

comments();

displayComments();
