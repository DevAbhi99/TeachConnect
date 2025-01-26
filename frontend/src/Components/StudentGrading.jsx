import React,{useEffect,useState} from "react";
import './StudentGrading.css';
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function StudentGrading(){

const [grade,setGrade]=useState([]);

useEffect(()=>{
const fetchGrading=async()=>{
   try{
    const response=await axios.get('http://localhost:5000/api/getstudentgrading');
    console.log(response);
    setGrade(response.data);
   }
   catch(err){
    console.log(`Error ${err} occurred!`);
   }
}
fetchGrading();
},[]); 



return(
    <>
    <div className="nav_feedback">
                <a id="nav_back" href="http://localhost:3000/studentportal"><ArrowBackIcon /></a>
            </div>

<div>

{grade.length > 0 ? (
                    grade.map((v, index) => (
                        <div key={index} className="grade_card">
                            <p><strong>Roll no.</strong> {v.username}</p>
                            <p><strong>Marks:</strong> {v.marks}</p>
                            <p><strong>Result:</strong> {v.result}</p>
                        </div>
                    ))
                ) : (
                    <p>No attendance data available.</p>
                )}

</div>


    </>
)

}

export default StudentGrading;

