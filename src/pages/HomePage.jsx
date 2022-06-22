import React from 'react';
import AboutMyServices from '../components/aboutMyServices/AboutMyServices';
import Appoinment from '../components/appoinment/Appoinment';
import AppoinmentProcess from '../components/appoinmentProcess/AppoinmentProcess';
import MainBanner from '../components/mainBanner/MainBanner';
import VideoSection from '../components/videoSection/VideoSection';
import MainLayout from './../layout/MainLayout';

const HomePage = () => {
    return (
        <MainLayout>
            <MainBanner />
            <AboutMyServices />
            <AppoinmentProcess />
            <Appoinment />
            <VideoSection />
        </MainLayout>
    );
};

export default HomePage;