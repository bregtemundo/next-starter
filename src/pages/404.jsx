import Head from "next/head";
import React from "react";

// Custom 404 Error
const Custom404 = () => (
  <>
    <Head>
      <title>404 | Next starter</title>
    </Head>

    <p>404 - Error</p>
  </>
);

// Track Re-Renders
Custom404.whyDidYouRender = true;

// Export Pure Component
export default React.memo(Custom404);
