import { ProductModel } from "../product/product.model";
import { Order } from "./order.interface";
import { orderModel } from "./order.model";




const createOrderIntoDb = async (order: Order) => {
    const {productId,quantity} = order;
    console.log(productId)
    const findProduct :any = await ProductModel.findOne({_id:productId})
    const updatedProduct = quantity- findProduct?.inventory.quantity 
    console.log(updatedProduct)
    const result = await orderModel.create(order)
    return result;

}


export const orderServices = {
    createOrderIntoDb
}