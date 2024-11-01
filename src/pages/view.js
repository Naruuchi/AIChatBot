import React, { useEffect } from 'react';
import Design from './design';
import { useDesignContext } from './DesignContext';
function ViewPage() {

    document.title = 'Presentation';
    return (
        <>
            <Design />
        </>
    )
}

export default ViewPage