import { Request, Response } from "express";
import { productServices } from "./product.service";
import productValidationSchema from "./products.validation";

const createProducts = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { product: productData } = req.body;
    //Zod validation
    const zodParseData = productValidationSchema.parse(productData);

    // service ke call dibe
    const result = await productServices.createProductIntoDb(zodParseData);

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};
const getProducts = async (req: Request, res: Response) => {
  try {
    
    const result = await productServices.getProductsFromDb();
    
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

//getallProducts
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params
    console.log(productId)
    const result = await productServices.getSingleProductFromDb(productId);

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

////Update product by id
const updateProductById = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params
  
    const body = req.body;
   
    const result = await productServices.updateProductByID(productId,body);

    res.status(200).json({
      success: true,
      message: "Product Update successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};

//delete product by id
const deleteProductByID = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params
    console.log(productId)
    const result = await productServices.deleteProductByID(productId);

    res.status(200).json({
      success: true,
      message: "Products deleted  successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: err,
    });
  }
};
export const productsController = {
  createProducts,
  getProducts,
  getSingleProduct,
  updateProductById,
  deleteProductByID
};
