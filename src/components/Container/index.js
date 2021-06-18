import React from "react";

// Exporting the Container

// This Container component allows us to use a bootstrap container without worrying about class names
function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""} page-container`}>{children}</div>
  
};

export default Container;


