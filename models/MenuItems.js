import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 3
    },

    price: {
        type: Number,
        required: true,
        min: 1
    },

    category: {
        type: String,
        required: true
    },

    ingredients: [String],

    available: {
        type: Boolean,
        required: true
    }},

    {
        timestamps: true
    }
)

const menuItems = mongoose.model('Menu', menuSchema);
export default menuItems;