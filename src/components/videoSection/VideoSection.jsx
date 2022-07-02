import React, { useState } from 'react';
import waveOrange from "../../assets/images/shap/wave-orange.png"
import circleSmall from "../../assets/images/shap/circle-small-blue.png"
import lineCircle from "../../assets/images/shap/line-circle-blue.png"
import squareDots from "../../assets/images/shap/square-dots-orange.png"
import squareBlue from "../../assets/images/shap/square-blue.png"
import ReactPlayer from 'react-player'
import { videoData } from './../../assets/data/videoData';
import { Link } from 'react-router-dom';
import { testimonialVideo } from '../../assets/data/testomonialVideo';

const playIcon = "P"

const VideoSection = () => {

    const [playVideo, setPlayVideo] = useState('https://youtu.be/S2d-Mvwg8eE')
    const [PlayTestimonial, setPlayTestimonial] = useState('https://www.youtube.com/shorts/yjNZlgH3Sjs')
    return (
        <React.Fragment>
            <section className="about-area">
                <div className="container">

                    <div className="heading-bx text-center">
                        {/* <h6 className="title-ext text-secondary">Video Gallery</h6> */}
                        <h2 className="title">Video Gallery</h2>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30">

                            <ReactPlayer url={playVideo} playIcon={playIcon} playing={false} width="90%" />

                        </div>
                        <div className="col-lg-6 mb-30">

                            {/* video gallery */}
                            <div className="row justify-content-center">
                                {
                                    videoData.length > 0 && videoData.map((video, index) => (
                                        <div className="col-sm-4 col-6">
                                            <div className="home_video_gallery img-thumbnail mt-2" onClick={() => setPlayVideo(video.videoLink)}>
                                                <img src={video.thumbnail} alt={video.title} className="img-fluid" />
                                                <h6>{video.title}</h6>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="text-end mt-3">
                                <Link class="btn btn-primary shadow p-2" to="/videos-gallery"> More <i class="fa-solid fa-angles-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="pt-img1 animate-wave" src={waveOrange} alt="" />
                <img className="pt-img2 animate2" src={circleSmall} alt="" />
                <img className="pt-img3 animate-rotate" src={lineCircle} alt="" />
                <img className="pt-img4 animate-wave" src={squareDots} alt="" />
                <img className="pt-img5 animate2" src={squareBlue} alt="" />
            </section>
            <section className="about-area mt-5">
                <div className="container">

                    <div className="heading-bx text-center">
                        {/* <h6 className="title-ext text-secondary">Video Gallery</h6> */}
                        <h2 className="title">Patients after Operation</h2>
                        <h4 className="bangla-title">(অপারেশনের পর রোগীদের অবস্থা)</h4>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30">

                            <ReactPlayer url={PlayTestimonial} playIcon={playIcon} playing={false} width="90%" />

                        </div>
                        <div className="col-lg-6 mb-30">

                            {/* video gallery */}
                            <div className="row justify-content-center">
                                {
                                    testimonialVideo.length > 0 && testimonialVideo.map((video, index) => (
                                        <div className="col-sm-4 col-6">
                                            <div className="home_video_gallery img-thumbnail mt-2" onClick={() => setPlayTestimonial(video.videoLink)}>
                                                <img src={video.thumbnail} alt={video.title} className="img-fluid" />
                                                <h6>{video.title}</h6>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="text-end mt-3">
                                <Link class="btn btn-primary shadow p-2" to="/videos-gallery"> More <i class="fa-solid fa-angles-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="pt-img1 animate-wave" src={waveOrange} alt="" />
                <img className="pt-img2 animate2" src={circleSmall} alt="" />
                <img className="pt-img3 animate-rotate" src={lineCircle} alt="" />
                <img className="pt-img4 animate-wave" src={squareDots} alt="" />
                <img className="pt-img5 animate2" src={squareBlue} alt="" />
            </section>
        </React.Fragment>
    );
};

export default VideoSection;