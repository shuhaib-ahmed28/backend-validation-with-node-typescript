import express, { Application }  from "express";
const app:Application=express();
import router from "./router/router";
import bodyParser from "body-parser";

const port:number=8080;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(router)

app.listen(port)