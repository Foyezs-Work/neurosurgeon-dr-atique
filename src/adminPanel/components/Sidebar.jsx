import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
import smaill_logo from "../../assets/images/logo_small.png"
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const { isToggle } = useSelector((state) => state.DashboardReducer);

    return (
        <div className="sidebar_nav">
            <div className="sidebar_logo">
                <Link to="/">
                    {
                        isToggle ? <img src={logo} alt="" /> : <img src={smaill_logo} alt="" />
                    }

                </Link>
            </div>
            <div className="sidebar_menu">
                <ul>
                    <li>
                        {
                            isToggle ? <NavLink to="/dashboard/photo-gallery-list"> <i class="fa-solid fa-image"></i> Photos Gallery List  </NavLink> :
                                <NavLink to="/dashboard/photo-gallery-list" title="Photo Gallery List">  <i class="fa-solid fa-image"></i></NavLink>
                        }

                    </li>
                    <li>
                        {
                            isToggle ? <NavLink to="/dashboard/video-gallery-list"> <i class="fa-solid fa-video"></i> Videos Gallery List  </NavLink> :
                                <NavLink to="/dashboard/video-gallery-list" title="Videos Gallery List">  <i class="fa-solid fa-video"></i></NavLink>
                        }
                    </li>
                    <li>
                        {
                            isToggle ? <NavLink to="/dashboard/blog-list"> <i class="fa-solid fa-blog"></i> Blogs List  </NavLink> :
                                <NavLink to="/dashboard/blog-list" title="Blog List">  <i class="fa-solid fa-blog"></i></NavLink>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar; <h5>Sidebar</h5>