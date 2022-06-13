import React from 'react';
import circleOrange from "../../assets/images/shap/circle-orange.png"
import plusOrange from "../../assets/images/shap/plus-orange.png"
import cirlceDots from "../../assets/images/shap/circle-dots.png"

const AppoinmentProcess = () => {

    return (
        <section class="section-area section-sp5 work-area our_progress">
            <div class="container-sm">
                <div class="heading-bx text-center">
                    <h6 class="title-ext text-secondary">Working Process</h6>
                    <h2 class="title">How we works?</h2>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-sm-6 mb-30">
                        <div class="work-bx">
                            <div class="work-num-bx">01</div>
                            <div class="work-content">
                                <h5 class="title text-secondary mb-10">Make Appointmnet</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            </div>
                            <a href="booking.html" class="btn btn-primary light">View More <i class="btn-icon-bx fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-30">
                        <div class="work-bx active">
                            <div class="work-num-bx">02</div>
                            <div class="work-content">
                                <h5 class="title text-secondary mb-10">Take Treatment</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            </div>
                            <a href="services.html" class="btn btn-primary light">View More <i class="btn-icon-bx fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-30">
                        <div class="work-bx">
                            <div class="work-num-bx">03</div>
                            <div class="work-content">
                                <h5 class="title text-secondary mb-10">Registration</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            </div>
                            <a href="contact-us.html" class="btn btn-primary light">View More <i class="btn-icon-bx fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <img class="pt-img1 animate1" src={circleOrange} alt="" />
            <img class="pt-img2 animate2" src={plusOrange} alt="" />
            <img class="pt-img3 animate3" src={cirlceDots} alt="" />
        </section>
    );
};

export default AppoinmentProcess;