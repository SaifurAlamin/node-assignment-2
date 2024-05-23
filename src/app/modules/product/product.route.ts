import express from 'express'
import { productsController } from './product.controller';


const route = express.Router()

route.post('/create-product',productsController.createProducts)
route.get('/',productsController.getProducts)
route.get('/:productId',productsController.getSingleProduct)



export const productRoute = route;