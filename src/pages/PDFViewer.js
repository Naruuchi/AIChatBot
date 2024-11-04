import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './style/pdf.css'
import { useDesignContext } from './DesignContext';
import pdf from './f.pdf'

function PDFViewer() {
    const plugin = defaultLayoutPlugin()
    const { PDFFile } = useDesignContext();

    const file = pdf
    return (
        <div className="pdf-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={file} plugins={[plugin]}></Viewer>
            </Worker>
        </div>
    )
}

export default PDFViewer;