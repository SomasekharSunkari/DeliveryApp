import express from "express";
import authMiddleWare from "../middlewares/authMiddleWare.js";
import { placeOrder, verifyOrder } from "../controllers/OrderController.js";
const orderRouter  = new express.Router();
orderRouter.post("/placeOrder",authMiddleWare,placeOrder);
orderRouter.post("/verify",verifyOrder)
export default orderRouter;