/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledCard = styled.div(
  ({ width }) => css`
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    border: 1px solid #ececec;
    ${width && `width: ${width};`}
  `,
);

export const CardHeader = styled.div`
  padding: 1.5rem;
  padding-top: 1rem;
  border-bottom: 1px solid #e2e8f0;
`;

export const CardImage = styled.img(
  ({ width, height, objectFit }) => css`
    display: block;
    width: ${width ? width : "100%"};
    height: ${height ? height : "auto"};
    object-fit: ${objectFit || "cover"};
  `,
);

export const CardBody = ({ children, className, ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = styled.div`
  padding: 1.5rem;
  padding-bottom: 1rem;
  border-top: 1px solid #e2e8f0;
`;

export const Card = ({ children, width, ...props }) => {
  return (
    <StyledCard width={width} {...props}>
      {children}
    </StyledCard>
  );
};
