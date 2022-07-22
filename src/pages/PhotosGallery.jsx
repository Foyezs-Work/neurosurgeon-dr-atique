import React, { useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import mainBanner from "./../assets/images/banner/img1.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { handleNavbarPosition } from '../_globalRedux/Action/GlobalAction';
import trangleOrange from "./../assets/images/shap/trangle-orange.png"
import circleBlue from "./../assets/images/shap/chicle-blue-2.png"
import waveOrange from "./../assets/images/shap/wave-orange.png"
import { getPhotoGalleryList } from '../adminPanel/pages/photoGallery/_redux/Action/PhotoGalleryAction';
import { galleryPageData } from '../assets/data/galleryData';
// import { ImageViewer } from "react-image-viewer-dv"

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
        <MainLayout title="Photo Gallery" isLoading={false} loadingMessage="Gallery">
            <div className="page-content bg-white">
                <div class="banner-wraper">
                    <div class="page-banner"
                        style={{ backgroundImage: `url(${mainBanner})` }}
                    >
                        <div class="container">
                            <div class="page-banner-entry text-center">
                                <h1>Photo Gallery</h1>
                            </div>
                        </div>


                        <img class="pt-img1 animate-wave" src={trangleOrange} alt="" />
                        <img class="pt-img2 animate2" src={circleBlue} alt="" />
                        <img class="pt-img3 animate-rotate" src={waveOrange} alt="" />
                    </div>
                </div>


                <div className="section-area section-sp4">
                    <div className="container">
                        <div class="row justify-content-center">
                            {
                                galleryPageData.length > 0 && galleryPageData.map((item, index) => (
                                    <div className='col-md-3 col-sm-6 p-3'>
                                        <div className="img_card" key={index}>
                                            {/* <ImageViewer key={index + 1}>
                                                    <img src={item.url} alt={item.title} className="" />
                                                </ImageViewer> */}
                                            <img src={item.url} alt={item.title} className="" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
};

export default PhotosGallery; 