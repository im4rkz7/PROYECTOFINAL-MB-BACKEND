import { Router } from "express";
import {indexController} from "../controller/indexController.js";
import jwt from "../utils/jwt.js"

const orderRoute  = Router();

orderRoute
  .route("/")
  .post(indexController.orderController.createOrder);
 
  orderRoute
  .route("/:id")
  .get(orderController.orderData)


export default orderRoute;
