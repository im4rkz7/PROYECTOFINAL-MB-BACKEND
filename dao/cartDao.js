import {Cart} from '../models/cartModels.js'

const createCart = async (req) => {
  const data = await Cart.create(req);
  return data;
};


const getCart = async({userId, productId}) =>{
    const data = await Cart.find({ userId: userId}, {products: 1, _id: 0 })  
    return data
}

const getCartUserId = async (req) => {
  const userId = req.userId
  const ProductExist = await Cart.find({ userId: userId})

  return ProductExist
}


const UpdateCartProductByFilters = async (req) => {
  let auxiliar
  const userId = auxiliar
  const product = req.product
  const updateProductsCart = await Cart.updateOne({ userId},{ $set: { product : product }})

  return updateProductsCart

}

const updateCartId = async (req) => {
  const userId = req.userId
  const product = req.product
  const updateProductCart = await Cart.updateOne({ userId: userId},{ $set: { product : product }})

  //console.log("dao carrito",arrayProductos)
  return updateProductCart

}



export const cartDao = {
    getCartUserId,
    getCart,
    createCart,
    UpdateCartProductByFilters,
    updateCartId
  }

