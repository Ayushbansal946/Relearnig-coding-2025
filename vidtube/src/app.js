import express from "express";
import CORS from "cors";

const app = express()

app.use(
    CORS({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)

//common middleware
app.use(express.json({
    limit: "16kb"
}));
app.use(express.urlencoded({
    limit: "16kb",
    extended: true
}));
app.use(express.static("public"));
// import routes
import healthCheckRoutes from "./routes/healthCheck.eoutes.js";


//routes




export  {app};