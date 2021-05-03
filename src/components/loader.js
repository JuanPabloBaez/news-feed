import React from 'react';
import loader from '../loader.gif';
import "./loader.css"


function Loading() {
    return(
        <div className="loader">
            <img src={loader} alt='loading' className="loading" />
            <h2 className="boo"> LoOoOoking!</h2>
        </div>
    )
}

export default Loading;