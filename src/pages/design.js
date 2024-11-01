import React, { useState } from 'react';
import './style/design.css';
import { useDesignContext } from './DesignContext';
function Design() {
    const { isOpen } = useDesignContext();
    return (
        <div className={`design-container ${isOpen ? 'open' : ''}`}>
            <h2>Design Component</h2>
        </div>
    )
}

export default Design   