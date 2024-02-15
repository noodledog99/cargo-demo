import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.h2``;

function H2({ children, className, ...props }) {
  return (
    <StyledTypo className={`${className} text-h2 font-bold`} {...props}>
      {children}
    </StyledTypo>
  );
}

export default H2;
