import React from 'react'
import "../styles/navbar.css"
// import {useDispatch} from 'react-redux'
import { useState } from 'react';
import {logo} from '../media'; 
export default function Navbar() {
    const [menu, setMenu] = useState(false);
    // const dispatch = useDispatch();
    const toggle = (menu)=>{
        setMenu(menu);
        let el = document.getElementsByClassName("nav-btn");
        if(menu)el[0].classList.add("nav-btn-active");
        else el[0].classList.remove("nav-btn-active");

    }
    return (
        <div>
        <div className='navbar'>
            <div> <img src={logo} className='logo'></img></div>
            <div className='brand-name'>Excellent Coaching Centre</div>
            <button className='btn nav-btn' onClick={()=>{toggle(!menu)}}>
                <div className='bar bar1'></div>
                <div className='bar bar2'></div>
                <div className='bar bar3'></div>
            </button>
        </div>
        <div className='menu' style={{display: menu ? 'flex' : 'none'}} >
            <div className='menu-item'>Study</div>
            <a className='menu-item'>Gallery</a>
            <div className='menu-item'>GYm</div>
        </div>
        </div>
    )
}

// onClick={()=>{dispatch(toggle(!menu))}}
