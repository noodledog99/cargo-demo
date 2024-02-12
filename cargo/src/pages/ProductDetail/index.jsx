import React from "react";
import ViewModel from "./ViewModel";

export default function ProductDetailPage() {
  const { text, handleSetText, setText } = ViewModel();

  return <div>Hello World Product Detail!</div>;
}
