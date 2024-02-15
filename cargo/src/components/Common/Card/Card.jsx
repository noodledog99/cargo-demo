import React from "react";

export default function Card({ children, width, className, ...props }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-neutral-line ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
