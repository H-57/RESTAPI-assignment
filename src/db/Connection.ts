import mongoose from "mongoose";
import "dotenv/config"
const Db_URI:string=process.env.MONGODB_URI!

 const dbConnection=async()=>{
    try {
        await mongoose.connect(Db_URI)
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}
export default dbConnection
