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
const updateProductByID = async (id:string,body:object)=>{
    const result = await ProductModel.updateOne({ _id:(id)},body)
    console.log('result',result)
    return result;
}
const deleteProductByID = async (id:string)=>{
    const result = await ProductModel.deleteOne({ _id:(id)})
    console.log('result',result)
    return result;
}

export const productServices={
    createProductIntoDb,
    getProductsFromDb,
    getSingleProductFromDb,
    updateProductByID,
    deleteProductByID
}