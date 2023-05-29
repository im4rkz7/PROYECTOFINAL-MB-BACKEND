import { Product } from "../models/productModels.js";


const getAllProducts = async (req, res) => {
  let ProductosDB = []
  let dataProduct = []
 
  const productos = await Product.find().lean();

  const Categorias = await Product.distinct("category");

  for (let i = 0; i < productos.length; i++)
  {
    ProductosDB.push({
      id: productos[i]._id.toString(),
      name: productos[i].name,
      price: productos[i].price,
      thumbnail: productos[i].thumbnail,
      category: productos[i].category,
      description: productos[i].description
      
    })
   
  }
  dataProduct=[{
    "Product": ProductosDB,
    "Category": Categorias
  }]
 
  
  return dataProduct

}

const createProduct = async (productToCreate) => {
  const createdProduct = await Product.create(productToCreate);
  return createdProduct;
};

const updateProduct = async (updateData, productId) => {
  const updatedProduct = await Product.updateOne(
    { _id: productId },
    updateData
  );

  console.log("actualizando producto",updatedProduct )
  return updatedProduct;
};

const deleteProduct = async (productId) => {
 const productDelete = await Product.deleteOne({ _id: productId });


};


const getProductById = async (productId) => {
  const product = await Product.findById({_id: productId});

  return product;
};


const getProductByCategory = async (category) => {
  const Products = await Product.find({category});
  return Products;
};

const getProductByFilters = async (filters) => {
  let ProductosDB = []
  let dataProduct = []
 
  const productos = await Product.find(filters).lean();
  const Categorias = await Product.distinct("category");
 
  for (let i = 0; i < productos.length; i++)
  {
    ProductosDB.push({
      id: productos[i]._id.toString(),
      name: productos[i].name,
      price: productos[i].price,
      thumbnail: productos[i].thumbnail,
      category: productos[i].category,
      description: productos[i].description
    })
  }
  dataProduct=[{
    "Product": ProductosDB,
    "Category": Categorias
  }]
  console.log("data dao filters:",dataProduct)
  
  return dataProduct
  //res.render("productosList", {ProductosDB:productosArray} );
}

export const productDao = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProductByCategory,
    getProductByFilters,

  };