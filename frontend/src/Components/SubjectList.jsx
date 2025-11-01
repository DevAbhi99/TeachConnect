import React from "react";
import './Subjectlist.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Subjectlist(){
return (
    <>
    <div className="nav_feedback">
                <a id="nav_back" href="http://localhost:3000/studentportal"><ArrowBackIcon /></a>
            </div>

            <a href="http://localhost:3000/studentgrading"><button className="subbtn"><div className="subject_list"> 
        <div className="linux">
            <div className="professorname">
            <span className="prof_name">Professor name:</span>
            <span className="p_name">Tirthankar Khaund</span>
            </div>
            <div className="subjectname">
            <span className="subj_name">Subject name:</span>
            <span className="s_name">Linux</span>
            </div>
        </div>
        </div></button></a>
        
    </>
)

}

export default Subjectlist;