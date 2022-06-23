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
import { Carousel } from 'react-responsive-carousel';


import inHospital1 from "../../assets/images/in-hospital/in-hospital (2).jpg"
import inHospital2 from "../../assets/images/in-hospital/in-hospital (1).jpeg"
import inHospital3 from "../../assets/images/in-hospital/in-hospital (3).jpg"
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
                                        <div className="text-start appoinment_content_inner mt-5">
                                            <p>
                                                <i class="fa-solid fa-phone"></i> Call :
                                                <span>
                                                    <a href="tel:(+880)1915449083">  01915449083 </a>
                                                </span>
                                            </p>
                                            <p className='location'>
                                                <i class="fa-solid fa-location-pin-lock"></i> Chamber Address :
                                                <span> 30 Anjuman-e-Mofidul Islam Road, Kakrail VIP Road, Dhaka-1000, Bangladesh.</span>
                                            </p>
                                        </div>
                                    </div>
                                    {/* <form action="#">
                                        <div className="form-group">
                                            <div className="dropdown bootstrap-select form-select"><select className="form-select">
                                                <option selected="">Selecty Department</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select><button type="button" tabIndex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Selecty Department"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Selecty Department</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                        </div>
                                        <div className="form-group">
                                            <div className="dropdown bootstrap-select form-select"><select className="form-select">
                                                <option selected="">Select Doctor</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select><button type="button" tabIndex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Select Doctor"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select Doctor</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-2" tabIndex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" placeholder="Phone Numbers" />
                                        </div>
                                        <div className="form-group">
                                            <input type="date" className="form-control" />
                                        </div>
                                        <button type="submit" className="btn btn-secondary btn-lg">Appointment Now</button>
                                    </form> */}
                                </div>
                            </div>

                            <div className="col-xl-7 col-lg-6 col-md-6">
                                <div className="appointment-thumb">
                                    <h6 className="title-ext text-primary text-center mb-3">Let's Me Know</h6>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital1} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital2} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital3} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital1} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital2} alt="" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="img1 img-fluid img-thumbnail" src={inHospital3} alt="" />
                                        </div>
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