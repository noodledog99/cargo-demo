import React from "react";

function Divider({ className, ...props }) {
  return <hr class={`h-1 border-neutral-line ${className}`} {...props} />;
}

export default Divider;
