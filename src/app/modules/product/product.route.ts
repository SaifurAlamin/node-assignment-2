import express from 'express'
import { productsController } from './product.controller';


const route = express.Router()

route.post('/create-product',productsController.createProducts)



export const productRoute = route;