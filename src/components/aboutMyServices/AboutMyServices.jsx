import React from 'react';
import waveOrange from "../../assets/images/shap/wave-orange.png"
import circleSmall from "../../assets/images/shap/circle-small-blue.png"
import lineCircle from "../../assets/images/shap/line-circle-blue.png"
import squareDots from "../../assets/images/shap/square-dots-orange.png"
import squareBlue from "../../assets/images/shap/square-blue.png"
import inHospital1 from "../../assets/images/in-hospital/in-hospital (2).jpg"
import inHospital2 from "../../assets/images/in-hospital/in-hospital (1).jpeg"
import inHospital3 from "../../assets/images/in-hospital/in-hospital (3).jpg"

const AboutMyServices = () => {

    return (
        <section className="pt-3 about-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-30">
                        <div className="about-thumb-area">
                            <ul>
                                <li><img className="about-thumb1" src={inHospital1} alt="" /></li>
                                <li><img className="about-thumb2" src={inHospital2} alt="" /></li>
                                <li><img className="about-thumb3" src={inHospital3} alt="" /></li>
                                <li><div className="exp-bx"> <span className="over">Over </span> <br /> 1000 <span className="successfull">successful Operations <br /> & counting</span></div></li>
                                {/* <li><div className="exp-bx"> <span style={{fontSize: "40px", textAlign:"left"}}>Over </span> <br /> 1000 <span>successful Operations & counting</span></div></li> */}
                                {/* <li><div className="exp-bx">8<span>Year Experience</span></div></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                        <h3 className="title dr-name-title">About Neurosurgeon Dr. Atiqul Islam </h3>

                        <div className="heading-bx">
                            {/* <h6 className="title-ext text-secondary">About Me</h6> */}
                            <p className="dr-details">Dr. K. M. Atiqul Islam is a dynamic and reliable Neurosurgeon currently serving at National Institute of Neuroscience & Hospital (Agargaon) as well as Islami Bank Central Hospital (Kakrail). He has many successful operations under his belt.</p>
                        </div>
                        <div className="row">

                            <div className="col-lg-12 col-sm-12 mb-30 mb-sm-20">
                                <div className="feature-container feature-bx1 feature2">
                                    <div className="icon-md">
                                        <span className="icon-cell">
                                            <svg enableBackground="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m351.524 124.49h-37.907v-37.907h-44.657v37.907h-37.906v44.657h37.906v37.907h44.657v-37.907h37.907z" fill="#a4fcc4"></path>
                                                <path d="m291.289 279.415c73.114 0 132.597-59.482 132.597-132.597s-59.483-132.596-132.597-132.596-132.598 59.482-132.598 132.596 59.484 132.597 132.598 132.597zm0-245.193c62.086 0 112.597 50.511 112.597 112.597s-50.511 112.597-112.597 112.597c-62.087 0-112.598-50.511-112.598-112.597s50.511-112.597 112.598-112.597z"></path>
                                                <path d="m502 267.736c-32.668 0-59.245 26.577-59.245 59.245v13.605h-240.266v-19.048c0-23.625-19.221-42.846-42.846-42.846h-90.398v-17.584c0-32.668-26.577-59.245-59.245-59.245-5.522 0-10 4.478-10 10v275.914c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-39.327h373.51v39.327c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-210.041c0-5.522-4.478-10-10-10zm-342.356 30.957c12.598 0 22.846 10.249 22.846 22.846v19.048h-113.245v-41.894zm-110.399 179.085h-29.245v-254.623c16.812 4.434 29.245 19.77 29.245 37.954zm20-49.327v-67.864h373.51v67.864zm422.755 49.327h-29.245v-150.797c0-18.185 12.434-33.521 29.245-37.954z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="ttr-title">Need an appointment ? <br />
                                            {/* Call 01961449755 */}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                                <div className="feature-container feature-bx1 feature3">
                                    <div className="icon-md">
                                        <span className="icon-cell">
                                            <svg enableBackground="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m397.886 191.161c-3.545-4.235-9.852-4.797-14.087-1.252-4.235 3.544-4.797 9.851-1.253 14.086 26.684 31.893 41.165 72.339 40.775 113.888-.886 94.681-79.215 172.782-174.608 174.1-48.125.666-93.326-17.479-127.401-51.087-33.708-33.246-52.272-77.526-52.272-124.685 0-59.98 30.361-115.236 81.216-147.809 51.27-32.838 79.187-66.186 93.348-111.507l2.581-8.26 2.58 8.257c9.333 29.869 25.53 55.364 49.516 77.939 4.02 3.786 10.35 3.593 14.136-.428 3.785-4.021 3.594-10.351-.429-14.136-21.713-20.438-35.736-42.471-44.133-69.341l-12.125-38.802c-1.305-4.175-5.171-7.018-9.545-7.018s-8.24 2.843-9.545 7.018l-12.126 38.807c-12.639 40.45-38.072 70.545-85.045 100.63-56.624 36.268-90.429 97.819-90.429 164.65 0 52.553 20.679 101.891 58.228 138.924 37.248 36.736 86.47 56.867 138.888 56.865.941 0 1.891-.006 2.833-.02 51.527-.712 100.087-21.236 136.733-57.792 36.664-36.573 57.12-84.914 57.6-136.118.432-46.301-15.704-91.371-45.436-126.909z"></path>
                                                <path d="m279.576 280.012v-29.712c0-5.523-4.478-10-10-10h-46.783c-5.522 0-10 4.477-10 10v29.712h-29.711c-5.522 0-10 4.477-10 10v46.783c0 5.523 4.478 10 10 10h29.711v29.711c0 5.523 4.478 10 10 10h46.783c5.522 0 10-4.477 10-10v-29.711h29.712c5.522 0 10-4.477 10-10v-46.783c0-5.523-4.478-10-10-10zm19.712 46.783h-29.712c-5.522 0-10 4.477-10 10v29.711h-26.783v-29.711c0-5.523-4.478-10-10-10h-29.711v-26.783h29.711c5.522 0 10-4.477 10-10v-29.712h26.783v29.712c0 5.523 4.478 10 10 10h29.712z"></path>
                                                <path d="m369.497 246.666c51.239-.708 92.983-42.352 93.459-93.223.313-33.486-16.989-62.983-43.266-79.911-21.598-13.914-37.772-29.46-45.4-53.873l-6.143-19.659-6.143 19.661c-7.603 24.331-23.627 39.927-45.19 53.738-26.16 16.756-43.48 45.945-43.48 79.151 0 52.43 43.18 94.848 96.163 94.116z" fill="#ffbdbc"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="ttr-title">Best Professionals</h4>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                                <div className="feature-container feature-bx1 feature4">
                                    <div className="icon-md">
                                        <span className="icon-cell">
                                            <svg enableBackground="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m181.049 229.112-76.87 76.971c-14.045 14.07-14.045 36.883 0 50.953l50.881 50.974c14.045 14.07 36.815 14.07 50.86 0l178.611-178.899h-203.482z" fill="#e2c4ff"></path>
                                                <path d="m495.277 81.339c-10.57-10.578-24.625-16.403-39.574-16.403-3.325 0-6.605.288-9.813.853 3.065-17.397-2.103-35.975-15.505-49.387-10.57-10.577-24.624-16.402-39.574-16.402s-29.003 5.825-39.573 16.402c-21.816 21.83-21.816 57.352 0 79.182 2.71 2.712 5.648 5.111 8.772 7.18l-18.689 18.716-52.105-52.184c-3.902-3.907-10.233-3.912-14.142-.012-3.908 3.902-3.914 10.234-.011 14.143l18.64 18.67-196.602 196.922c-17.56 17.593-17.902 46.002-1.029 64.017l-16.422 16.452c-3.896 3.903-3.896 10.226 0 14.129l12.383 12.406-88.75 88.913c-3.901 3.909-3.896 10.24.013 14.142 1.953 1.948 4.509 2.922 7.065 2.922 2.562 0 5.125-.979 7.078-2.936l88.724-88.887 12.357 12.38c1.876 1.88 4.422 2.936 7.078 2.936s5.202-1.056 7.078-2.936l16.396-16.426c8.547 8.028 19.644 12.432 31.418 12.432 12.28 0 23.825-4.79 32.506-13.487l196.588-196.91 18.617 18.648c1.953 1.956 4.515 2.935 7.077 2.935 2.557 0 5.113-.975 7.065-2.923 3.908-3.902 3.914-10.234.011-14.143l-52.155-52.24 18.732-18.758c2.054 3.126 4.453 6.09 7.198 8.836 10.57 10.577 24.624 16.402 39.573 16.402s29.003-5.825 39.574-16.402c21.817-21.831 21.817-57.352.001-79.182zm-129.892-50.8c6.792-6.796 15.822-10.539 25.426-10.539s18.635 3.743 25.427 10.539c13.407 13.416 13.997 34.875 1.773 49.001-.638.583-1.266 1.183-1.881 1.799-.616.617-1.214 1.245-1.795 1.882-6.533 5.671-14.791 8.766-23.524 8.766-9.604 0-18.634-3.743-25.427-10.54-14.025-14.035-14.025-36.873.001-50.908zm-239.787 380.799-24.74-24.786 9.327-9.344 14.287 14.313 10.454 10.473zm73.244-10.392c-4.903 4.912-11.42 7.617-18.352 7.617s-13.449-2.705-18.353-7.617l-50.881-50.975c-10.134-10.152-10.134-26.672-.001-36.823l196.578-196.898 87.616 87.767zm177.227-244.657-20.619-20.654 24.634-24.669c3.498.676 7.086 1.021 10.727 1.021 3.325 0 6.606-.288 9.813-.853-1.189 6.75-1.139 13.678.151 20.413zm105.062-9.905c-6.792 6.796-15.823 10.539-25.427 10.539s-18.635-3.743-25.427-10.539c-13.407-13.416-13.998-34.875-1.773-49.001.638-.583 1.266-1.183 1.881-1.799.617-.617 1.215-1.246 1.797-1.884 6.532-5.67 14.789-8.764 23.521-8.764 9.604 0 18.635 3.743 25.427 10.54 14.026 14.035 14.026 36.873.001 50.908z" fill="#020288"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="ttr-title">Medical Treatment</h4>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <a href="about-us" className="btn btn-primary shadow">Read More</a> */}
                    </div>
                </div>
            </div>
            <img className="pt-img1 animate-wave" src={waveOrange} alt="" />
            <img className="pt-img2 animate2" src={circleSmall} alt="" />
            <img className="pt-img3 animate-rotate" src={lineCircle} alt="" />
            <img className="pt-img4 animate-wave" src={squareDots} alt="" />
            <img className="pt-img5 animate2" src={squareBlue} alt="" />
        </section>
    );
};

export default AboutMyServices;