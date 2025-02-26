import express from "express";

import * as orderController from "../controllers/orderController.js";

const router = express.Router();

router.get('/orders', orderController.getOrders);
router.post('/orders', orderController.createOrder);
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.deleteOrder);
router.get('/orders/search', orderController.searchOrders);

export default router;