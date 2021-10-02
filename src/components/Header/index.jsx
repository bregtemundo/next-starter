import React from "react";
import NextLink from "next/link";
import LanguageSwitcher from "components/LanguageSwitcher";

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
          {navigation?.map((menu, ind) => {
            let link = menu.link.story?.full_slug ? menu.link.story?.full_slug : menu.link.cached_url;
            const menulink = link.charAt(0) !== "/" ? "/" + link : link;
            const active = asPath === menulink || "/" + locale + asPath === menulink;
            return (
              <li key={`menulink-${ind}`}>
                <NextLink as={menulink} href={menulink} passHref>
                  <a className={classNames(Styles.link, { [Styles.active]: active })}>{menu.name}</a>
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
