import React from 'react';
import circleOrange from "../../assets/images/shap/circle-orange.png"
import plusOrange from "../../assets/images/shap/plus-orange.png"
import cirlceDots from "../../assets/images/shap/circle-dots.png"

const AppoinmentProcess = () => {

    return (
        <section className="section-area section-sp5 work-area our_progress">
            <div className="container-sm">
                <div className="heading-bx text-center mt-5">
                    <h2 className="title">What a patient needs to do</h2>
                    <h6 className="title-ext text-secondary">রোগীর কি করণীয়</h6>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 mb-30">
                        <div className="work-bx">
                            <div className="work-num-bx"> Step - 1</div>
                            <div className="work-content">
                                <h5 className="title text-secondary mb-10">Make Appointment</h5>
                                <p>কল করে এ্যাপইন্টমেন্ট করুন</p>
                            </div>
                            {/* <a href="booking" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-30">
                        <div className="work-bx active">
                            <div className="work-num-bx"> Step - 2</div>
                            <div className="work-content">
                                <h5 className="title text-secondary mb-10">See the doctor</h5>
                                <p>ডক্টরের সাথে সাক্ষাৎ করুন</p>
                            </div>
                            {/* <a href="services" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></a> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-30">
                        <div className="work-bx">
                            <div className="work-num-bx"> Step - 3</div>
                            <div className="work-content">
                                <h5 className="title text-secondary mb-10"> Take Treatment</h5>
                                <p>ডক্টরের পরামর্শ অনুযায়ী চিকিৎসা নিন</p>
                            </div>
                            {/* <a href="contact-us" className="btn btn-primary light">View More <i className="btn-icon-bx fas fa-chevron-right"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
            <img className="pt-img1 animate1" src={circleOrange} alt="" />
            <img className="pt-img2 animate2" src={plusOrange} alt="" />
            <img className="pt-img3 animate3" src={cirlceDots} alt="" />
        </section>
    );
};

export default AppoinmentProcess;