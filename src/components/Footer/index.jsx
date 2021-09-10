import React from "react";
import Link from "next/link";

import Styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.ayudo}>
        <h2>Need our help?</h2>
        <div className={Styles.content}>
          send us an <a href="mailto:test@test.com">email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
