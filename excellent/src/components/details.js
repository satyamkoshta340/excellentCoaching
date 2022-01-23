import React from 'react'
import Navbar from './navbar';
import backImg from '../media/details/backImg.jpg';
import {img1, img2, img3, img4, img5, img6, img7} from '../media'; 
import { useState } from 'react';
import '../styles/details.css'
export default function Details() {
    const [currSlide, setCurrSlide] =  useState(0);
    const slides= [img1, img2, img3, img4, img5, img6, img7];
    const plusSlide = (n) =>{
        // console.log("here")
        let el =document.getElementById('gallery-img');
        let animation;
        if(n=== -1){
            animation ='move-left-animation';
        }
        else animation = 'move-right-animation';
        el.classList.add(animation);
        
        var temp = currSlide;
        temp += n;
        if(temp === slides.length) temp= 0;
        else if(temp < 0) temp = slides.length-1;
        el.classList.remove(animation);
        setCurrSlide(temp);
        // console.log(currSlide);
    }

    return (
        <div>
            <div className='details' style={{backgroundImage: `url(${backImg})`}}>
                <Navbar/>
                <p className='inner-detail'>
                    ज्ञान प्राप्त करने के <br/> लिए अध्यन जरुरी है और <br/> बुद्धिमानी प्राप्त करने के लिए <br/> समझना जरुरी है
                </p>
                <p className='inner-detail-2'>
                    DISCOVER THE TALENT <br/> <button className='inner-detail-shop btn'>JOIN NOW</button>
                </p>
            </div>
            <div className='sub-details'>
                <p className='inner-detail-gallary' id='inner-detail-gallary'>Gallery</p>
                <div className='gallery-box'>
                    <button className='btn img-btn-left' onClick={()=>plusSlide(-1)}> &#10094; </button>
                    <img src={slides[currSlide]} alt='img' className='gallery-img' id='gallery-img'></img>
                    <button className='btn img-btn-right' onClick={()=>plusSlide(1)}> &#10095; </button>
                </div>
            </div>
        </div>
        
    )
}
