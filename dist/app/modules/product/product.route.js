"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const route = express_1.default.Router();
route.post('/', product_controller_1.productsController.createProducts);
route.get('/', product_controller_1.productsController.getProducts);
route.get('/:productId', product_controller_1.productsController.getSingleProduct);
route.put('/:productId', product_controller_1.productsController.updateProductById);
route.delete('/:productId', product_controller_1.productsController.deleteProductByID);
exports.productRoute = route;
