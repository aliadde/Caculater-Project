import React, { useState } from "react";
import { calculaterContext } from "./context.js";
import Input from "./component/Input.jsx";
import "./App.css";

function App() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [flagVar2, setFlagVar2] = useState(false);
  const [equal, setEqual] = useState(false);
  const [amaliyat, setAmaliyat] = useState("");
  const [resault, setResault] = useState("");
  return (
    <>
      <calculaterContext.Provider
        value={{
          x,
          setX,
          flagVar2,
          setFlagVar2,
          y,
          setY,
          equal,
          setEqual,
          amaliyat,
          setAmaliyat,
          resault,
          setResault,
        }}
      >
        <Input />
      </calculaterContext.Provider>
    </>
  );
}

export default App;
