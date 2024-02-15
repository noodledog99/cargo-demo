import React from "react";

import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  min-width: 240px;
`;

function Button({ children, className, ...props }) {
  return (
    <ButtonStyled
      className={`bg-neutral-hint border border-neutral-hint border-solid font-semibold p-3 rounded-lg text-neutral-main ${className}`}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;
