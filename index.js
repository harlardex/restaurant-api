import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import menuRoute from './routes/menuRoutes.js';
import orderRoute from './routes/orderRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/menu', menuRoute)
app.use('/api/order', orderRoute)

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGODB_URL;


app.get('/', (req, res) => {
    res.send('Welcome to Femco restuarant')
});


mongoose.connect(MONGOURL)
    .then(() => {
        console.log('Connected to MONGODB database')
        app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        })
    })
    .catch( (error) => {
        console.log('Error connecting to database')
    })