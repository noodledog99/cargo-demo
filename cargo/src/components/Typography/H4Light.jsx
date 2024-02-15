import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.h4``;

function H4Light({ children, className, ...props }) {
  return (
    <StyledTypo className={`${className} text-h4 font-normal`} {...props}>
      {children}
    </StyledTypo>
  );
}

export default H4Light;
