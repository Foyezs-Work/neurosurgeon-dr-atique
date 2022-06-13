import React from 'react';
import AboutMyServices from '../components/aboutMyServices/AboutMyServices';
import AppoinmentProcess from '../components/appoinmentProcess/AppoinmentProcess';
import MainBanner from '../components/mainBanner/MainBanner';
import MainLayout from './../layout/MainLayout';

const HomePage = () => {
    return (
        <MainLayout>
            <MainBanner />
            <AboutMyServices />
            <AppoinmentProcess />
        </MainLayout>
    );
};

export default HomePage;