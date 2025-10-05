import mongoose from "mongoose";
import {DB_name} from "../constants.js";
//always asume the datavase is in another content use async await
const connectDB=async()=>{
    //there can be error while connecting to database so use try catch
try{
   const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
    console.log("Connected to MongoDB");
    console.log(`\n Connection Instance: ${connectionInstance.connection.host}`);
}catch(error){
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
}
}

export default connectDB;