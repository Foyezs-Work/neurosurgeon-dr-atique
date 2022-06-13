import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const [isFixed, setIsFixed] = useState(false);

    const scrollMenu = () => {
        if (window.scrollY >= 90) {
            setIsFixed(true)
        } else {
            setIsFixed(false)
        }
    }

    window.addEventListener("scroll", scrollMenu);

    return (
        <header className="header header-transparent rs-nav" style={{ height: 0 }}>
            <div className={isFixed === true ? "sticky-header navbar-expand-lg is-fixed" : "sticky-header navbar-expand-lg"}>
                <div className="menu-bar clearfix">
                    <div className="container-fluid clearfix">
                        {/* <!-- website logo --> */}
                        <div className="menu-logo logo-dark">
                            <a href="index.html"><img src="https://meditro.themetrades.com/html/demo/images/logo.png" alt="" /></a>
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
                                <li className="btn-area"><a href="contact-us.html" className="btn btn-primary shadow">CONTACT US <i
                                    className="btn-icon-bx fas fa-chevron-right"></i></a></li>
                            </ul>
                        </div>
                        {/* <!-- Search Box ==== --> */}
                        <div className="nav-search-bar">
                            <form action="#">
                                <input name="search" value="" type="text" className="form-control" placeholder="Type to search" />
                                <span><i className="ti-search"></i></span>
                            </form>
                            <span id="searchRemove"><i className="ti-close"></i></span>
                        </div>
                        <div className={toggleMenu === true ? "menu-links navbar-collapse justify-content-end collapse show" : "menu-links navbar-collapse justify-content-end collapse"} id="menuDropdown">
                            <div className="menu-logo">
                                <a href="index.html"><img src="images/logo-white.png" alt="" /></a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="index.html">Home</a></li>
                                <li>
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
                                </li>
                                <li>
                                    <Link to="/">Services <i className="fas fa-plus"></i></Link>
                                    <ul className="sub-menu">
                                        <li className="add-menu-left">
                                            <ul>
                                                <li><a href="services.html"><span>Service</span> </a></li>
                                                <li><a href="service-detail.html"><span>Service Detail</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="/">Blog <i className="fas fa-plus"></i></Link>
                                    <ul className="sub-menu left">
                                        <li><a href="blog-grid.html"><span>Blogs</span></a></li>
                                        <li><a href="blog-details.html"><span>Blog Details</span></a></li>
                                    </ul>
                                </li>
                                <li><a href="contact-us.html">Contact Us</a></li>
                            </ul>

                            <div className="menu-close" onClick={() => setToggleMenu(!toggleMenu)}>
                                <i className="ti-close"></i>
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