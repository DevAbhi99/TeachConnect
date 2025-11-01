const express=require('express');
const cors=require('cors');
const route=require('../backend/Routes/route');


const app=express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));


app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
  }));


  //Main implementation

  app.use('/', route);

 

const Port=2500;

app.listen(Port,()=>{
    console.log(`Server running on port ${Port}`);
})
