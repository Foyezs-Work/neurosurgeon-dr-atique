import React from 'react';
import mainBanner from "./../../assets/images/main-banner/bg1.jpg"
import trangleOrange from "./../../assets/images/shap/trangle-orange.png"
import squareBlue from "./../../assets/images/shap/square-blue.png"
import circleBlue from "./../../assets/images/shap/chicle-blue-2.png"
import plusOrange from "./../../assets/images/shap/plus-orange.png"
import waveOrange from "./../../assets/images/shap/wave-orange.png"
import doctorImage from "./../../assets/images/main-banner/doctor.png"
import govtLogo from "./../../assets/images/govt_logo.png"

const MainBanner = () => {
    return (
        <div className="main-banner"
            style={{ backgroundImage: `url(${mainBanner})` }}
        >
            <div className="container inner-content">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6 col-sm-7 position-relative">
                        <img src={govtLogo} alt="Govt Logo" style={{height: "50px",}} />
                        {/* <h6 className="title-ext text-primary">Hello, I'm</h6> */}
                        <h1>Dr. K. M. Atiqul Islam</h1>
                        <h5 className='dr_department'>Brain & Spine Surgeon</h5>
                        <h5>MBBS (DMC), BCS (Health)</h5>
                        <h5>MS (Neurosurgery)</h5>
                        <h4 className=''>Dept of Neurosurgery</h4>
                        <h5>National Institute of Neuroscience & Hospital Agargaon, Dhaka</h5>
                        {/* <a href="about-us" className="btn btn-secondary btn-lg shadow">Know More</a> */}
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-5">
                        <div className="banner-img">
                            <img src={doctorImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img className="pt-img1 animate1" src={trangleOrange} alt="" />
            <img className="pt-img2 animate2" src={squareBlue} alt="" />
            <img className="pt-img3 animate3" src={circleBlue} alt="" />
            <img className="pt-img4 animate4" src={plusOrange} alt="" />
            <img className="pt-img5 animate-wave" src={waveOrange} alt="" />
        </div>
    );
};

export default MainBanner;