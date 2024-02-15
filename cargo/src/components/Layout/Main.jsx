import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import styled from "@emotion/styled";

const Div = styled.div`
  /* min-height: 100%; */
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content-container {
    flex: 1;
  }
`;

export default function Main() {
  return (
    <Div>
      <Header />
      <div className="content-container mx-auto my-12 w-full max-w-[1440px] px-10">
        <Outlet />
      </div>
      <Footer />
    </Div>
  );
}
