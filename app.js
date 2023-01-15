const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv =   require('dotenv').config();
 require('./src/config/dbConnection');
const port = process.env.PORT ?? 3001 ;

const todoRouter = require('./src/routers/todoRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api",todoRouter);
app.get("/",(req, res)=>{
    res.send("Merhaba dünya")
});

app.listen(port,()=>{
    console.clear()
    console.log(`Listening ${port} port`);
});