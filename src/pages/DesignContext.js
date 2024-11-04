import React, { createContext, useState, useContext } from 'react';

const DesignContext = createContext();


export const useDesignContext = () => useContext(DesignContext);

export const DesignProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [PDFFile, setPDFFile] = useState(false);

    const toggleDesign = () => setIsOpen(prev => !prev);
    const HandleSetPDFFile = (e) => {
        const file = e.target.files[0]
        const fType = ['application/pdf']
        if (file && fType.includes(file.type))
        {
            setPDFFile(file)
            console.log(file)
        }
    }

    return (
        <DesignContext.Provider value={{ isOpen, toggleDesign, HandleSetPDFFile, PDFFile}}>
            {children}
        </DesignContext.Provider>
    );
};