import React from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "prismic-configuration";
import Image from "next/image";

import Styles from "./TextMedia.module.scss";
import classNames from "classnames";

function TextMedia({ slice }) {
  return (
    <div className={classNames(Styles.textMedia, Styles['textMedia-'+slice.variation])}>      
      <Image
        width={slice.primary.image.dimensions.width}
        height={slice.primary.image.dimensions.height}
        layout="responsive"
        className={classNames(Styles.media, Styles['media-'+slice.variation])}
        src={slice.primary.image.url}
        alt={slice.primary.image.alt}
      />

      <div className={classNames(Styles.text, Styles['text-'+slice.variation])}>
        <h2>{RichText.asText(slice.primary.title)}</h2>
        <h4>{RichText.asText(slice.primary.description)}</h4>

        <RichText render={slice.primary.content} linkResolver={linkResolver}  />
      </div>
    </div>
  );
}
export default TextMedia;
