import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleNavbarPosition } from '../../_globalRedux/Action/GlobalAction';
import logo from "./../../assets/images/logo.png"
const Header = () => {

    const dispatch = useDispatch();
    const [toggleMenu, setToggleMenu] = useState(false);

    const { isToggle } = useSelector((state) => state.GlobalReducer)

    const scrollMenu = () => {
        if (window.scrollY >= 90) {
            dispatch(handleNavbarPosition(true))
        } else {
            dispatch(handleNavbarPosition(false))
        }
    }

    window.addEventListener("scroll", scrollMenu);

    const [toggleSubmenu, setToggelSubmenu] = useState(false)
    const [toggelGallery, setToggelGallery] = useState(false)

    return (
        <header className={isToggle === true ? "header scrolling-nav" : "header header-bg-transparent scrolling-nav"}>
            <div className={isToggle === true ? "sticky-header navbar-expand-lg is-fixed" : "sticky-header navbar-expand-lg"}>
                <div className="menu-bar clearfix">
                    <div className="container-fluid clearfix">
                        {/* <!-- website logo --> */}
                        <div className="menu-logo logo-dark">
                            <Link to="/" style={{ fontSize: "28px", fontWeight: "800", color: "#1f2278", textTransform: "uppercase" }}>
                                <img src={logo} alt="Dr. Atiqul Islam" />
                            </Link>
                        </div>
                        {/* <!-- nav toggle button --> */}
                        <button
                            className={toggleMenu === true ? "navbar-toggler menuicon justify-content-end open" : "navbar-toggler menuicon justify-content-end"} type="button" data-bs-toggle="collapse"
                            data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="true"
                            aria-label="Toggle navigation"
                            onClick={() => setToggleMenu(!toggleMenu)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div className={toggleMenu === true ? "menu-links navbar-collapse justify-content-end collapse show" : "menu-links navbar-collapse justify-content-end collapse"} id="menuDropdown">
                            <div className="menu-logo">
                                <Link to="/"><img src={logo} alt="Dr. Atiqul Islam" /></Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/">Home</Link></li>

                                <li className={toggleSubmenu ? "open" : ""}>
                                    <Link to="/#" onClick={() => setToggelSubmenu(!toggleSubmenu)}>Treatments & Surgery <i class="fa-solid fa-angle-down"></i> </Link>
                                    <ul className="sub-menu">
                                        <li className="add-menu-left">
                                            <ul>
                                                <li><Link to="#"><span>Brain Tumour Operation</span></Link></li>
                                                <li><Link to="#"><span>Endoscopic Brain Surgery (pituitory, etv and others)</span></Link></li>
                                                <li><Link to="#"><span>Skull Base Surgery</span></Link></li>
                                                <li><Link to="#"><span>Vascular Neuro Surgery</span></Link></li>
                                                <li><Link to="#"><span>Pediatric Neuro Surgery</span></Link></li>
                                                <li><Link to="#"><span>Spinal Surgery</span></Link></li>
                                                <li><Link to="#"><span>Traumatic Brain & Spine Surgery</span></Link></li>
                                                <li><Link to="#"><span>Epilepsy Surgery</span></Link></li>
                                                <li><Link to="#"><span>Spainal Tumour</span></Link></li>
                                                <li><Link to="#"><span> Microdiscectomy</span></Link></li>
                                                <li><Link to="#"><span> Stroke Surgery (Urgent Surgery of stroke patients)</span></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className={toggelGallery === true ? "open" : ""}>
                                    <Link to="/#" onClick={() => setToggelGallery(!toggelGallery)}>Gallery <i class="fa-solid fa-angle-down"></i></Link>
                                    <ul className="sub-menu left">
                                        <li><Link to="/photo-gallery"><span>Photo Gallery</span></Link></li>
                                        <li><Link to="/video-gallery"><span>Video Gallery</span></Link></li>
                                    </ul>
                                </li>

                                <li><Link to="/blog"><span>Blog</span></Link></li>


                                {/* <li className="num-bx contact_info">
                                    <a href="/#"> <span><i class="fa-solid fa-phone"></i> </span> 01961449755 </a>
                                </li> */}
                                <li className="num-bx contact_info">
                                    <a href="/#"> <span><i class="fa-solid fa-envelope-circle-check"></i></span> kazidmc@gmail.com </a>
                                </li>

                            </ul>

                            <div className="menu-close" onClick={() => setToggleMenu(!toggleMenu)}>
                                <i className="fa fa-times"></i>
                            </div>
                        </div>
                        {/* <!-- Navigation Menu END ==== --> */}
                    </div>
                </div>
            </div>
            {/* <!-- main header END --> */}
        </header>
    );
};

export default Header;