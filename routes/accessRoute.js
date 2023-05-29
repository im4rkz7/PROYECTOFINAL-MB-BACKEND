import { Router } from "express";
import {indexController} from "../controller/indexController.js";
import passport from 'passport';

const accessRoute  = Router();

accessRoute
.route("/")
.post(passport.authenticate("login", { failureRedirect: '/register', failureMessage:{message:"error al loguear"} }),indexController.accessController.postLogin)
.get(indexController.accessController.getLogin)

export default accessRoute;





