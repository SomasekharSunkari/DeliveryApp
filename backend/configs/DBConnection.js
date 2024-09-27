import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

export const connectDB  = async()=>{
    await mongoose.connect(process.env.DbAPI).then(()=>
    {
        console.log("DB Connected")
    }
    )
}