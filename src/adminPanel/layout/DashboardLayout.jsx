import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashFooter from '../components/DashFooter';
import NavTop from '../components/NavTop';
import Sidebar from '../components/Sidebar';
import { handleToggleDashSidebar } from '../_redux/Action/DashboardAction';

/**
 * Page Layout
 * @param {string} title ex: Page title 
 * @param {jsx} children  
 * @returns MainLayout
 */

const DashboardLayout = ({ children, title = null }) => {

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.DashboardReducer);

    document.title = (title !== null && title !== undefined) ? `${title} || Neurosurgeon Dr. Atique` : `Neurosurgeon Dr. Atique`;

    useEffect(() => {
        dispatch(handleToggleDashSidebar())
    }, [dispatch]);

    return (
        <React.Fragment>
            <div className="dash_layout">
                <div className={isToggle ? "dash_sidebar navbar_toggle" : "dash_sidebar IsNot_navbar_toggle"}>
                    <div className="sidebar_inner">
                        <p className='toggle_btn' onClick={() => dispatch(handleToggleDashSidebar(!isToggle))}><i class={isToggle ? `fa-solid fa-chevron-left` : `fa-solid fa-chevron-right`}></i></p>
                        <Sidebar />
                    </div>
                </div>
                <div className={isToggle ? "dash_container dash_content_toggle" : "dash_container isNot_dash_content_toggle"}>
                    <div className="navbar_top">
                        <div className="navbar_top_inner">
                            <NavTop />
                        </div>
                    </div>
                    <div className="dash_content_inner">
                        {
                            children
                        }
                    </div>
                    <div className="dash_footer">
                        <DashFooter />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DashboardLayout;