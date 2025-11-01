import React, {useState,useEffect} from "react";
import './MainPage.css';
import NavMain from "./NavMain";
import ImageSlider from './ImageSlider';
import Footer from './Footer';

function MainPage(){

    const images = [
        'https://i.ytimg.com/vi/8yvSz8TqGck/maxresdefault.jpg',
        'https://static.kiit.ac.in/news/2022/08/KIITSpecialConvocation6.jpg',
        'https://static.kiit.ac.in/main/2017/12/21132333/placement-banner1-1200x350.jpg',
        'https://news.kiit.ac.in/wp-content/uploads/2022/12/KIITs-Teen-Scientist-Snehad-750x430.jpg',
        'https://kiit.ac.in/wp-content/uploads/2023/07/KIIT-University-SAP-Portal-Login-768x576.webp'
        // Add more image URLs as needed
    ];

    const slideInterval = 3000;


return (
    <>
    <NavMain/>

    <p id="sapheading"><b>SAP Portal</b></p>
    
    <div className="imgslider">
    <ImageSlider id="image_slider" images={images} slideInterval={slideInterval}/>
    </div>
 
<Footer/>

    </>
)

}

export default MainPage;