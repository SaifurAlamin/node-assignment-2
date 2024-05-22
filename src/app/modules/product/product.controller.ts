import { Request, Response } from "express";
import { productServices } from "./product.service";
import productValidationSchema from "./products.validation";

const createProducts = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { product: productData } = req.body;
    //Zod validation
      const zodParseData = productValidationSchema.parse(productData)

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
export const productsController = {
  createProducts,
};
