import React from 'react';

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
      {/* <Header /> */}
      {
        children
      }
      {/* <ScrollToTop smooth />
      <Footer /> */}
    </React.Fragment>
  );
};

export default MainLayout;