import express from "express";
import cors from "cors";
import { connectDB } from "./configs/DBConnection.js";
import  foodRouter  from "./routes/foodRoutes.js";

const app = express();
const PORT =  4000;
connectDB();
app.use(express.json())
app.use(cors())
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))

app.get("/",(req,res)=>{
   
    res.send("API WORKING")
})

app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})