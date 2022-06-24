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

    console.log("isToggle", isToggle)

    return (
        <React.Fragment>
            <div className="dash_layout">
                <div className="dash_sidebar">
                    <div className="sidebar_inner">
                        <Sidebar />
                    </div>
                </div>
                <div className="dash_container">
                    <div className="sidbar_navTop">
                        <NavTop />
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