import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.h1``;

function H1({ children, className, ...props }) {
  return (
    <StyledTypo className={`${className} text-h1 font-bold`} {...props}>
      {children}
    </StyledTypo>
  );
}

export default H1;
