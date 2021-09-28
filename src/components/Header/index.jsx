import React from "react";
import NextLink from "next/link";
import LanguageSwitcher from "components/LanguageSwitcher";
import { RichText } from "prismic-reactjs";

import Styles from "./Header.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";

function Header({ altLangs, navigation }) {
  const { asPath, locale } = useRouter();

  return (
    <header className={Styles.header}>
      <img className="logo" src="https://reprap.org/mediawiki/images/3/31/RepRap_Teardrop.svg" alt="Company" />

      <nav>
        <ol className={Styles.menu}>
          {navigation?.data.menu_links.map((menu, ind) => {
            const active = asPath === linkResolver(menu.link) || "/" + locale + asPath === linkResolver(menu.link);
            return (
              <li key={`menulink-${ind}`}>
                <NextLink as={linkResolver(menu.link)} href={hrefResolver(menu.link)} passHref>
                  <a className={classNames(Styles.link, { [Styles.active]: active })}>{RichText.asText(menu.label)}</a>
                </NextLink>
              </li>
            );
          })}
        </ol>
      </nav>

      <LanguageSwitcher altLangs={altLangs}></LanguageSwitcher>
    </header>
  );
}

export default Header;
