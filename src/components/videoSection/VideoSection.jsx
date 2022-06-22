import React, { useState } from 'react';
import waveOrange from "../../assets/images/shap/wave-orange.png"
import circleSmall from "../../assets/images/shap/circle-small-blue.png"
import lineCircle from "../../assets/images/shap/line-circle-blue.png"
import squareDots from "../../assets/images/shap/square-dots-orange.png"
import squareBlue from "../../assets/images/shap/square-blue.png"
import ReactPlayer from 'react-player'
import { videoData } from './../../assets/data/videoData';
import { Link } from 'react-router-dom';

const playIcon = "P"

const VideoSection = () => {

    const [playVideo, setPlayVideo] = useState('https://www.youtube.com/watch?v=ysz5S6PUM-U')
    return (
        <section className="section-sp1 about-area">
            <div className="container">

                <div className="heading-bx text-center">
                    <h6 className="title-ext text-secondary">Video Gallery</h6>
                    <h2 className="title">Some My Works</h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 mb-30">

                        <ReactPlayer url={playVideo} playIcon={playIcon} playing={true} width="90%" />

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
                            <Link class="btn btn-primary shadow p-2" to="/videos-gallery">Read More <i class="fa-solid fa-angles-right"></i> </Link>
                        </div>
                    </div>
                </div>
                0            </div>
            <img className="pt-img1 animate-wave" src={waveOrange} alt="" />
            <img className="pt-img2 animate2" src={circleSmall} alt="" />
            <img className="pt-img3 animate-rotate" src={lineCircle} alt="" />
            <img className="pt-img4 animate-wave" src={squareDots} alt="" />
            <img className="pt-img5 animate2" src={squareBlue} alt="" />
        </section>
    );
};

export default VideoSection;