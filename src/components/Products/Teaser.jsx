import React from "react";

import Styles from "./Teaser.module.scss";

function Teaser() {
  return (
    <div className={Styles.product}>
      <img src="https://via.placeholder.com/570x570.png" alt="" className={Styles.image} />
      <h4>title</h4>
      <div className="price">30</div>
    </div>
  );
}

export default Teaser;
