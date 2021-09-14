import React from 'react'
import Header from '../Header/index';
import Footer from '../Footer/index';
import ExitPreviewButton from '../ExitPreviewButton';

function Layout({children}) {
  return (
    <div className="site-container">
      <Header />      
      <main>{children}</main>
      <Footer />
      <ExitPreviewButton />
    </div>
  )
}

export default Layout
