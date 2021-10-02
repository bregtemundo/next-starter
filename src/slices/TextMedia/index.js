import React from "react";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";

import Styles from "./TextMedia.module.scss";
import classNames from "classnames";

const storyblokLoader = ({ src, width, height=0, quality }) => {

  var imageService = '//img2.storyblok.com/';
  var path = src.replace('//a.storyblok.com', '');
  var path = path.replace('https:', '');
  var path = path.replace('http:', '');
  return imageService + `${width}x${height}/filters:quality(${quality})` + path

  
}

function TextMedia({ blok }) {    
  return (
    <div className={classNames(Styles.textMedia, Styles['textMedia-'+blok.variation])}>      
      <Image
        width={200}
        height={300}        
        className={classNames(Styles.media, Styles['media-'+blok.variation])}
        src={blok.image.filename}
        alt={blok.image.alt}
        loader="vercel"
      /> 

      <div className={classNames(Styles.text, Styles['text-'+blok.variation])}>
        <h2>{blok.title}</h2>
        <h4>{blok.description}</h4>

        {render(blok.content)}              
        
      </div>
    </div>
  );
  
}
export default TextMedia;
