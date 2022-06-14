import React from 'react';
import { Link } from 'react-router-dom';
import shap1 from "../../assets/images/shap/wave-blue.png";
import shap2 from "../../assets/images/shap/circle-dots.png";
import shap3 from "../../assets/images/shap/plus-blue.png";

const Footer = () => {

    return (
        <footer className="footer" >
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="widget widget_info">
                                <div className="footer-logo">
                                    <a href="index.html"><img src="images/logo.png" alt="" /></a>
                                </div>
                                <div className="ft-contact">
                                    <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                                    <div className="contact-bx">
                                        <div className="icon"><i className="fas fa-phone-alt"></i></div>
                                        <div className="contact-number">
                                            <span>Contact Us</span>
                                            <h4 className="number">+01 123 456 7890</h4>
                                        </div>
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
                                <h3 className="footer-title">Subcribe</h3>
                                <form className="subscribe-form subscription-form mb-30" action="script/mailchamp.php" method="post">
                                    <div className="ajax-message"></div>
                                    <div className="input-group">
                                        <input name="email" required="required" className="form-control" placeholder="Email Address" type="email" />
                                    </div>
                                    <button name="submit" value="Submit" type="submit" className="btn btn-secondary shadow w-100">Subscribe Now</button>
                                </form>
                                <div className="footer-social-link">
                                    <ul>
                                        <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src="images/social/facebook.png" alt="" /></a></li>
                                        <li><a target="_blank" rel="noreferrer" href="https://twitter.com/"><img src="images/social/twitter.png" alt="" /></a></li>
                                        <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src="images/social/instagram.png" alt="" /></a></li>
                                        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><img src="images/social/linkedin.png" alt="" /></a></li>
                                    </ul>
                                </div>
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
    );
};

export default Footer;