import React from "react";

import styled from "@emotion/styled";

const Div = styled.div`
  .position-top {
    top: 1rem;
  }
`;
const InputStyled = styled.input``;

function SearchText({ className, ...props }) {
  return (
    <Div className="relative w-full">
      <i className="las la-search la-lg position-top absolute left-2 text-neutral-secondary"></i>
      <i className="lar la-image la-lg position-top absolute right-4 text-neutral-secondary"></i>
      <InputStyled
        className={`w-full rounded-lg border border-neutral-hint px-8 py-3 text-base ${className}`}
        {...props}
      />
    </Div>
  );
}

export default SearchText;
