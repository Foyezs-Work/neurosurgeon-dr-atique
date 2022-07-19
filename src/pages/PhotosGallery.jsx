import React, { useState, useCallback, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import mainBanner from "./../assets/images/main-banner/bg1.jpg"
import FsLightbox from 'fslightbox-react';
import { useDispatch, useSelector } from 'react-redux';
import { handleNavbarPosition } from '../_globalRedux/Action/GlobalAction';

import DztImageGalleryComponent from "reactjs-image-gallery";
import trangleOrange from "./../assets/images/shap/trangle-orange.png"
import squareBlue from "./../assets/images/shap/square-blue.png"
import circleBlue from "./../assets/images/shap/chicle-blue-2.png"
import plusOrange from "./../assets/images/shap/plus-orange.png"
import waveOrange from "./../assets/images/shap/wave-orange.png"
import doctorImage from "./../assets/images/main-banner/doctor.png"
import { getPhotoGalleryList } from '../adminPanel/pages/photoGallery/_redux/Action/PhotoGalleryAction';
import { galleryPageData } from '../assets/data/galleryData';

const PhotosGallery = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = useDispatch();
    const { photoList, photoGallery, isLoading } = useSelector((state) => state.PhotoGalleryReducer);

    useEffect(() => {
        dispatch(handleNavbarPosition(false));
        dispatch(getPhotoGalleryList())
    }, [dispatch])


    return (
        <MainLayout title="Photo Gallery" isLoading={isLoading} loadingMessage="Gallery" >
            <div className="main-banner"
                style={{ backgroundImage: `url(${mainBanner})` }}
            >
                <div className="container inner-content">
                    <div className="row align-items-center">


                        <div className="col-lg-12 col-md-12 col-sm-12 py-5">
                            <h2 className="title text-center">Photo Gallery</h2>
                            <DztImageGalleryComponent images={galleryPageData} />

                        </div>
                    </div>
                </div>

                <img className="pt-img3 animate3" src={circleBlue} alt="" />
                <img className="pt-img1 animate1" src={trangleOrange} alt="" />
                <img className="pt-img2 animate2" src={squareBlue} alt="" />
                <img className="pt-img3 animate3" src={circleBlue} alt="" />
                {/* <img className="pt-img4 animate4" src={plusOrange} alt="" /> */}
                <img className="pt-img5 animate-wave" src={waveOrange} alt="" />
            </div>
        </MainLayout >
    );
};

export default PhotosGallery; 