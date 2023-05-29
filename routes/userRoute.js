import { Router } from "express";
import {indexController} from "../controller/indexController.js";

const userRoute = Router();

userRoute
    .route("/")
    .post(indexController.userController.createUser)

    userRoute
    .route("/:id")
    .get(indexController.userController.getOneUser)


    userRoute
    .route("/login") 
    .post(indexController.userController.login)
    

export default userRoute;

