import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser'


const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}
))

app.use(express.json({
  limit: "16kb"
}))

app.use(express.urlencoded({
  extended: true,
  limit: "16kb"
}))

app.use(express.static("public"))

app.use(cookieParser())

//Routes import
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import orderRouter from './routes/order.routes.js'

app.use("/api/v1/users", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/order", orderRouter);

export { app }
