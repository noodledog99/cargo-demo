import React from "react";

function Card({ children, onClick, className, ...props }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-neutral-line  ${onClick && "cursor-pointer"} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
