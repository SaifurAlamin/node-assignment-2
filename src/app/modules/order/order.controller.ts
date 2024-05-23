import { Request, Response } from "express";
import { orderServices } from "./order.service";



const createOrders = async (req: Request, res: Response) => {
    try {
        const { order: orderData } = req.body;
     
        const result = await orderServices.createOrderIntoDb(orderData);

        res.status(200).json({
            success: true,
            message: "Order created successfully",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: err,
        });
    }
};
export const orderController = {
    createOrders
}