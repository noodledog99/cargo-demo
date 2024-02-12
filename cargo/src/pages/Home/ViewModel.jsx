import React, { useState } from "react";

export default function ViewModel() {
  const [text, setText] = useState("Home Page");

  const handleSetText = (value) => {
    setText(value);
  };

  return {
    text,
    handleSetText,
    setText
  };
}
