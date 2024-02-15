import React from "react";

import styled from "@emotion/styled";

const InputStyled = styled.input``;

function SearchText({ className, ...props }) {
  return (
    <div className="relative w-full">
      <i class="las la-search la-lg absolute left-2 top-5 text-neutral-secondary"></i>
      <i class="lar la-image la-lg absolute right-4 top-5 text-neutral-secondary"></i>
      <InputStyled
        className={`w-full rounded-lg border border-neutral-hint px-8 py-3 text-base ${className}`}
        {...props}
      />
    </div>
  );
}

export default SearchText;
