import React from 'react'
import Header from '../Header/index';
import Footer from '../Footer/index';
import ExitPreviewButton from '../ExitPreviewButton';


function Layout({children, altLangs, navigation}) {
  
  return (
    <div className="site-container">
      <Header altLangs={altLangs} navigation={navigation} />  
          
      <main>{children}</main>
      <Footer />
      <ExitPreviewButton />
    </div>
  )
}

export default Layout
