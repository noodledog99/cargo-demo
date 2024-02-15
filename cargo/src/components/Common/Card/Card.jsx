/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
