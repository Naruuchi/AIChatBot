import React, { useEffect } from 'react';
import Design from './design';
import { useDesignContext } from './DesignContext';
import PDFViewer from './PDFViewer'
function ViewPage() {

    document.title = 'Presentation';
    const {PDFFile} = useDesignContext()
    const fType = ['application/pdf']

    return (
        <>
            <Design />
            <PDFViewer/>
        </>
    )
}

export default ViewPage