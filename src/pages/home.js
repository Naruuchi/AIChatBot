import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import './style/home.css'
import { BrowserRouter } from 'react-router-dom'


function  HomePage(){
    document.title = 'Home'
    
    return (
        <div className='home-pages'>
            <div className='title'>
                <h1>Presentation Assistant</h1>
            </div>
        </div>
    )
}

export default HomePage;