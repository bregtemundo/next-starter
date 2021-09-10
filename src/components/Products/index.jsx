import React from "react";

import Teaser from "./Teaser";

import Styles from "./Products.module.scss";

function Product() {
  return (
    <div className={Styles.products}>
      <h2 className={Styles.title}>Our products</h2>
      <p className={Styles.intro}>We have a large selection of products, all high quality.</p>

      <div className={Styles.categories}>
        <div className={Styles.category}>All</div>
        <div className={Styles.category}>Cat 1</div>
        <div className={Styles.category}>Cat 2</div>
        <div className={Styles.category}>Cat 3</div>
      </div>

      <div className={Styles.productlist}>
        {[...Array(16).keys()].map((i) => (
          <Teaser key={i} />
        ))}
      </div>
    </div>
  );
}

export default Product;
