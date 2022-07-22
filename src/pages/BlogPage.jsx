import React from 'react';
import MainLayout from '../layout/MainLayout';
import waveBlue from "./../assets/images/shap/wave-blue.png"
import circleDots from "./../assets/images/shap/circle-dots.png"
import plusBlue from "./../assets/images/shap/plus-blue.png"
import mainBanner from "./../assets/images/banner/img1.jpg"
import { blogData } from './../assets/data/BlogData';

const BlogPage = () => {
    return (
        <MainLayout title="Blog">
            <div className="page-content bg-white">
                <div class="banner-wraper">
                    <div class="page-banner"
                        style={{ backgroundImage: `url(${mainBanner})` }}
                    >
                        <div class="container">
                            <div class="page-banner-entry text-center">
                                <h1>Blog</h1>
                            </div>
                        </div>


                        <img class="pt-img1 animate-wave" src={waveBlue} alt="" />
                        <img class="pt-img2 animate2" src={circleDots} alt="" />
                        <img class="pt-img3 animate-rotate" src={plusBlue} alt="" />
                    </div>
                </div>


                <div className="section-area section-sp4">
                    <div className="container">
                        <div class="row">
                            {
                                blogData.length > 0 && blogData.map((blog, index) => (
                                    <div class="col-xl-4 col-md-6" key={blog.id + index}>
                                        <div class="blog-card mb-30">
                                            <div class="post-media">
                                                <a href="blog-details.html">
                                                    <img src={blog.img} alt={blog.title} style={{height: "220px"}} />
                                                </a>
                                            </div>
                                            <div class="post-info">
                                                <ul class="post-meta">
                                                    <li class="author">
                                                        <a href="/blog-details.html">
                                                            <img src={blog.avatar} alt={blog.author} /> {blog.author}
                                                        </a>
                                                    </li>
                                                    <li class="date"><i class="far fa-calendar-alt"></i> {blog.date} </li>
                                                </ul>
                                                <h4 class="post-title"><a href="blog-details.html">{blog.title}</a></h4>
                                                <a href="blog-details.html" class="btn btn-outline-primary btn-sm">Read More <i class="btn-icon-bx fas fa-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* <div class="row">
                            <div class="col-lg-12">
                                <div class="pagination-bx text-center mb-30 clearfix">
                                    <ul class="pagination">
                                        <li class="previous">
                                            <a href="/">Prev</a>
                                        </li>
                                        <li class="active">
                                            <a href="/">1</a>
                                        </li>
                                        <li>
                                            <a href="/">2</a>
                                        </li>
                                        <li>
                                            <a href="/">3</a>
                                        </li>
                                        <li class="next">
                                            <a href="/">Next</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>

            </div>
        </MainLayout>
    );
};

export default BlogPage;