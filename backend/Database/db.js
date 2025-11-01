const mysql=require('mysql2');
const dotenv=require('dotenv');

//Loading env variables
dotenv.config();


const connection=mysql.createConnection({
    host:`${process.env.DB_HOST}`,
    user:`${process.env.DB_USER}`,
    password:`${process.env.DB_PASSWORD}`,
    database:`${process.env.DB_DATABASE}`
})


connection.connect((error)=>{
    if(error){
        console.log(`Could not connect to database due to error ${error}`);
    }
    else{
        console.log('successfully connected to database');
    }
})

module.exports=connection;