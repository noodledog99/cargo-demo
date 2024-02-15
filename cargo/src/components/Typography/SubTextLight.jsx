import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.text``;

function SubTextLight({ children, className, ...props }) {
  return (
    <StyledTypo className={`${className} text-sub-text`} {...props}>
      {children}
    </StyledTypo>
  );
}

export default SubTextLight;
