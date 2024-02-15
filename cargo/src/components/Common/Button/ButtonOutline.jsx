import React from "react";

import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  min-width: 240px;
`;

function ButtonOutline({ children, className, ...props }) {
  return (
    <ButtonStyled
      className={`border border-solid border-blue font-semibold p-3 rounded-lg text-blue ${className}`}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

export default ButtonOutline;
