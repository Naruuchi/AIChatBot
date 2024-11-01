import React, { createContext, useState, useContext } from 'react';

const DesignContext = createContext();

export const useDesignContext = () => useContext(DesignContext);

export const DesignProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDesign = () => setIsOpen(prev => !prev);

    return (
        <DesignContext.Provider value={{ isOpen, toggleDesign }}>
            {children}
        </DesignContext.Provider>
    );
};