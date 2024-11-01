import { Outlet, Link } from 'react-router-dom';
import { useRef } from 'react'
import "./style/App.css"
import "./style/design.css"
import Design from './design';
import React, { useState } from 'react';
import { useDesignContext } from './DesignContext';
function Layout() {
    const inputFile = useRef('')

    const HandleButtonOnClick = () => {
        inputFile.current.click()
    }

    const { isOpen, toggleDesign } = useDesignContext();

    const HandleDesignDropdown = () => {
        if (document.title === 'Presentation') {
            console.log('Yes')
            toggleDesign();
        }
    }

    return (
        <div>
            <nav>
                <ul>
                    <li><b><Link className="nav_button" to="/">Home</Link></b></li>
                    <li>
                        <b>
                            <button className="nav_button" onClick={HandleButtonOnClick}>File</button>
                        </b><input ref={inputFile} type="file" id="presentfile" style={{ display: 'none' }} />
                    </li>
                    <li><b><Link className="nav_button" to="/view">View</Link></b></li>
                    <li>
                        <b>
                            <button className="nav_button" onClick={(HandleDesignDropdown)}>Design</button>
                        </b>
                    </li>
                    <li><b><Link className="nav_button" to="/AIAssistant">AI ChatBot</Link></b></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout