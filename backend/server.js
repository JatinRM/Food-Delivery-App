import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
// Middleware to enable Cross-Origin Resource Sharing (CORS)
// Allows requests from different origins to access your server
app.use(cors())

//Db connection
connectDB();

//API endpoint
// Mount the `foodRouter` on the `/api/food` path
// This means all routes defined in `foodRouter` will be prefixed with `/api/food`
// Example: A route `/list` in `foodRouter` will be accessible at `/api/food/list`
app.use('/api/food',foodRouter)
// Serve static files from the 'uploads' directory under the '/images' URL path
// Example: A file `example.jpg` in `uploads` will be accessible at `/images/example.jpg`
app.use('/images',express.static('uploads'))

app.use('/api/user',userRouter)

app.use('/api/cart',cartRouter)

app.use('/api/order',orderRouter);


app.get('/',(req,res) => {
    res.send('api working')
})

app.listen(port,()=> {
    console.log(`Server started on http://localhost:${port}`)
})

// 