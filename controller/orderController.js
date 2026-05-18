import order from "../models/Order.js";
import menuItems from "../models/MenuItems.js";

export const createOrder = async (req, res) => {
    try{
        const { customerName, customerPhone, items } = req.body;
        let orderItems = [];
        let totalAmount = 0;

        for(const item of items) {
            const menuItem = await menuItems.findById(item.menuId);

            if (!menuItem){
                 return res.status(404).json({
                    message: `Menu item ${item.menuId} not found`,
                 })
            }

            const orderitem = {
                menuItemId: item.menuItemId,
                name: menuItem.name,
                quantity: item.quantity,
                price: menuItem.price,
            }
            orderItems.push(orderitem);
            totalAmount += menuItem.price * item.quantity;
        }

        const newOrder = await order.create({
            customerName,
            customerPhone,
            items: orderItems,
            totalAmount,
            status: "pending",
            });
        res.status(200).json(newOrder)
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const filter = async (req, res) => {
    try{
    const {status, customerName} = req.query;
    const filter = {};
    if (status) {
        filter.status = status;
    }
    if(customerName) {
        filter.customerName = {$regex: customerName, $options: "i"};
    }
    const orders = await order.find(filter);
    res.status(200).json(orders);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getAllOrder = async (req, res) => {
    try{
        const orders = await order.find({});
        res.status(200).json({
        message: "Orders retrieved successfully",
        count: orders.length,
        data: orders,
    });
    }
    catch(error) {
        res.status(404).json({message: error.message});
    }
}   

export const getOrderById = async (req, res) => {
    try{
        const {id} = req.params;
        const orders = await order.findById(id);
        res.status(200).json(orders);
    }
    catch(error) {
        res.status(404).json({message: error.message});
    }
}  

export const updateOrder = async (req, res) => {
    try {
        const {id} = req.params;
        const orders = await order.findByIdAndUpdate(id, req.body)
        if (!orders) {
            return res.status(404).json({message: 'order not found'})
        }
        const updatedOrder = await order.findById(id)
        res.status(200).json(updatedOrder)
    } catch (error) {
        res.status(404).json({message: error.message});
    }    
}

export const deleteOrder = async (req, res) => {
    try {
        const {id} = req.params;
        const orders = await order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({message: 'order not found'});
        }
        res.status(200).json({message: 'Your order have been successfully deleted'});
    } catch (error) {
        res.status(404).json({message: error.message});
    }    
}