import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.text``;

function TextLink({ children, className, ...props }) {
  return (
    <StyledTypo
      className={`${className} text-body-text text-decoration-line: underline`}
      {...props}
    >
      {children}
    </StyledTypo>
  );
}

export default TextLink;
