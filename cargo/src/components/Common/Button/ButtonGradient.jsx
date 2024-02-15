import React from "react";

import styled from "@emotion/styled";

const ButtonStyled = styled.button``;

function ButtonGradient({ children, className, ...props }) {
  return (
    <ButtonStyled
      className={`rounded-lg border-none bg-blue-lilac p-3 font-semibold text-neutral-white ${className}`}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

export default ButtonGradient;
