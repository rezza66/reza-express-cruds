import express from "express";
import ProductRoute from "./routes/ProductRoute.js"


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(ProductRoute);

app.listen(5000, ()=> console.log('server up and running ...'))