import { Router } from "express";
import rootRoute from "./rootRoute.js";
import accessRoute from "./accessRoute.js"
import chatRoute from "./chatRoute.js"
//import orderRoute from "./orderRoute.js"
import productRoute from "./productRoute.js";
import registerRoute from "./registerRoute.js"
import userRoute from "./userRoute.js"
import cartRoute from "./cartRoute.js";
import checkAuthentication from "../Strategy/CheckAuth.js";

const router = Router()

router.use("/",rootRoute);
router.use("/user",userRoute);
router.use("/product", checkAuthentication, productRoute )
router.use("/cart", checkAuthentication, cartRoute);
//router.use("/order", checkAuthentication, orderRoute);
router.use("/login", accessRoute);
router.use("/register",registerRoute);
router.use("/chat", checkAuthentication, chatRoute);


export default router;

