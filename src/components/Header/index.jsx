import React from "react";
import Link from "next/link";

import Styles from "./Header.module.scss";

function Header() {
  return (
    <header className={Styles.header}>
      <img className="logo" src="https://reprap.org/mediawiki/images/3/31/RepRap_Teardrop.svg" alt="Company" />
      <nav>
        <ol className={Styles.menu}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>Stories</li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
