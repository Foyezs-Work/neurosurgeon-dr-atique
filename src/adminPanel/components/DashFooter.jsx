import React from 'react';

const DashFooter = () => {
    return (
        <div className=''>
            <div className="d-flex justify-content-center align-items-center">
                <p className="copyright-text">Copyright © {new Date().getFullYear()} || All rights reserved.  <span className="font-bold" style={{ fontWeight: 700 }}>IT Partner -
                    <a href="https://abaacorp.com/" rel="noreferrer" target="_blank" className="text-secondary"> Abaacorp.com</a></span></p>
            </div>
        </div>
    );
};

export default DashFooter; <h4>Footer</h4>