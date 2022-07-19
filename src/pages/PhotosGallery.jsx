import React, { useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import mainBanner from "./../assets/images/main-banner/bg1.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { handleNavbarPosition } from '../_globalRedux/Action/GlobalAction';
import trangleOrange from "./../assets/images/shap/trangle-orange.png"
import squareBlue from "./../assets/images/shap/square-blue.png"
import circleBlue from "./../assets/images/shap/chicle-blue-2.png"
import waveOrange from "./../assets/images/shap/wave-orange.png"
import { getPhotoGalleryList } from '../adminPanel/pages/photoGallery/_redux/Action/PhotoGalleryAction';
import { galleryPageData } from '../assets/data/galleryData';
import { ImageViewer } from "react-image-viewer-dv"

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
                            <div className="row custom_section_padding">

                                {
                                    galleryPageData.length > 0 && galleryPageData.map((item, index) => (
                                        <div className='col-md-3 p-3'>
                                            <div className="img_card">
                                                <ImageViewer key={index + 1}>
                                                    <img src={item.url} alt={item.title} className="img-fluid" />
                                                </ImageViewer>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>

                <img className="pt-img3 animate3" src={circleBlue} alt="" />
                <img className="pt-img1 animate1" src={trangleOrange} alt="" />
                <img className="pt-img2 animate2" src={squareBlue} alt="" />
                <img className="pt-img3 animate3" src={circleBlue} alt="" />
                <img className="pt-img5 animate-wave" src={waveOrange} alt="" />
            </div>
        </MainLayout >
    );
};

export default PhotosGallery; 