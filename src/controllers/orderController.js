import * as orderService from "../services/orderServices.js"

export const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders();
        res.status(200).json(orders);
    } catch (err) {
        console.error('Error fetching orders:', err);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

export const createOrder = async (req, res) => {
    try {
        const orderData = req.body;
        const newOrder = await orderService.createOrder(orderData);
        res.status(200).json(newOrder);
    } catch (err) {
        console.error('Error creating order:', err);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

export const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const orderData = req.body;
        const updatedOrder = await orderService.updateOrder(orderId, orderData);
        
        if(!updatedOrder) {
            return res.status(404).json({ message: "Order not found"})
        }
        res.status(200).json(updatedOrder);

    } catch (err) {
        console.error('Error updating order:', err);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const orderData = req.body;
        const deleted = await orderService.deleteOrder(orderId);
        if(!deleted) {
            return res.status(404).json({ message: 'Order not found'})
        }
     
        res.status(200).send();

    } catch (err) {
        console.error('Error deleting orders:', err);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

export const searchOrders = async (req, res) => {
    try {
        const searchTerm = req.query.q;
        const orders = await orderService.searchOrders(searchTerm);
        res.status(200).json(orders);
    } catch (err) {
        console.error('Error searching clients:', err);
        res.status(500).json({ message: 'Internal Server Error'});
    }
}