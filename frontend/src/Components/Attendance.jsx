import React,{useState, useEffect} from "react";
import './Attendance.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Attendance(){

const [id,setId]=useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/api/usernames')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        const id=data.map(i=>i.username.split('@')[0]);
       setId(id);
    }
    )
    .then(err=>{
        console.log(err);
    })
});

const handleAttendance = (username, status) => {
    fetch('http://localhost:5000/api/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, attendance: status })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.message);
        alert('Attendance marked');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updateAttendance=(username, status)=>{

    fetch('http://localhost:5000/api/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, attendance: status })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.message);
          alert('Attendance updated');
        })
        .catch(err => {
          console.log(err);
        });

  };



    return (
        <>
        <div className="nav_feedback">
                <a id="nav_back" href="http://localhost:3000/portal"><ArrowBackIcon /></a>
            </div>

         

 <div className="feedback_heading">Attendance</div>


<div className="attendancetable">
<table>
                    <thead>
                        <tr>
                            <th>Roll number</th>
                            <th>Present</th>
                            <th>Absent</th>
                            <th>Update Present</th>
                            <th>Update Absent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {id.map((idValue, index) => (
                            <tr key={index}>
                                <td><span id="rbtn">{idValue}</span></td>
                                <td><button id="pbtn" onClick={() => handleAttendance(idValue, 'Present')}>P</button></td>
                                <td><button id="abtn" onClick={() => handleAttendance(idValue, 'Absent')}>A</button></td>
                                <td><button id="upbtn" onClick={() => updateAttendance(idValue, 'Present')}>Update P</button></td>
                                <td><button id="uabtn" onClick={() => updateAttendance(idValue, 'Absent')}>Update A</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
</div>



<div className="footer_portal">
    <div className="Help"><h2 id="help">Policies</h2></div>
    <div className="EAM">
        <span id="footertext">To Know More<a href="https://kiit.ac.in/policies/"><button id="eamdiv">Click Here</button></a></span>
    </div>
   </div>



        </>
    )
}


export default Attendance;