/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CardBody = ({ children, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const Card = ({ children, width, className, ...props }) => {
  return (
    <div className={`rounded-lg border border-neutral-line overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
};