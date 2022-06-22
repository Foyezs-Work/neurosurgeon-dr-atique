import React from 'react';
import MainLayout from '../layout/MainLayout';
import trangleOrange from "../assets/images/shap/trangle-orange.png"
import waveOrange from "../assets/images/shap/wave-orange.png"
import waveBlue from "../assets/images/shap/wave-blue.png"
import circleOrange from "../assets/images/shap/circle-orange.png"

const LoginPage = () => {
    return (
        <MainLayout>
            <section className="section-area account-wraper1">
                <div className="container mt-5" style={{paddingTop: "100px"}}>
                    <div className="appointment-inner section-sp2 appoinment_section">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-xl-5 col-lg-6 col-md-6">
                                    <div className="appointment-form form-wraper">
                                        <h3 className="title">Login</h3>
                                        <form action="#">
                                            
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Password" />
                                            </div>
                                         
                                            <button type="submit" className="btn btn-secondary btn-lg">Login</button>
                                        </form>
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
        </MainLayout>
    );
};

export default LoginPage;