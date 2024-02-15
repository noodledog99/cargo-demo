import React from "react";

import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  min-width: 240px;
`;

function ButtonGradient({ children, className, ...props }) {
  return (
    <ButtonStyled
      className={`bg-blue-lilac border-none font-semibold p-3 rounded-lg text-neutral-white ${className}`}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

export default ButtonGradient;
