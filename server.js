import express from 'express';
import router from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './database/db.js';

const PORT=8000 || process.env.PORT;

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use('/',router);
 
app.get('/',(req,res)=>{
    res.send('<h1>Found Ya</h1>')
});

dbConnection();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});