import React from 'react';
import AboutMyServices from '../components/aboutMyServices/AboutMyServices';
import Appoinment from '../components/appoinment/Appoinment';
import AppoinmentProcess from '../components/appoinmentProcess/AppoinmentProcess';
import MainBanner from '../components/mainBanner/MainBanner';
import MainLayout from './../layout/MainLayout';

const HomePage = () => {
    return (
        <MainLayout>
            <MainBanner />
            <AboutMyServices />
            <AppoinmentProcess />
            <Appoinment />
        </MainLayout>
    );
};

export default HomePage;