import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.text``;

function CaptionLink({ children, className, ...props }) {
  return (
    <StyledTypo
      className={`${className} text-caption text-decoration-line: underline`}
      {...props}
    >
      {children}
    </StyledTypo>
  );
}

export default CaptionLink;
