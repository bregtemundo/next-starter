import React from 'react'

function Layout({children}) {
  return (
    <>
      <header>head</header>
      <main>{children}</main>
      <footer>Foot</footer>
    </>
  )
}

export default Layout
