import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.h4``;

function H4({ children, className, ...props }) {
  return (
    <StyledTypo className={`${className} text-h4 font-bold`} {...props}>
      {children}
    </StyledTypo>
  );
}

export default H4;
