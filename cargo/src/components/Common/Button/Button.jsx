import React from "react";

import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  min-width: 240px;
`;

function Button({ children, className, ...props }) {
  return (
    <ButtonStyled
      className={`rounded-lg border border-solid border-neutral-hint bg-neutral-hint p-3 font-semibold text-neutral-main ${className}`}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;
