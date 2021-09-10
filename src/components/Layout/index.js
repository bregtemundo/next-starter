import React from 'react'
import Header from '../Header/index';
import Footer from '../Footer/index';

function Layout({children}) {
  return (
    <div className="site-container">
      <Header />      
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
