import { Router } from "express";
import {indexController} from "../controller/indexController.js";
import checkAuthentication from '../Strategy/CheckAuth.js'

const chatRoute = Router();

chatRoute.route("/")
.get(checkAuthentication,indexController.chatController.getChat);

export default chatRoute;