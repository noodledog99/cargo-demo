import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.h3``;

function H3({ children, className, ...props }) {
  return (
    <StyledTypo className={`${className} text-h3 font-bold`} {...props}>
      {children}
    </StyledTypo>
  );
}

export default H3;
