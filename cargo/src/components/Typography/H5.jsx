import React from "react";

import styled from "@emotion/styled";

const StyledTypo = styled.h5``;

function H5({ children, className, ...props }) {
  return (
    <StyledTypo className={`${className} text-h5 font-bold`} {...props}>
      {children}
    </StyledTypo>
  );
}

export default H5;
