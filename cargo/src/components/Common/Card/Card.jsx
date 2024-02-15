import React from "react";

function Card({ children, className, ...props }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-neutral-line ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
