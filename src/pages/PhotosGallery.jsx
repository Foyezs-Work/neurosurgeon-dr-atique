import React, { useState, useCallback, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import mainBanner from "./../assets/images/main-banner/bg1.jpg"
import FsLightbox from 'fslightbox-react';
import { useDispatch } from 'react-redux';
import { handleNavbarPosition } from '../_globalRedux/Action/GlobalAction';

import DztImageGalleryComponent from "reactjs-image-gallery";
import circleBlue from "./../assets/images/shap/chicle-blue-2.png"


const PhotosGallery = () => {

    const dispatch = useDispatch();
    const images = [
        "https://placekitten.com/1500/500",
        "https://placekitten.com/4000/3000",
        "https://placekitten.com/800/1200",
        "https://placekitten.com/1500/1500"
    ];

    var data = [
        {
            url:
                "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "Kayak",
            thumbUrl:
                "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
            url:
                "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "Cyclist competition",
            thumbUrl:
                "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
            url:
                "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "Surfer in action",
            thumbUrl:
                "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
            url:
                "https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80",
            title: "Drops",
            thumbUrl:
                "https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80"
        },

        {
            url:
                "https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "Bird",
            thumbUrl:
                "https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
            url:
                "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
            title: "Blue river",
            thumbUrl:
                "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
            url:
                "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
            title: "Mountains",
            thumbUrl:
                "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        }
    ];


    // const [lightboxController, setLightboxController] = useState({
    //     toggler: false,
    //     slide: 1
    // });

    // const openLightboxOnSlide = (number) => {
    //     setLightboxController({
    //         toggler: !lightboxController.toggler,
    //         slide: number
    //     });
    //     dispatch(handleNavbarPosition(false));
    // }

    useEffect(() => {
        dispatch(handleNavbarPosition(false));
    }, [dispatch])
    return (
        <MainLayout title="Photo Gallery">
            <div className="main-banner"
                style={{ backgroundImage: `url(${mainBanner})` }}
            >
                <div className="container inner-content">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h6 className="title-ext text-primary">I Provide All Health Care Solution</h6>
                            <DztImageGalleryComponent images={data} />
                            {/* <h1>Protect Your Health And Take Care To Of Your Health</h1>
                            <a href="about-us" className="btn btn-secondary btn-lg shadow">Read More</a> */}
                        </div>
                    </div>
                </div>
                {/* <div className="container inner-content">
                    <h2>Photos Gallery</h2>
                    <DztImageGalleryComponent images={data} />
                </div> */}

                <img className="pt-img3 animate3" src={circleBlue} alt="" />
            </div>
        </MainLayout>
    );
};

export default PhotosGallery; 