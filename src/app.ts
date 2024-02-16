// imports
import  express  from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/User"
import dbConnection from "./db/Connection";
import helmet from 'helmet';
import 'dotenv/config'
import { logRequest } from "./middleware/LogRequest";

// express server
const app=express();
const Port=process.env.PORT || 4000
dbConnection() // connrction to db
// middlewares
app.use(helmet());
app.use(bodyParser.json())
app.use(logRequest)
// Custom Routes
app.use("/users",userRoutes)

app.get("/",(req,res)=>{
    res.send("all works")
})
app.all("*",(req,res)=>{
    res.status(400).json({message:"invalid request",success:false})
})
app.listen(Port,()=>console.log(`server is running on port ${Port}`))