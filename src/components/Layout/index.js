import React from 'react'

function Layout({children}) {
  return (
    <div className="site-container">
      <header>head</header>
      <main>{children}</main>
      <footer>Foot</footer>
    </div>
  )
}

export default Layout
