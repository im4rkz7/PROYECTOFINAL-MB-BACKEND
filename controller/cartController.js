import { WSresponse } from "../libs/WSresponse.js";
import { cartService } from "../service/cartService.js";
import { productService } from "../service/productService.js";
import { Cart } from "../models/cartModels.js";

const createCart = async (req, res) => {
  try {
    
    const response = await cartService.createCart(req);

    return response
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

  const getCart = async (req, res) => {
      try {

      const {email} = req.user
      const userId = email

      const response = await cartService.getCart(userId);
      console.log("revision nueva resuelto", response) 

      res.render("cart", {Cart:response},  );
    
    } catch (err) {
      console.log(err);
      res.status(400).json(new WSresponse(null, err, true, 400));
    }
  };

  const getCartId = async (req, res) => {
    try {
      const response = await cartService.getCartId(req.body);
  
      res.json(new WSresponse(response, "Succes"));
    } catch (err) {
      console.log(err);
      res.json(new WSresponse(null, err, true, 460));
    }
  };

  const getOneProductCart = async (req, res) => {
    try {
      const response = await productService.getOneProduct(req.params.id);
  
      res.json(new WSresponse(response, "Succes"));
    } catch (err) {
      console.log(err);
      res.json(new WSresponse(null, err, true, 460));
    }
  };

  const deleteProductCart = async (req, res) => {
    try {
      await productService.deleteProduct(req.params.id);
  
      res.json(new WSresponse(null, "Product deleted"));
    } catch (err) {
      console.log(err);
      res.json(new WSresponse(null, err, true, 320));
    }
  };



const UpdateCartProductByFilters = async (req, res) => {
  try {
    const response = await cartService.UpdateCartProductByFilters(
      req.body,
      req.params.id
    );

    res.json(new WSresponse(response, "Product updated"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 489));
  }
};

const getCartUserId = async (req, res) => {

  try {
    
    const response = await cartService.getCartUserId(req.email);

          res.render("cart", {Cart:response} );
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 460));
  }
};

export const cartController = {
  createCart,
  getCartId,
  getCart,
  getOneProductCart,
  deleteProductCart,
  UpdateCartProductByFilters,
  getCartUserId
}
