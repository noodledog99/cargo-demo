import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.text``;

function SubText({ children, className, ...props }) {
  return (
    <StyledTypo className={`${className} text-sub-text font-bold`} {...props}>
      {children}
    </StyledTypo>
  );
}

export default SubText;
