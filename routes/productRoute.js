import { Router } from "express";
import upload from '../MulterFiles/MulterConfig.js';
import {indexController} from "../controller/indexController.js";
import roleChecker from "../libs/roleChecker.js";

const productRoute  = Router();
const idRouter = Router({mergeParams: true});
const categoryRouter = Router({mergeParams: true});

productRoute.use('/categoria/:categoria', categoryRouter);
productRoute.use('/:id', idRouter);

productRoute
  .route("/")
  .get(indexController.productController.getAllProducts)
  .post(upload.subirImgProduct().single('thumbnail'), indexController.productController.createProduct);
 
  productRoute
  .route("/:id")
  .get(indexController.productController.getProductById)
  .put(indexController.productController.updateProduct)
  .delete(indexController.productController.deleteProduct);

  idRouter.route("/").get( indexController.productController.getProductByFilters);
  categoryRouter.route("/").get(indexController.productController.getProductByFilters);



export default productRoute;
