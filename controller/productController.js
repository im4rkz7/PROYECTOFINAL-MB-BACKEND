import logger from "../components/winstonconfig.js"
import { userInfo } from "os";
import { WSresponse } from "../libs/WSresponse.js";
import {productService} from "../service/productService.js";

const getAllProducts = async(req, res)=>{
  const {url , method} = req

  
  try {
  
    const auxiliar = req.user.email 
   
    const response = await productService.getAllProducts();
    const auxProducts = response[0].Product

   
    res.render("indexProducts", {Product:response[0].Product, category: response[0].Category, auxiliar, auxProducts});
  
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json(new WSresponse(null, "Internal server error", true, 500));
  }
};



const createProduct = async (req, res) => {
  try {
    const response = await productService.createProduct(req.body);
    res.render("indexproducts", {Product:response} );
    

  } catch (err) {
    console.log(err);
    res.status(400).json(new WSresponse(null, err, true, 400));
  }
};

const updateProduct = async (req, res) => {
  try {
    const response = await productService.updateProduct(
      req.body,
      req.params.id
    );

    res.json(new WSresponse(response, "Product updated"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 489));
  }
};

const deleteProduct = async (req, res) => {
  try {

    await productService.deleteProduct(req.params.id);

   

  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 320));
  }
};

const getProductById = async (req, res) => {
  try {
    const response = await productService.getProductById(req.params.id);

    res.json(new WSresponse(response, "Succes"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 460));
  }
};

const getProductByCategory = async (req, res) => {
  try {
    const response = await productService.getProductByCategory();
    
    res.render("indexProductsCategory", {Product:response} );
    
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json(new WSresponse(null, "Internal server error", true, 500));
  }
};

const getOneProduct = async (req, res) => {
  try {
    const response = await productService.getOneProduct(req.params.id);

    res.json(new WSresponse(response, "Succes"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, err, true, 460));
  }
};


const getProductByFilters = async (req, res) => {
  try {
    const {id,category} = req.params
    let filters
    if (typeof id !== 'undefined') {
      filters = { _id: id };
    }
    else
    {
      filters = { category: category };
      console.log("data filters:", filters)
    }   
    const response = await productService.getProductByFilters(filters);
    console.log("data response controller:", response);
    
    if (response.length == 0)
    {
      res.json({error: "Este producto no existe"})
    }
    else{
      if (typeof id !== 'undefined') {

        res.render("productDetails", {product:response[0].product[0]} );
      }
      else

      {
        console.log("llegue a la funcion filter")

        res.render("productsCategory", {product:response[0].product, category:response[0].category} );
      }
    }

  } catch (err) {
    if (err.statusCode) {
      return res.status(statusCode).send(err);
    }

    res.sendStatus(500);
  }
};


export const productController = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductByCategory,
    getProductById,
    getOneProduct,
    getProductByFilters
  };
