import express from "express";
import cors from "cors";
import { connectDB } from "./configs/DBConnection.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoute.js";
const app = express();
const PORT = 4001;
connectDB();
app.use(express.json())
app.use(cors({
    origin: "https://deliveryappmainone.onrender.com",
    // origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"]
}

))
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter);
app.use("/images", express.static("uploads"))

app.get("/", (req, res) => {
    res.send("API WORKING")
})

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})