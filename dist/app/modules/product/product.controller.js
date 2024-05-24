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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
const product_service_1 = require("./product.service");
const products_validation_1 = __importDefault(require("./products.validation"));
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { product: productData } = req.body;
        //Zod validation
        const zodParseData = products_validation_1.default.parse(productData);
        // service ke call dibe
        const result = yield product_service_1.productServices.createProductIntoDb(zodParseData);
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: err,
        });
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productServices.getProductsFromDb();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: err,
        });
    }
});
//getallProducts
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        console.log(productId);
        const result = yield product_service_1.productServices.getSingleProductFromDb(productId);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: err,
        });
    }
});
////Update product by id
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const body = req.body;
        const result = yield product_service_1.productServices.updateProductByID(productId, body);
        res.status(200).json({
            success: true,
            message: "Product Update successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: err,
        });
    }
});
//delete product by id
const deleteProductByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        console.log(productId);
        const result = yield product_service_1.productServices.deleteProductByID(productId);
        res.status(200).json({
            success: true,
            message: "Products deleted  successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: err,
        });
    }
});
exports.productsController = {
    createProducts,
    getProducts,
    getSingleProduct,
    updateProductById,
    deleteProductByID
};
