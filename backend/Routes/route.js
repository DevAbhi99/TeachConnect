const express=require('express');
const db=require('../Database/db');
const router=express.Router();
const bcrypt=require('bcrypt');



//Signup with password encryption using bcrypt
router.post('/signup', (req, res) => {

    const {username, password}=req.body;
    
    // Validate input
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    
    bcrypt.genSalt(10, function(err, salt) {

        if(err){
            console.log(`Could not generate salt due to error ${err}`);
            return res.status(500).json({ message: 'Error generating password hash' });
        }
        bcrypt.hash(password, salt, function(err, hash) {
            if(err){
                console.log(`Could not hash password due to error ${err}`);
                return res.status(500).json({ message: 'Error creating user' });
            }

            const sql='insert into signup(username, password) values(?,?);';

            db.query(sql, [username, hash], (err, results)=>{
                if (err) {
                    console.error('Error inserting data into the database:', err);
                    return res.status(500).json({ message: 'Internal server error' });
                  }
                  console.log('User signed up:', results);
                  res.json({ message: 'User signed up successfully!' });
            })
        });
    });


  });


  //For login functionality with bcrypt password encryption

  router.post('/login', (req,res)=>{

    const {username, password}=req.body;

    const sql='select * from signup where username=?;';

    db.query(sql, [username], (err, results)=>{

        if(err){
            res.status(500).json({message:'error'});
            return;
        }
    
        if (results.length===0){
            return res.status(401).json({message:'Invalid email or password'});
        }
    
        const hashedPassword=results[0].password;

        bcrypt.compare(password, hashedPassword, function(err, result) {
            // result == true
            if(err){
                console.log(`error occurred while validating due to error ${err}`);
               res.status(500).json({message:'Error validating password'});
                return;
            }
        
            if(result){
                res.status(200).json({message:'Successfully Logged in'});
            }
            else{
                res.status(401).json({message:'Invalid credentials'});
            }
        });


    })

  })


  // Create feedback route
router.post('/api/feedback', (req, res) => {
  const { professorname,studentname, rollnumber, comment, rating } = req.body;
  
  const sql = 'INSERT INTO feedback (studentname,rollnumber,comment,rating,professorname) VALUES (?, ?, ?, ?, ?)';
  
  db.query(sql, [studentname, rollnumber, comment, rating, professorname], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send('Feedback submitted successfully');
  });
});


//printing feedback values
router.get('/api/studentfeedback', (req, res) => {
  const sql = 'SELECT studentname, rollnumber, comment, rating, professorname FROM feedback';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving feedback:', err);
      return res.status(500).send('Error retrieving feedback');
    }
    res.status(200).json(results); 
  });
});


//printing attendance values
router.get('/api/studentattendance', (req, res) => {
  const sql = 'SELECT day, username, attendance FROM attendance;';
  db.query(sql, (err, results) => {
    if (err) {
      console.log(`Could not receive because of ${err}`);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.status(200).json(results);
  });
});





//For printing rollnumber from attendance table
router.get('/api/usernames', (req, res) => {
  const sql = 'SELECT username FROM signup';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});


//for marking attendance in the attendance table
router.post('/api/attendance', (req, res) => {
  const { username, attendance } = req.body;
  const userid = `${username}@kiit.ac.in`;
  const sql = 'insert into attendance (username, attendance) values (?, ?);';
 db.query(sql, [userid, attendance], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ success: true, message: 'Attendance inserted successfully' });
  });
});

//for updating attendance in the attendance table
router.post('/api/update', (req, res) => {
  const { username, attendance } = req.body;
  const userid = `${username}@kiit.ac.in`;
  const sql = 'update attendance set attendance=? where username=?;';
 db.query(sql, [attendance,userid], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ success: true, message: 'Attendance updated successfully' });
  });
});


//Grading inserting data
router.post('/api/insertData', (req, res) => {
  const { username, grades, remark, profname, subjectname } = req.body;
 
  const sql = `INSERT INTO results (username, marks, result, profname, subject) VALUES (?, ?, ?, ?, ?);`;
  db.query(sql, [username, grades, remark, profname, subjectname], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ success: true, message: 'Data inserted successfully' });
  });
});

//Grading retrieving data
router.get('/api/retrieveData', (req, res) => {
  
 const sql = `select * from results;`;
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
 res.json(result);
  });
});

//Grading deleting data

router.post('/api/deleteData', (req, res) => {
  
const {username}=req.body;

  const sql = 'DELETE FROM results WHERE username = ?;';
   db.query(sql, [username], (err, result) => {
     if (err) {
       return res.status(500).send(err);
     }
  res.json(result);
   });
 });


 //printing grading values

 router.get('/api/getstudentgrading',(req,res)=>{
const sql='SELECT username, marks, result FROM results;';

db.query(sql, (err,results)=>{
if(err){
  console.log(`Error ${err} encountered`);
  return res.status(500).send(err);
}
res.status(200).json(results);

});
 });


 module.exports=router;