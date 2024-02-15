import React from "react";

import styled from "@emotion/styled";

const ButtonStyled = styled.button``;

function ButtonOutline({ children, className, ...props }) {
  return (
    <ButtonStyled
      className={`rounded-lg border border-solid border-blue p-3 font-semibold text-blue ${className}`}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

export default ButtonOutline;
