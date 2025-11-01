-- Create TeachConnect Database Schema
-- This file runs automatically when MySQL container starts for the first time

-- Create signup table (users)
CREATE TABLE IF NOT EXISTS signup (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create feedback table
CREATE TABLE IF NOT EXISTS feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    studentname VARCHAR(255) NOT NULL,
    rollnumber VARCHAR(50) NOT NULL,
    comment TEXT,
    rating INT CHECK (rating >= 1 AND rating <= 10),
    professorname VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create attendance table
CREATE TABLE IF NOT EXISTS attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    day TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    username VARCHAR(255) NOT NULL,
    attendance ENUM('Present', 'Absent') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create results/grading table
CREATE TABLE IF NOT EXISTS results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    marks VARCHAR(50),
    result VARCHAR(100),
    profname VARCHAR(255),
    subject VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create indexes for better performance
CREATE INDEX idx_signup_username ON signup(username);
CREATE INDEX idx_feedback_rollnumber ON feedback(rollnumber);
CREATE INDEX idx_attendance_username ON attendance(username);
CREATE INDEX idx_results_username ON results(username);

-- Insert some sample data (optional - you can remove this section)
-- Sample users (passwords are hashed with bcrypt - these are just examples)
-- INSERT INTO signup (username, password) VALUES 
-- ('1234567@kiit.ac.in', '$2b$10$samplehashedpassword1'),
-- ('7654321@kiit.ac.in', '$2b$10$samplehashedpassword2');

-- Display tables created
SELECT 'Database schema created successfully!' AS Status;
SHOW TABLES;

