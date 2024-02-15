import React from "react";

function Card({ children, onClick, className, ...props }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-neutral-line ${className} ${onClick && "cursor-pointer"}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
