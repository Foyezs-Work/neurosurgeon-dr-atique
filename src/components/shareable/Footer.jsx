import React from 'react';
import { Link } from 'react-router-dom';
import shap1 from "../../assets/images/shap/wave-blue.png";
import shap2 from "../../assets/images/shap/circle-dots.png";
import shap3 from "../../assets/images/shap/plus-blue.png";

import facebook from "../../assets/images/social/facebook.png"
import twitter from "../../assets/images/social/twitter.png"
import instagram from "../../assets/images/social/instagram.png"
import linkedIn from "../../assets/images/social/linkedin.png"
import logo from "./../../assets/images/logo.png"
import medicalInfo from "../../assets/images/banner/footer_img.jpg"

const Footer = () => {

    return (
        <React.Fragment>
            <footer className="footer" >
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="widget widget_info">
                                    <div className="footer-logo">
                                        <a href="index"><img src={logo} alt="" /></a>
                                    </div>
                                    <div className="ft-contact">


                                        <div className="contact-bx">
                                            <div className="icon"><i class="fa-solid fa-phone"></i></div>
                                            <div className="contact-number">
                                                <h4 className="number">  <a href="tel:(+880)1915449083">+880 191 544 9083</a></h4>
                                            </div>
                                        </div>
                                        <div className="contact-bx email mt-2">
                                            <div className="icon"><i class="fa-solid fa-paper-plane"></i></div>
                                            <div className="contact-number">
                                                <h4 className="number"><a href="mailto:kazidmc@gmail.com">  kazidmc@gmail.com </a></h4>
                                            </div>
                                        </div>

                                        <div className="footer-social-link mx-3 mt-5">
                                            <ul>
                                                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
                                                    <img src={facebook} alt="" />
                                                </a></li>
                                                <li><a target="_blank" rel="noreferrer" href="https://twitter.com/">
                                                    <img src={twitter} alt="" />
                                                </a></li>
                                                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
                                                    <img src={instagram} alt="" />
                                                </a></li>
                                                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                                                    <img src={linkedIn} alt="" />
                                                </a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-6">
                                <div className="widget footer_widget ml-50">
                                    <h3 className="footer-title">Quick Links</h3>
                                    <ul>
                                        <li><Link to="/about"><span>About Us</span></Link></li>
                                        <li><Link to="/services"><span>Services</span></Link></li>
                                        <li><Link to="/booking"><span>Booking</span></Link></li>
                                        <li><Link to="/faq"><span>Faq's</span></Link></li>
                                        <li><Link to="/blog-grid"><span>Blogs</span></Link></li>
                                        <li><Link to="/team"><span>Out Team</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-6">
                                <div className="widget footer_widget">
                                    <h3 className="footer-title">Our Service</h3>
                                    <ul>
                                        <li><Link to="/service-detail"><span>Dental Care</span></Link></li>
                                        <li><Link to="/service-detail"><span>Cardiac Clinic</span></Link></li>
                                        <li><Link to="/service-detail"><span>Massege Therapy</span></Link></li>
                                        <li><Link to="/service-detail"><span>Cardiology</span></Link></li>
                                        <li><Link to="/service-detail"><span>Precise Diagnosis</span></Link></li>
                                        <li><Link to="/service-detail"><span>Abmbulance Services</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="widget widget_form">
                                    {/* <h3 className="footer-title">Location</h3>
                                    <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2749853445735!2d90.40749491449282!3d23.737571495184277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f4de15d5eb%3A0x35df10409c6ffeef!2sIslami%20Bank%20Central%20Hospital%2C%20Kakrail!5e0!3m2!1sen!2sbd!4v1655841357410!5m2!1sen!2sbd" className='border shadow' title="Neurosurgeon dr. atique" width="100%" height="230" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div> */}
                                    <img src={medicalInfo} className="img-thumbnail" alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className="copyright-text">Copyright © {new Date().getFullYear()} || Design &amp; Developed by
                                    <a href="https://solutiongrid.com/" rel="noreferrer" target="_blank" className="text-secondary"> Solution Grid</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <img className="pt-img1 animate-wave" src={shap1} alt="" />
                <img className="pt-img2 animate1" src={shap2} alt="" />
                <img className="pt-img3 animate-rotate" src={shap3} alt="" />
                <img className="pt-img4 animate-wave" src={shap1} alt="" />
            </footer>
            {/* <button class="back-to-top fa fa-chevron-up" style={{ display: "inline-block" }}></button> */}
        </React.Fragment>
    );
};

export default Footer;