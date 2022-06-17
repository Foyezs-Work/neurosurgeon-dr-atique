import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleNavbarPosition } from '../../_globalRedux/Action/GlobalAction';

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

    return (
        <header className={isToggle === true ? "header scrolling-nav" : "header header-bg-transparent scrolling-nav"}>
            <div className={isToggle === true ? "sticky-header navbar-expand-lg is-fixed" : "sticky-header navbar-expand-lg"}>
                <div className="menu-bar clearfix">
                    <div className="container-fluid clearfix">
                        {/* <!-- website logo --> */}
                        <div className="menu-logo logo-dark">
                            <Link to="/" style={{ fontSize: "28px", fontWeight: "800", color: "#1f2278", textTransform: "uppercase" }}>
                                Dr. Atique
                                {/* <img src="https://meditro.themetrades.com/html/demo/images/logo.png" alt="" /> */}
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
                        {/* <!-- extra nav --> */}
                        <div className="secondary-menu">
                            <ul>
                                <li className="search-btn"><button id="quikSearchBtn" type="button" className="btn-link"><i
                                    className="las la-search"></i></button></li>
                                <li className="num-bx"><a href="tel:(+01)999888777"><i className="fas fa-phone-alt"></i> (+01) 999
                                    888 777</a></li>
                                <li className="btn-area"><a href="contact-us" className="btn btn-primary shadow">CONTACT ME <i
                                    className="btn-icon-bx fas fa-chevron-right"></i></a></li>
                            </ul>
                        </div>
                        {/* <!-- Search Box ==== --> */}
                        <div className="nav-search-bar">
                            <form action="#">
                                <input name="search" value="" defaultValue="Search" type="text" className="form-control" placeholder="Type to search" />
                                <span><i className="ti-search"></i></span>
                            </form>
                            <span id="searchRemove"><i className="ti-close"></i></span>
                        </div>
                        <div className={toggleMenu === true ? "menu-links navbar-collapse justify-content-end collapse show" : "menu-links navbar-collapse justify-content-end collapse"} id="menuDropdown">
                            <div className="menu-logo">
                                <a href="index"><img src="images/logo-white.png" alt="" /></a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="index">Home</a></li>
                                {/* <li>
                                    <Link to="/">Pages <i className="fas fa-plus"></i></Link>
                                    <ul className="sub-menu">
                                        <li className="add-menu-left">
                                            <ul>
                                                <li><Link to="/"><span>About Us</span></Link></li>
                                                <li><Link to="/"><span>Our Team</span></Link></li>
                                                <li><Link to="/"><span>FAQ's</span></Link></li>
                                                <li><Link to="/"><span>Booking</span></Link></li>
                                                <li><Link to="/"><span>Error 404</span></Link></li>
                                                <li><Link to="/"><span>Login / Register</span></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> */}
                                <li>
                                    <Link to="/">Services <i className="fas fa-plus"></i></Link>
                                    <ul className="sub-menu">
                                        <li className="add-menu-left">
                                            <ul>
                                                <li><Link to="/services"><span>Service</span> </Link></li>
                                                <li><Link to="/service-detail"><span>Service Detail</span></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="/">Blog <i className="fas fa-plus"></i></Link>
                                    <ul className="sub-menu left">
                                        <li><Link to="/blog-grid"><span>Health Tips</span></Link></li>
                                        <li><Link to="/blog-details"><span>Blog Details</span></Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Gallery <i className="fas fa-plus"></i></Link>
                                    <ul className="sub-menu left">
                                        <li><Link to="/photos-gallery"><span>Photos Gallery</span></Link></li>
                                        <li><Link to="/videos-gallery"><span>Videos Gallery</span></Link></li>
                                    </ul>
                                </li>
                                {/* <li><Link to="/contact-me">Contact Me</Link></li> */}
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