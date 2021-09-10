import React from "react";

import Styles from "./Billboard.module.scss";

function Billboard() {
  return (
    <div className={Styles.billboard}>
      <img src="https://via.placeholder.com/700x700.png" alt="" className={Styles.image} />

      <h5 className={Styles.tagline}>Teapot collection with premium quality</h5>
      <h1>Simple way to choose teapots</h1>

      <form className={Styles.emailform}>
        <input type="email" required></input>
        <submit>Go</submit>
      </form>

      <div className={Styles.features}>
        <div className={Styles.feature}>
          <div className={Styles.number}>100+</div>
          <div className={Styles.name}>Inique styles</div>
        </div>
        <div className={Styles.feature}>
          <div className={Styles.number}>98+</div>
          <div className={Styles.name}>Superb models</div>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
