import express, { Application }  from "express";
const app:Application=express();
import router from "./router/router";
import bodyParser from "body-parser";
import cors from 'cors';

const port:number=8000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(router)

app.listen(port, ()=>{
    console.log(`app listening to the port ${port}`)
})