import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import itemRouter from "./routes/item.routes.js"
import shopRouter from "./routes/shop.routes.js"
import orderRouter from "./routes/order.routes.js"
import http from "http"
import { Server } from "socket.io"
import { socketHandler } from "./socket.js"

const app = express()
const server = http.createServer(app)

const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL
].filter(Boolean)

const io = new Server(server, {
    cors: {
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin) || allowedOrigins.length === 0) {
                callback(null, true)
            } else {
                callback(null, true)
            }
        },
        credentials: true,
        methods: ['POST', 'GET']
    }
})

app.set("io", io)

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin) || allowedOrigins.length === 0) {
            callback(null, true)
        } else {
            callback(null, true)
        }
    },
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

// Root status check
app.get("/", (req, res) => {
    res.json({ message: "Vingo API Server is running" })
})

// Ensure DB connected on serverless requests
app.use(async (req, res, next) => {
    await connectDb()
    next()
})

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/shop", shopRouter)
app.use("/api/item", itemRouter)
app.use("/api/order", orderRouter)

socketHandler(io)

const port = process.env.PORT || 8000

if (process.env.VERCEL !== '1') {
    server.listen(port, () => {
        connectDb()
        console.log(`server started at ${port}`)
    })
}

export default app
