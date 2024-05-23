import { Product } from "./product.interface";
import { ProductModel } from "./product.model";



const createProductIntoDb = async (product : Product)=>{
    const result = await ProductModel.create(product)
    return result;
}
const getProductsFromDb = async ()=>{
    const result = await ProductModel.find()
    return result;
}
const getSingleProductFromDb = async (id:string)=>{
    const result = await ProductModel.findOne({ _id:(id) })
    return result;
}

export const productServices={
    createProductIntoDb,
    getProductsFromDb,
    getSingleProductFromDb
}