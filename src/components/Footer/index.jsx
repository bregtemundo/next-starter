import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import Styles from "./Footer.module.scss";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={Styles.footer}>
      <div className={Styles.ayudo}>
        <h2>{t("need_help")}</h2>
        <div className={Styles.content}>
          send us an <a href="mailto:test@test.com">email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
