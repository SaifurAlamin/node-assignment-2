import express from 'express'
import { productsController } from './product.controller';


const route = express.Router()

route.post('/',productsController.createProducts)
route.get('/',productsController.getProducts)
route.get('/:productId',productsController.getSingleProduct)
route.put('/:productId',productsController.updateProductById)
route.delete('/:productId',productsController.deleteProductByID)



export const productRoute = route;