import React from "react";
import './Grading.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Table from "./Table";

function Grading(){

    return (
        <>
 <div className="nav_feedback">
                <a id="nav_back" href="http://localhost:3000/portal"><ArrowBackIcon /></a>
            </div>

<div className="dataTable">
<Table/>
</div>
        </>
    )
}

export default Grading;