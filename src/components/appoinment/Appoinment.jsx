import React from 'react';
import trangleOrange from "../../assets/images/shap/trangle-orange.png"
import waveOrange from "../../assets/images/shap/wave-orange.png"
import waveBlue from "../../assets/images/shap/wave-blue.png"
import circleOrange from "../../assets/images/shap/circle-orange.png"
import chamberAddress from "../../assets/images/appoinment-info/Business-Card.png"
import { Link } from 'react-router-dom';
import { galleryData } from '../../assets/data/galleryData';

const Appoinment = () => {

    return (
        <section className="section-area account-wraper1">
            <div className="container-fluid">
                <div className="appointment-inner section-sp2 appoinment_section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-12">
                                <div className="appointment-form form-wraper">
                                    <h3 className="title">Book A Visit</h3>

                                    <div className="appoinment_content">
                                        <h6> To Book a Visit, please call chamber </h6>
                                        <h6 className='bangla-title'> (ডক্টর দেখাতে চেম্বারের নাম্বারে কল করুন) </h6>
                                        <div className="text-start appoinment_content_inner mt-5">
                                            {/* <p className='appointment-telephone'>
                                                <i class="fa-solid fa-phone"></i> <span>
                                                    01961449755
                                                </span>
                                               
                                            </p> */}
                                            <p className='location'>
                                                <i class="fa-solid fa-location-pin-lock"></i> Chamber Address : <br />
                                                <span > 30 Anjuman-e-Mofidul Islam Road, </span> <br />
                                                <span> Kakrail VIP Road, Dhaka-1000  </span>
                                            </p>
                                            <img className="img1 img-fluid img-thumbnail" src={chamberAddress} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-xl-7 col-lg-6 col-md-12">
                                <div className="appointment-thumb">
                                    <h6 className="title-ext text-primary text-center mb-3" style={{ fontSize: "2rem" }}>Photo Gallery</h6>
                                    <div className="row">
                                        {
                                            galleryData && galleryData.length > 0 && galleryData.map((item, index) => (
                                                <div className="col-md-4 col-sm-6 mt-1 p-1 appointment_gallery_img_card mt-2">
                                                    <img className="img1 img-fluid img-thumbnail" src={item.image} alt="" />
                                                </div>
                                            ))
                                        }

                                    </div>
                                    <div className="text-end mt-3">
                                        <Link to="/photo-gallery" class="btn btn-primary shadow p-2"> More <i class="fa-solid fa-angles-right"></i> </Link>
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