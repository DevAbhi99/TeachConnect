import React, {useState} from "react";
import './Feedback.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

function Feedback(){

    const [yourname, setYourName]=useState('');
    const [name, setName] = useState('');
    const [rollnumber, setRollnumber] = useState('');
    const [comment, setComment] = useState('');
    const [rate,setRate]=useState('');
  
const rateone=()=>{

    setRate('1');

}

const ratetwo=()=>{
    setRate('2');
}

const ratethree=()=>{
    setRate('3');
}

const ratefour=()=>{
    setRate('4');
}

const ratefive=()=>{
    setRate('5');
}

const ratesix=()=>{
    setRate('6');
}

const rateseven=()=>{
    setRate('7');
}

const rateeight=()=>{
    setRate('8');
}

const ratenine=()=>{
    setRate('9');
}

const rateten=()=>{
    setRate('10');
}

const handleSubmit = async () => {
    try {
        await axios.post('http://localhost:5000/api/feedback', {
            professorname:yourname,
            studentname:name,
            rollnumber,
            comment,
            rating: rate
        });
        alert('Feedback submitted successfully');
    } catch (error) {
        console.error('Error submitting feedback:', error);
        alert('Error submitting feedback');
    }
};
   

    const reset=()=>{
        window.location.reload();
    }

    return (
        <>
        <div className="nav_feedback">
                <a id="nav_back" href="http://localhost:3000/portal"><ArrowBackIcon /></a>
            </div>

         

 <div className="feedback_heading">What would you like to rate your Student</div>

            <div className="feedback_btns">

                    <span id="feedbackbtns"><button id="feed1" onClick={rateone}>1</button></span>
                    <span id="feedbackbtns"><button id="feed2" onClick={ratetwo}>2</button></span>
                    <span id="feedbackbtns"><button id="feed3" onClick={ratethree}>3</button></span>
                    <span id="feedbackbtns"><button id="feed4" onClick={ratefour}>4</button></span>
                    <span id="feedbackbtns"><button id="feed5" onClick={ratefive}>5</button></span>
                    <span id="feedbackbtns"><button id="feed6" onClick={ratesix}>6</button></span>
                    <span id="feedbackbtns"><button id="feed7" onClick={rateseven}>7</button></span>
                    <span id="feedbackbtns"><button id="feed8" onClick={rateeight}>8</button></span>
                    <span id="feedbackbtns"><button id="feed9" onClick={ratenine}>9</button></span>
                    <span id="feedbackbtns"><button id="feed10" onClick={rateten}>10</button></span>
               
            </div>

            
    <input type="text" id="rateholder" value={rate}/>


            <div className="feedbackform">
            <div id="yournametxt">
                    <span>Your Name</span>
                    <input id="yourname" type="text" value={yourname} onChange={e => setYourName(e.target.value)} />
                </div>
                <div id="nametxt">
                    <span>Student Name</span>
                    <input id="studname" type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div id="rolltxt">
                    <span>Roll Number</span>
                    <input id="studrollno" type="text"  value={rollnumber} onChange={e => setRollnumber(e.target.value)} />
                </div>
                <div id="feedbackarea">
                    <span>Comment</span>
                    <span><textarea id="commentarea"  value={comment} onChange={e => setComment(e.target.value)} /></span>
                </div>

                <div className="feedbackformbtns">
                    <span><button type="submit" id="submitbtn" onClick={handleSubmit} >Submit</button></span>
                    <span id="resbtn"><button id="resetbtn" onClick={reset}>Reset</button></span>
                </div>
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

export default Feedback;