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

    return (
        <header className={isToggle === true ? "header scrolling-nav" : "header header-bg-transparent scrolling-nav"}>
            <div className={isToggle === true ? "sticky-header navbar-expand-lg is-fixed" : "sticky-header navbar-expand-lg"}>
                <div className="menu-bar clearfix">
                    <div className="container-fluid clearfix">
                        {/* <!-- website logo --> */}
                        <div className="menu-logo logo-dark">
                            <Link to="/" style={{ fontSize: "28px", fontWeight: "800", color: "#1f2278", textTransform: "uppercase" }}>
                                <img src={logo} alt="" />
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
                                <a href="index"><img src="images/logo-white.png" alt="" /></a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="index">Home</a></li>

                                <li>
                                    <Link to="/">Services <i class="fa-solid fa-angle-down"></i> </Link>
                                    <ul className="sub-menu">
                                        <li className="add-menu-left">
                                            <ul>
                                                <li><Link to="/services"><span>Service</span> </Link></li>
                                                <li><Link to="/service-detail"><span>Service Detail</span></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="/">Blog <i class="fa-solid fa-angle-down"></i> </Link>
                                    <ul className="sub-menu left">
                                        <li><Link to="/blog"><span>Health Tips</span></Link></li>
                                        <li><Link to="/blog-details"><span>Blog Details</span></Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Gallery <i class="fa-solid fa-angle-down"></i></Link>
                                    <ul className="sub-menu left">
                                        <li><Link to="/photos-gallery"><span>Photos Gallery</span></Link></li>
                                        <li><Link to="/videos-gallery"><span>Videos Gallery</span></Link></li>
                                    </ul>
                                </li>
                                <li className="num-bx contact_info">
                                    <a href="tel:(+880)1915449083"> <span><i class="fa-solid fa-phone"></i> </span> (+880) 191 544 9083 </a>
                                </li>
                                <li className="num-bx contact_info">
                                    <a href="mailto:kazidmc@gmail.com"> <span><i class="fa-solid fa-envelope-circle-check"></i></span> kazidmc@gmail.com </a>
                                </li>
                                {/* <li><Link to="/">Contact Me <i class="fa-solid fa-angle-down"></i></Link>
                                    <ul className="sub-menu left">
                                        <li className="num-bx contact_info">
                                            <a href="tel:(+880)1915449083" style={{ fontSize: "12px" }}> <span><i class="fa-solid fa-phone"></i> </span> (+880) 191 544 9083 </a>
                                        </li>
                                        <li className="num-bx contact_info">
                                            <a href="mailto:kazidmc@gmail.com" style={{ fontSize: "12px" }}> <span><i class="fa-solid fa-envelope-circle-check"></i></span> kazidmc@gmail.com </a>
                                        </li>
                                    </ul>
                                </li> */}
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