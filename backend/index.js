const express=require('express');
const cors=require('cors');
const route=require('../backend/Routes/route');


const app=express();

app.use(express.json());

app.use(express.urlencoded({encoded:false}));


app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
  }));


  //Main implementation

  app.use('/', route);

 

const Port=5000;

app.listen(Port,()=>{
    console.log(`Server running on port ${Port}`);
})
