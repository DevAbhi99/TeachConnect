import React, { useState, useEffect } from "react";
import './StudentFeedback.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

function StudentFeedback() {
    const [feedbacks, setFeedbacks] = useState([]); // State to store feedback data

    // Fetch feedbacks on component mount
    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/studentfeedback'); // Call the backend API
                setFeedbacks(response.data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };
        fetchFeedbacks();
    }, []);

    return (
        <>
            <div className="nav_feedback">
                <a id="nav_back" href="http://localhost:3000/studentportal"><ArrowBackIcon /></a>
            </div>

            <div className="student_feedback_heading">
                <h2>Here's Your Feedback...</h2>
            </div>  

            <div className="student_feedback_area">
                {feedbacks.length > 0 ? (
                    feedbacks.map((feedback, index) => (
                        <div key={index} className="feedback_card">
                            <p><strong>Professor:</strong> {feedback.professorname}</p>
                            <p><strong>Student Name:</strong> {feedback.studentname}</p>
                            <p><strong>Roll Number:</strong> {feedback.rollnumber}</p>
                            <p><strong>Comment:</strong> {feedback.comment}</p>
                            <p><strong>Rating:</strong> {feedback.rating}</p>
                        </div>
                    ))
                ) : (
                    <p>No feedback available.</p>
                )}
            </div>   
        </>
    );
}

export default StudentFeedback;
