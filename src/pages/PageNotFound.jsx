import React from 'react';
import shap1 from "../assets/images/shap/wave-blue.png"
import shap2 from "../assets/images/shap/circle-dots.png"
import shap3 from "../assets/images/shap/plus-blue.png"
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div class="banner-wraper">
            <div class="page-banner page-not-found" style={{ height: "100vh" }} >
                <div class="container">
                    <div class="page-banner-entry text-center">
                        <h1>Page Not Found</h1>
                        <nav aria-label="breadcrumb" class="breadcrumb-row">
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg> Home</Link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Page Not Found</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <img class="pt-img1 animate-wave" src={shap1} alt="" />
                <img class="pt-img2 animate2" src={shap2} alt="" />
                <img class="pt-img3 animate-rotate" src={shap3} alt="" />
            </div>
        </div>
    );
};

export default PageNotFound;