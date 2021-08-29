import React from "react";

import Styles from "./Billboard.module.scss";

function Billboard() {
  return (
    <div className={Styles.billboard}>
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

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales porta ullamcorper. Curabitur condimentum sapien non nunc rhoncus, vel
        facilisis enim eleifend. Vestibulum eu arcu sed justo consequat blandit. Donec lobortis, ex eget ultrices accumsan, dolor est ultrices neque, at
        dignissim nisl ante ut nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent vel mollis lorem. Mauris
        tristique, nisl sit amet viverra mollis, mauris velit ullamcorper nisi, hendrerit lacinia enim nibh vitae sapien. Maecenas venenatis sapien at commodo
        egestas. Sed eleifend est bibendum ex blandit condimentum. Duis at nibh at nisl porttitor vehicula faucibus ac nibh. Nullam sed quam et turpis commodo
        porta. Vestibulum ut porta libero. In sollicitudin rhoncus sapien, et lobortis ex. Praesent non elit et risus egestas cursus. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Praesent vestibulum libero vel mauris bibendum pretium.
        Pellentesque mollis sodales venenatis. Etiam fermentum finibus justo et iaculis. Nulla tincidunt velit eget urna bibendum suscipit. Quisque vestibulum,
        nunc vehicula ultrices mollis, est felis fringilla lectus, ut dignissim purus quam ut urna. Suspendisse felis arcu, malesuada non molestie nec, tempus
        vel magna. Mauris dui metus, lobortis eu turpis laoreet, pharetra mattis magna. Morbi ultrices sit amet dolor eu malesuada. Nulla tristique purus mi,
        non auctor mauris pulvinar eget. Ut libero turpis, sodales mattis commodo eget, rutrum sed ligula. Duis finibus tortor arcu, eget varius risus lobortis
        vitae. Ut feugiat vel nisl vel venenatis. Sed ipsum turpis, vehicula et mi in, fermentum vehicula mi. Suspendisse potenti. Aenean nisl lectus, venenatis
        eget consectetur nec, scelerisque a velit. Etiam posuere fermentum hendrerit. Morbi tempor tempus justo. Donec sodales ligula in tortor auctor, at
        vehicula nisi elementum. Nullam pellentesque diam eget nisi facilisis, vitae consequat mauris consequat. Phasellus congue volutpat iaculis. Nullam at
        tortor efficitur, egestas dui nec, hendrerit magna. Cras aliquet a massa sit amet bibendum. Nam at tempor elit. In hac habitasse platea dictumst.
        Vestibulum eu porttitor massa, in consequat dui. Nullam faucibus metus turpis, vitae placerat est semper quis. Praesent urna lacus, tempor lacinia
        malesuada condimentum, sodales sed erat. Maecenas velit odio, malesuada sed libero mattis, porta ultricies leo. Praesent risus mauris, elementum id
        elementum vitae, efficitur id nibh. Nulla mollis tellus sit amet interdum vehicula. Praesent est nibh, pretium vitae dapibus vitae, bibendum non lectus.
        Nullam pharetra, enim rhoncus tempus aliquet, lacus ante fringilla erat, at suscipit libero arcu quis sapien. Morbi ultrices orci sit amet consequat
        condimentum. Vivamus porttitor cursus vehicula. Praesent nec imperdiet erat. Morbi elementum elit sed mi iaculis bibendum. Maecenas dolor ante, sodales
        et placerat quis, fermentum nec est. Praesent id aliquam arcu, sed scelerisque sem. Phasellus eu mi lorem. Nullam quis massa ornare, finibus ante a,
        porttitor augue. Nam convallis ex vitae diam luctus, sed porta mi pulvinar. Sed vitae convallis urna, sit amet dapibus velit.
      </p>
    </div>
  );
}

export default Billboard;
