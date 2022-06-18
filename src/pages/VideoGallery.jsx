import React, { useState, useCallback, useEffect } from 'react';
import { Player } from 'video-react';

import MainLayout from '../layout/MainLayout';
import mainBanner from "./../assets/images/main-banner/bg1.jpg"
import Modal from 'react-bootstrap/Modal';
import trangleOrange from "./../assets/images/shap/trangle-orange.png"
import squareBlue from "./../assets/images/shap/square-blue.png"
import circleBlue from "./../assets/images/shap/chicle-blue-2.png"
import waveOrange from "./../assets/images/shap/wave-orange.png"
import SimpleModal from '../components/master/SimpleModal';
import { videoData } from '../assets/data/videoData';
import ReactPlayer from 'react-player'

const VideoGallery = () => {
    const [show, setShow] = useState(false);
    const [video, setVideo] = useState("")

    const handleClose = () => setShow(false);

    console.log('video :>> ', video);
    const handleShow = (id) => {
        const findVideo = videoData.find((item) => item.id === id);
        setVideo(findVideo)
        setShow(true);
    };

    return (
        <MainLayout title="Videos Gallery">
            <div className="main-banner"
                style={{ backgroundImage: `url(${mainBanner})` }}
            >
                <div className="container inner-content">
                    <h2 className="title text-center">Videos Gallery</h2>
                    <div className="row align-items-center justify-content-center">
                        {
                            videoData.length > 0 && videoData.map((item, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <div className="video_thumbnail mt-2">
                                        <div className="play_btn" onClick={() => handleShow(item.id)}><i class="fa-solid fa-play"></i></div>
                                        <img src={item.thumbnail} alt={item.title} className="img-fluid" />
                                        <h5 className="video_title text-center">{item.title} </h5>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <button onClick={() => handleShow()}>Open Model</button>



                </div>

                <img className="pt-img3 animate3" src={circleBlue} alt="" />
                <img className="pt-img1 animate1" src={trangleOrange} alt="" />
                <img className="pt-img2 animate2" src={squareBlue} alt="" />
                <img className="pt-img3 animate3" src={circleBlue} alt="" />
                <img className="pt-img5 animate-wave" src={waveOrange} alt="" />
            </div>
            <SimpleModal
                size="xl"
                show={show}
                handleClose={handleClose}
            >
                <h2>Image Gallery</h2>
                <div class="video-container">
                    {/* <video src={video.videeLink} controls></video> */}
                    {/* <iframe
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                        src={video.videoLink}
                    /> {" "} */}
                    {
                        video && (
                            // <img src={video.thumbnail} alt="" />
                            // <ReactPlayer url={video.videoLink} />
                            <ReactPlayer
                                url={video.videoLink}
                                controls
                                width="100%"
                                playIcon
                                fallback="Loading..."
                                //    light={video.thumbnail} 
                                playing={true}
                            />
                            // <Player
                            //     playsInline
                            //     poster={video.thumbnail}
                            //     src={video.videoLink}
                            //     // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            // />

                        )
                    }

                </div>
            </SimpleModal>
        </MainLayout >
    );
};

export default VideoGallery;