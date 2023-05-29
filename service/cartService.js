import {cartDao} from "../dao/cartDao.js"
import {Cart} from "../models/cartModels.js"

const getCart = async({userId}) =>{
  console.log("estoy en el dao1", userId)
    const data = await cartDao.getCart({userId})
console.log("estoy en el dao2", data)
    return data
}

const getCartUserId = async({userId}) =>{
    const data = await cartDao.getCartUserId({userId:userId})

    return data
}

const updateCartId = async({userId, productId}) =>{
    const data = await cartDao.updateCartId({username:userId, product:productId})

    return data
}

const createCart = async(req) =>{
    const data = await cartDao.createCart(req)

    return data
}

const getCartByFilters = async (filters) => {
    const data = await Cart.find(filters).lean();
  
    return data
  };

  const deleteCart = async (productId) => {
    if (typeof productId !== "string") throw "Product ID must be string";
  
    await productDao.deleteProduct(productId);
  };


  const updateCart = async (userId, product) => {
  
    const updatedCart = await cartDao.updateCart(
        userId, product
    );
  
    return updatedCart;
  };



  const UpdateCartProductByFilters = async (filters) => {
    const userId = filters.userId
    const products = filters.product
    const product = await Cart.UpdateOne({ userId},{ $set: { products }});
  
    return product;
  };
  



export const cartService = {
    getCartUserId,
    updateCartId,
    getCart,
    createCart,
    getCartByFilters,
    deleteCart,
    updateCart,
    UpdateCartProductByFilters
}

  