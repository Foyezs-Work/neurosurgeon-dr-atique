import React from 'react';
import Footer from '../components/shareable/Footer';
import Header from '../components/shareable/Header';
import LoadingOverlay from 'react-loading-overlay';

/**
 * Page Layout
 * @param {string} title ex: Page title 
 * @param {jsx} children  
 * @returns MainLayout
 */

const MainLayout = ({ children, title = null, isLoading = false, loadingMessage = "content" }) => {

  document.title = (title !== null && title !== undefined) ? `${title} || Neurosurgeon Dr. Atique` : `Neurosurgeon Dr. Atique`;

  return (
    <React.Fragment>
      <LoadingOverlay
        active={isLoading}
        spinner
        text={`Loading ${loadingMessage}`}
      >
        <Header />
        {
          children
        }
        {/* <ScrollToTop smooth /> */}
        <Footer />
      </LoadingOverlay>

    </React.Fragment>
  );
};

export default MainLayout;