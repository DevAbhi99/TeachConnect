import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Portal from './Components/Portal';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
import Signup from './Components/Signup';
import Feedback from './Components/Feedback';
import Attendance from './Components/Attendance';
import Grading from './Components/Grading';
import StudentPortal from './Components/StudentPortal';
import StudentFeedback from './Components/StudentFeedback';
import StudentGrading from './Components/StudentGrading';
import StudentAttendance from './Components/StudentAttendance';
import Subjectlist from './Components/SubjectList';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<MainPage/>}/>
      <Route path='/portal' element={<Portal/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/professorportal' element={<Portal/>}/>
      <Route path='/studentportal' element={<StudentPortal/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/studentfeedback' element={<StudentFeedback/>}/>
      <Route path='/attendance' element={<Attendance/>}/>
      <Route path='/studentattendance' element={<StudentAttendance/>}/>
      <Route path='/grading' element={<Grading/>}/>
      <Route path='/studentgrading' element={<StudentGrading/>}/>
      <Route path='/subjectlist' element={<Subjectlist/>}/>
    </Routes>
    </BrowserRouter>
  

    </>
    );
}

export default App;
