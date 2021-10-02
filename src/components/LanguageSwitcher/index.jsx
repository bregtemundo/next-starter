import NextLink from "next/link";
import { useRouter } from "next/router";

import Styles from "./LanguageSwitcher.module.scss";
import classNames from "classnames";

const AltLangs = ({ altLangs = [] }) => {
  const { locale, locales } = useRouter();

  return locales.map((lang) => {
    const altLang = altLangs.find((l) => l.lang == lang);
    const altLink = altLang ? "/" + altLang.path : "/";
    const isCurrent = lang == locale;

    return (
      <li key={lang}>
        <NextLink locale={lang} as={altLink} href={altLink} passHref>
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
