import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true,
        minlenght: 2
    },

    customerPhone: {
        type: String,
        required: true
    },

    items: [
        {
            menuItemId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "MenuId"
            },
            name: {
                type: String
            },
            quantity: {
                type: Number,
                min: 1
            },
            price: {
                type: Number
            }
        }
    ],

    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'preparing', 'ready', 'completed', 'cancelled']
    }
    },
    {
        timestamps: true
    }
);

const order = mongoose.model('Order', orderSchema);
export default order;