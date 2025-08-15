import mongoose from "mongoose";
import {DB_name} from "../constants.js";

const connectDB=async()=>{
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