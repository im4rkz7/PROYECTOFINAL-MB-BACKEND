import { Router } from "express";
import {indexController} from "../controller/indexController.js";
import jwt from "../utils/jwt.js"

const cartRoute = Router();

cartRoute
  .route("/")
  .post(indexController.cartController.createCart);
  cartRoute.get("/:idusuario", indexController.cartController.getCart);
  cartRoute.get("/:idusuario/:idproduct", indexController.cartController.getOneProductCart);
  cartRoute.delete("/:idusuario/:idproduct", indexController.cartController.deleteProductCart);
  


export default cartRoute;
