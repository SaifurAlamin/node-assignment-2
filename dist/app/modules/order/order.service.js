"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrderIntoDb = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = order;
    console.log(productId);
    const findProduct = yield product_model_1.ProductModel.findOne({ _id: productId });
    if ((findProduct === null || findProduct === void 0 ? void 0 : findProduct.inventory.quantity) <= quantity) {
        throw "Insuffocient Quantity";
    }
    const remainingQuantity = (findProduct === null || findProduct === void 0 ? void 0 : findProduct.inventory.quantity) - quantity;
    const sendData = {
        inventory: {
            quantity: remainingQuantity,
        },
    };
    yield product_model_1.ProductModel.updateOne({ _id: productId }, sendData);
    const result = yield order_model_1.orderModel.create(order);
    return result;
});
exports.orderServices = {
    createOrderIntoDb,
};
