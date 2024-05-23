import express from 'express'
import { orderController } from './order.controller';



const route = express.Router()

route.post('/create', orderController.createOrders)





export const orderRoute = route;