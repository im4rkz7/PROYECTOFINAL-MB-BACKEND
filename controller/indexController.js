import { accessController } from "./accessController.js";
import { cartController } from "./cartController.js";
import {messageController} from "./messageController.js"
import chatController from "./chatController.js";
import {orderController} from "./orderController.js";
import {productController} from "./productController.js";
import {userController} from "./userController.js";




export const indexController = { 
        accessController, 
        cartController, 
        chatController, 
        orderController,
        productController,
        userController,
        messageController,
        
};