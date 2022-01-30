import React from 'react';

import {Alert} from 'react-bootstrap';

const ErrorMessage = ({variant = "info", children})=>{

    return(
        <Alert variant = {variant} style ={{fontSize: 15, justifyContent:"center",
        display:"flex", alignItems: "center" }}>
            <strong>{children}</strong>
        </Alert>
    );
    
};

export default ErrorMessage;