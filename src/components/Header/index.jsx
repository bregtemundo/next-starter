import React from "react";
import Link from "next/link";
import LanguageSwitcher from "components/LanguageSwitcher";

import Styles from "./Header.module.scss";

function Header({ altLangs }) {
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

      <LanguageSwitcher altLangs={altLangs}></LanguageSwitcher>
    </header>
  );
}

export default Header;
