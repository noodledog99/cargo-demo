import React from "react";
import ViewModel from "./ViewModel";

export default function HomePage() {
  const { text, handleSetText, setText } = ViewModel();

  return <div>{text}</div>;
}
