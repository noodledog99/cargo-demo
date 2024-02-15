import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.text``;

function Caption({ children, className, ...props }) {
  return (
    <StyledTypo className={`${className} text-caption`} {...props}>
      {children}
    </StyledTypo>
  );
}

export default Caption;
