import React from 'react';
import AboutMyServices from '../components/aboutMyServices/AboutMyServices';
import MainBanner from '../components/mainBanner/MainBanner';
import MainLayout from './../layout/MainLayout';

const HomePage = () => {
    return (
        <MainLayout>
            <MainBanner />
            <AboutMyServices />
        </MainLayout>
    );
};

export default HomePage;