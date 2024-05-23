import { ProductModel } from "../product/product.model";
import { Order } from "./order.interface";
import { orderModel } from "./order.model";

const createOrderIntoDb = async (order: Order) => {
  const { productId, quantity } = order;
  console.log(productId);
  const findProduct: any = await ProductModel.findOne({ _id: productId });
  if (findProduct?.inventory.quantity <= quantity) {
    throw "Insuffocient Quantity";
  }
  const remainingQuantity = findProduct?.inventory.quantity - quantity;
  const sendData = {
    inventory: {
      quantity: remainingQuantity,
    },
  };
  await ProductModel.updateOne({ _id: productId }, sendData);
  const result = await orderModel.create(order);
  return result;
};

export const orderServices = {
  createOrderIntoDb,
};
