import express from 'express'
import { orderController } from './order.controller';



const route = express.Router()

route.post('/', orderController.createOrders)
route.get('/', orderController.getOrders)





export const orderRoute = route;