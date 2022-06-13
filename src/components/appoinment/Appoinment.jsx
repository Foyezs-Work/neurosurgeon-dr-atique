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


const Appoinment = () => {

    return (
        <section className="section-area account-wraper1">
            <div className="container-fluid">
                <div className="appointment-inner section-sp2 appoinment_section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-6">
                                <div className="appointment-form form-wraper">
                                    <h3 className="title">Book Appointment</h3>
                                    <form action="#">
                                        <div className="form-group">
                                            <div className="dropdown bootstrap-select form-select"><select className="form-select">
                                                <option selected="">Selecty Department</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select><button type="button" tabindex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Selecty Department"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Selecty Department</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabindex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                        </div>
                                        <div className="form-group">
                                            <div className="dropdown bootstrap-select form-select"><select className="form-select">
                                                <option selected="">Select Doctor</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select><button type="button" tabindex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Select Doctor"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select Doctor</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-2" tabindex="-1"><ul className="dropdown-menu inner show" role="presentation"></ul></div></div></div>
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
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-6">
                                <div className="appointment-thumb">
                                    <img src="images/appointment/mobile.png" alt="" />
                                    <div className="images-group">
                                        <img className="img1" src={women} alt="" />
                                        <img className="img2" src={map} alt="" />
                                        <img className="img3" src={setting} alt="" />
                                        <img className="img4" src={check} alt="" />
                                        <img className="img5" src={chat} alt="" />
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