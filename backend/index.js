const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mysql=require('mysql2');

const app=express();

app.use(express.json());

app.use(bodyparser.urlencoded({encoded:false}));


app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
  }));


//Setup Mysqlconnection

const connection = mysql.createConnection({
    host: 'localhost',   // Replace with your host
    user: 'root',        // Replace with your database user
    password: 'Trishala@99', // Replace with your database password
    database: 'credentials'   // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});


app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
  
    // SQL query to insert data into the signup table
    const query = 'INSERT INTO signup (username, password) VALUES (?, ?)';
  
    connection.query(query, [username, password], (err, results) => {
      if (err) {
        console.error('Error inserting data into the database:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }
      console.log('User signed up:', results);
      res.json({ message: 'User signed up successfully!' });
    });
  });


  //For login functionality

  app.post('/login', (req, res) => {
    const { username, password } = req.body;
   if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
    const sql = 'SELECT * FROM signup WHERE username = ? AND password = ?';
    
    connection.query(sql, [username, password], (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        res.status(500).send('Internal server error');
      } else {
        if (results.length > 0) {
          res.status(200).json({ message: 'Login successful' });
        } else {
          res.status(401).json({ message: 'Invalid username or password' });
        }
      }
    });
  });


  // Create feedback route
app.post('/api/feedback', (req, res) => {
  const { professorname,studentname, rollnumber, comment, rating } = req.body;
  
  const sql = 'INSERT INTO feedback (studentname,rollnumber,comment,rating,professorname) VALUES (?, ?, ?, ?, ?)';
  
  connection.query(sql, [studentname, rollnumber, comment, rating, professorname], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send('Feedback submitted successfully');
  });
});


//printing feedback values
app.get('/api/studentfeedback', (req, res) => {
  const sql = 'SELECT studentname, rollnumber, comment, rating, professorname FROM feedback';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving feedback:', err);
      return res.status(500).send('Error retrieving feedback');
    }
    res.status(200).json(results); 
  });
});


//printing attendance values
app.get('/api/studentattendance', (req, res) => {
  const sql = 'SELECT day, username, attendance FROM attendance;';
  connection.query(sql, (err, results) => {
    if (err) {
      console.log(`Could not receive because of ${err}`);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.status(200).json(results);
  });
});





//For printing rollnumber from attendance table
app.get('/api/usernames', (req, res) => {
  const sql = 'SELECT username FROM signup';
  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});


//for marking attendance in the attendance table
app.post('/api/attendance', (req, res) => {
  const { username, attendance } = req.body;
  const userid = `${username}@kiit.ac.in`;
  const sql = 'insert into attendance (username, attendance) values (?, ?);';
 connection.query(sql, [userid, attendance], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ success: true, message: 'Attendance inserted successfully' });
  });
});

//for updating attendance in the attendance table
app.post('/api/update', (req, res) => {
  const { username, attendance } = req.body;
  const userid = `${username}@kiit.ac.in`;
  const sql = 'update attendance set attendance=? where username=?;';
 connection.query(sql, [attendance,userid], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ success: true, message: 'Attendance updated successfully' });
  });
});


//Grading inserting data
app.post('/api/insertData', (req, res) => {
  const { username, grades, remark, profname, subjectname } = req.body;
 
  const sql = `INSERT INTO results (username, marks, result, profname, subject) VALUES (?, ?, ?, ?, ?);`;
  connection.query(sql, [username, grades, remark, profname, subjectname], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ success: true, message: 'Data inserted successfully' });
  });
});

//Grading retrieving data
app.get('/api/retrieveData', (req, res) => {
  
 const sql = `select * from results;`;
  connection.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
 res.json(result);
  });
});

//Grading deleting data

app.post('/api/deleteData', (req, res) => {
  
const {username}=req.body;

  const sql = `delete from results where username="${username}";`;
   connection.query(sql, (err, result) => {
     if (err) {
       return res.status(500).send(err);
     }
  res.json(result);
   });
 });


 //printing grading values

 app.get('/api/getstudentgrading',(req,res)=>{
const sql='SELECT username, marks, result FROM results;';

connection.query(sql, (err,results)=>{
if(err){
  console.log(`Error ${err} encountered`);
  res.status(500).send(err);
}
res.status(200).json(results);

});
 });

 

const Port=5000;

app.listen(Port,()=>{
    console.log(`Server running on port ${Port}`);
})
