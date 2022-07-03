import React from 'react';
import { Link } from 'react-router-dom';
import shap1 from "../../assets/images/shap/wave-blue.png";
import shap2 from "../../assets/images/shap/circle-dots.png";
import shap3 from "../../assets/images/shap/plus-blue.png";
import facebook from "../../assets/images/social/facebook.png"
import youtube from "../../assets/images/social/1384060.png"
import visitingCard from "../../assets/images/appoinment-info/Business-Card2.png"
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
                                        <Link to="/"><img src={logo} alt="Brand Logo" style={{ width: "200px" }} /></Link>
                                    </div>
                                    <div className="ft-contact">


                                        {/* <div className="contact-bx">
                                            <div className="icon"><i class="fa-solid fa-phone"></i></div>
                                            <div className="contact-number">
                                                <h4 className="number">  <a href="tel:(+880)1961449755">01961449755</a></h4>
                                            </div>
                                        </div> */}
                                        <div className="contact-bx email mt-2">
                                            <div className="icon"><i class="fa-solid fa-paper-plane"></i></div>
                                            <div className="contact-number">
                                                <h4 className="number"><a href="mailto:kazidmc@gmail.com">  kazidmc@gmail.com </a></h4>
                                            </div>
                                        </div>

                                        <div>
                                            <img src={visitingCard} className="img-fluid img-thumbnail mt-3" alt="" />
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="widget footer_widget ml-50">
                                    <img src={medicalInfo} className="img-fluid" alt="" style={{ height: "400px" }} />

                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="widget footer_widget">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2749853445735!2d90.40749491449282!3d23.737571495184277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f4de15d5eb%3A0x35df10409c6ffeef!2sIslami%20Bank%20Central%20Hospital%2C%20Kakrail!5e0!3m2!1sen!2sbd!4v1655841357410!5m2!1sen!2sbd" className='border shadow' title="Neurosurgeon dr. atique" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="widget widget_form ms-3 d-none d-sm-block">

                                    <h3 className="footer-title">Site Map</h3>
                                    <ul>
                                        <li><Link to="/about"><span>About Dr. Atique</span></Link></li>
                                        <li><Link to="/services"><span>Treatments</span></Link></li>
                                        <li><Link to="/booking"><span>Appoinment</span></Link></li>
                                        <li><Link to="/blog-grid"><span>Blogs</span></Link></li>
                                        <li><Link to="/team"><span>Photo Gallery</span></Link></li>
                                        <li><Link to="/team"><span>Video Gallery</span></Link></li>
                                        <li><Link to="/team"><span>Cured Patients</span></Link></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="footer-social-link mx-3 mt-5 text-center mb-2">
                        <ul>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Neurosurgeondratique-100861652690269">
                                    <img src={facebook} alt="" />
                                </a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCTt7e2oBOpwI56ANOwQlKag">
                                <img src={youtube} alt="" />

                            </a></li>

                        </ul>
                    </div>
                    <div className="footer-bottom">

                        <div className="row">
                            <div className="col-12 text-center">
                                <p className="copyright-text">Copyright © {new Date().getFullYear()} || All rights reserved.  <span className="font-bold" style={{ fontWeight: 700 }}>IT Partner -
                                    <a href="https://abaacorp.com/" rel="noreferrer" target="_blank" className="text-secondary"> Abaacorp.com</a></span></p>
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