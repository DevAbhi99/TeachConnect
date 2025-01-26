import React, {useState,useEffect} from "react";
import axios from "axios";
import './StudentAttendance.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function StudentAttendance(){

const [attendance,setAttendance]=useState([]);

    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/studentattendance'); // Call the backend API
                console.log(response);
                setAttendance(response.data); // Update state with fetched data
            } catch (error) {
                console.log('Error fetching attendance:', error);
            }
        };
        fetchAttendance();
    }, []);
    


    return (
        <>
 <div className="nav_feedback">
                <a id="nav_back" href="http://localhost:3000/studentportal"><ArrowBackIcon /></a>
            </div>

            
                {attendance.length > 0 ? (
                    attendance.map((v, index) => (
                        <div key={index} className="attendance_card">
                            <p><strong>Day</strong> {v.day}</p>
                            <p><strong>Roll no.:</strong> {v.username}</p>
                            <p><strong>Attendance:</strong> {v.attendance}</p>
                        </div>
                    ))
                ) : (
                    <p>No attendance data available.</p>
                )}
          

        </>
    )

}

export default StudentAttendance;