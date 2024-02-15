import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.text``;

function SubTextLink({ children, className, ...props }) {
  return (
    <StyledTypo
      className={`${className} text-sub-text text-decoration-line: underline`}
      {...props}
    >
      {children}
    </StyledTypo>
  );
}

export default SubTextLink;
