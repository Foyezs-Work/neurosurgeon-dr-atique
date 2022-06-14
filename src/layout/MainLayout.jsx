import React from 'react';
import Footer from '../components/shareable/Footer';
import Header from '../components/shareable/Header';

/**
 * Page Layout
 * @param {string} title ex: Page title 
 * @param {jsx} children  
 * @returns MainLayout
 */

const MainLayout = ({ children, title = null }) => {

  document.title = (title !== null && title !== undefined) ? `${title} || Neurosurgeon Dr. Atique` : `Neurosurgeon Dr. Atique`;

  return (
    <React.Fragment>
      <Header />
      {
        children
      }
      {/* <ScrollToTop smooth /> */}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;