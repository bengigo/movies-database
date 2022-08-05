import "./style.css";
import getData from "./modules/api-data.js";
import comments from "./modules/commentPopup";
import { getLikes, postLikes } from "./modules/likesData";

getData();

comments();
