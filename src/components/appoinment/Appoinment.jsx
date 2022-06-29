import React from 'react';
import women from "../../assets/images/appoinment/women.png"
import map from "../../assets/images/appoinment/map-pin.png"
import setting from "../../assets/images/appoinment/setting.png"
import check from "../../assets/images/appoinment/check.png"
import chat from "../../assets/images/appoinment/chat.png"

import trangleOrange from "../../assets/images/shap/trangle-orange.png"
import waveOrange from "../../assets/images/shap/wave-orange.png"
import waveBlue from "../../assets/images/shap/wave-blue.png"
import circleOrange from "../../assets/images/shap/circle-orange.png"
import chamberAddress from "../../assets/images/appoinment/ChamberAddress.jpeg"


import inHospital1 from "../../assets/images/in-hospital/in-hospital (2).jpg"
import inHospital2 from "../../assets/images/in-hospital/in-hospital (1).jpeg"
import inHospital3 from "../../assets/images/in-hospital/in-hospital (3).jpg"
import inHospital4 from "../../assets/images/gallery/Headshot.jpeg"
import inHospital5 from "../../assets/images/gallery/Political leader of gopalgong also get relieved from tumor by the surgery of Dr.Atique.jpg"
import inHospital6 from "../../assets/images/gallery/Seminar 1.jpg"
import inHospital7 from "../../assets/images/gallery/Seminar 2.jpg"
import inHospital8 from "../../assets/images/gallery/Seminar 3.jpg"

import { Link } from 'react-router-dom';

const Appoinment = () => {

    return (
        <section className="section-area account-wraper1">
            <div className="container-fluid">
                <div className="appointment-inner section-sp2 appoinment_section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-6">
                                <div className="appointment-form form-wraper">
                                    <h3 className="title">Book A Visit</h3>

                                    <div className="appoinment_content">
                                        <h6> To Book a Visit, please call chamber </h6>
                                        <h6 style={{ fontSize: "16px" }}> (ডক্টর দেখাতে চেম্বারের নাম্বারে কল করুন) </h6>
                                        <div className="text-start appoinment_content_inner mt-5">
                                            <p>
                                                <i class="fa-solid fa-phone"></i> <span style={{ fontSize: "22px" }}>
                                                    01961449755
                                                </span>
                                                <span>

                                                    {/* <a href="tel:(+880)1915449083">  01915449083 </a> */}
                                                    {/* <a href="tel:(+880)1915449083">  01915449083 </a> */}
                                                </span>
                                            </p>
                                            <p className='location' style={{ fontSize: "1.2rem" }}>
                                                <i class="fa-solid fa-location-pin-lock"></i> Chamber Address : <br />
                                                <span style={{ marginLeft: "3rem" }}> 30 Anjuman-e-Mofidul Islam Road, </span> <br />
                                                <span style={{ marginLeft: "3rem" }}> Kakrail VIP Road, Dhaka-1000  </span>
                                            </p>
                                            <img className="img1 img-fluid img-thumbnail" src={chamberAddress} alt="" />
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>

                            <div className="col-xl-7 col-lg-6 col-md-6">
                                <div className="appointment-thumb">
                                    <h6 className="title-ext text-primary text-center mb-3" style={{ fontSize: "2rem" }}>Photo Gallery</h6>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital1} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital4} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital6} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital5} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital7} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital2} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital4} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital3} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital1} alt="" />
                                        </div>
                                        {/* <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital8} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital2} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital3} alt="" />
                                        </div> */}
                                    </div>
                                    <div className="text-end mt-3">
                                        <Link to="/photos-gallery" class="btn btn-primary shadow p-2"> More <i class="fa-solid fa-angles-right"></i> </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <img className="pt-img1 animate1" src={trangleOrange} alt="" />
                    <img className="pt-img2 animate-wave" src={waveOrange} alt="" />
                    <img className="pt-img3 animate-wave" src={waveBlue} alt="" />
                    <img className="pt-img4 animate2" src={circleOrange} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Appoinment;