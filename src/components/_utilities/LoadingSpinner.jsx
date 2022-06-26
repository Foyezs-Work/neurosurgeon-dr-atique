import React from 'react'

const LoadingSpinner = ({ title }) => {
    const loadingText = (typeof title === 'undefined' || title === null) ? "Loading....." : title;
    return (
        <div className="d-flex justify-content-center align-item-center">
            <div className="spinner-border mr-3 text-success" role="status">
                <span className="visually-hidden"></span>
            </div>
            <p className="text-center ms-3">{loadingText}</p>
        </div>
    );
}

export default LoadingSpinner;