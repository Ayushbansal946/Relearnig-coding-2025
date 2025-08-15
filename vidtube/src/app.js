import express from "express";
import cors from "cors";

const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
));

//common middleware
app.use(express.json({
    limit: "1mb"
}));
app.use(express.urlencoded({
    limit: "1mb",
    extended: true
}));
app.use(express.static("public"));





export  {app};