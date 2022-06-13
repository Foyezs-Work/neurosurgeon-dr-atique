import React from 'react';
import mainBanner from "./../../assets/images/main-banner/bg1.jpg"
import trangleOrange from "./../../assets/images/shap/trangle-orange.png"
import squareBlue from "./../../assets/images/shap/square-blue.png"
import circleBlue from "./../../assets/images/shap/chicle-blue-2.png"
import plusOrange from "./../../assets/images/shap/plus-orange.png"
import waveOrange from "./../../assets/images/shap/wave-orange.png"
import doctorImage from "./../../assets/images/main-banner/doctor.png"

const MainBanner = () => {
    return (
        <div className="main-banner"
            style={{ backgroundImage: `url(${mainBanner})` }}
        >
            <div className="container inner-content">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6 col-sm-7">
                        <h6 className="title-ext text-primary">I Provide All Health Care Solution</h6>
                        <h1>Protect Your Health And Take Care To Of Your Health</h1>
                        <a href="about-us.html" className="btn btn-secondary btn-lg shadow">Read More</a>
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