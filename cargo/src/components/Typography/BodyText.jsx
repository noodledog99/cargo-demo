import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.text``;

function BodyText({ children, className, ...props }) {
  return (
    <StyledTypo className={`${className} text-body-text`} {...props}>
      {children}
    </StyledTypo>
  );
}

export default BodyText;
