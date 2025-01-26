import React from "react";
import './NavBar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';


function NavBar(){

return (
    <>

<div className="nav_main">
    <div className="nav_mainone">
       <div className="mainone_sub"> 
       <span id="subsap"><a href="http://localhost:3000/"><button id="btn">SAP</button></a></span>
        <span id="subone"><a href="https://library.kiit.ac.in/?_gl=1%2A9ez0u5%2A_ga%2AMTQ0MjQ5MDY4NC4xNzIwNTk0NDUy%2A_ga_34QZ5P9757%2AMTcyMDU5NDQ1Mi4xLjEuMTcyMDU5NTY1Mi41Ny4wLjA."><button id="btn">Library</button></a></span>
        <span id="subtwo"><a href="https://kiit.ac.in/notices/"><button id="btn">Notices</button></a></span>
        <span id="subthree"><a href="https://alumni.kiit.ac.in/?_gl=1*1p2anbn*_ga*MTQ0MjQ5MDY4NC4xNzIwNTk0NDUy*_ga_34QZ5P9757*MTcyMDU5NDQ1Mi4xLjEuMTcyMDU5NzMzMS42MC4wLjA."><button id="btn">Alumni</button></a></span>
        <span id="subfour"><a href="https://coe.kiit.ac.in/?_gl=1*197rmls*_ga*MTQ0MjQ5MDY4NC4xNzIwNTk0NDUy*_ga_34QZ5P9757*MTcyMDU5NDQ1Mi4xLjEuMTcyMDU5NzM4Ni41LjAuMA.."><button id="btn">Examination</button></a></span>
        <span id="subfive"><a href="https://kiit.ac.in/training-placement/"><button id="btn">Placement</button></a></span>
        <span id="subfive"><a href="https://form.kiit.ac.in/payment/?_gl=1*1xia0pj*_ga*MTQ0MjQ5MDY4NC4xNzIwNTk0NDUy*_ga_34QZ5P9757*MTcyMDU5NDQ1Mi4xLjEuMTcyMDU5NzQwOC40OS4wLjA."><button id="btnfee"><b>Fee Payment</b></button></a></span>
       </div>

       <div className="mainone_subone"> 
        <span id='fb'><a href="https://www.facebook.com/KIITUniversity"><button id="fbbtn"><FacebookIcon/></button></a></span>
        <span id='li'><a href="https://www.linkedin.com/school/kiituniversity/"><button id="fbbtn"><LinkedInIcon/></button></a></span>
        <span id='in'><a href="https://www.instagram.com/KIITUniversity/"><button id="fbbtn"><InstagramIcon/></button></a></span>
        <span id='yo'><a href="https://www.youtube.com/channel/UC2x7DxsTyZj7XBa3hlLVPCQ"><button id="fbbtn"><YouTubeIcon/></button></a></span>
        <span id='xi'><a href="https://x.com/KIITUniversity"><button id="fbbtn"><XIcon/></button></a></span>
       </div>
    </div>
    <div className="nav_maintwo">
   <span><img id='kiitlogo' src="https://d2lk14jtvqry1q.cloudfront.net/media/small_Kalinga_Institute_of_Industrial_Technology_KIIT_University_17335b6db0_ce378cd5fb_c4bfd9e839_5ec82024ff.png"/></span>
  </div>
</div>

    </>
)

}


export default NavBar;