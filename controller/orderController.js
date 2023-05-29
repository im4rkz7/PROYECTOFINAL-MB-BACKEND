import { WSresponse } from "../libs/WSresponse.js";
import { cartService } from "../service/cartService.js";

const createCart = async (req, res) => {
    try {
      const response = await cartService.createCart(req.body);
      res.render("indexProducts", {Product:response} );
    
    } catch (err) {
      console.log(err);
      res.status(400).json(new WSresponse(null, err, true, 400));
    }
  };

  export const orderController = {
    createCart
  }