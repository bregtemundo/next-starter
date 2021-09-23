import NextLink from "next/link";
import { linkResolver, hrefResolver } from "prismic-configuration";
import { useRouter } from "next/router";

import Styles from "./LanguageSwitcher.module.scss";
import classNames from "classnames";

const AltLangs = ({ altLangs = [] }) => {
  const { locale, locales } = useRouter();

  return locales.map((lang) => {
    const altLang = altLangs.find((l) => l.lang == lang);
    const altLink = altLang ? altLang : { uid: "", type: "home", lang: lang };
    const isCurrent = altLink.lang == locale;

    return (
      <li key={lang}>
        <NextLink locale={lang} as={linkResolver(altLink)} href={hrefResolver(altLink)} passHref>
          <a className={classNames(Styles.language, { [Styles.active]: isCurrent })}>{lang.slice(0, 2)}</a>
        </NextLink>
      </li>
    );
  });
};

const LanguageSwitcher = ({ altLangs }) => {
  return (
    <ul className={Styles.languageSwitcher}>
      <AltLangs altLangs={altLangs}></AltLangs>
    </ul>
  );
};
export default LanguageSwitcher;
