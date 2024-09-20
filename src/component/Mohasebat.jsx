import React, { useContext, useEffect } from "react";
import { calculaterContext } from "../context.js";
function Mohasebat() {
  const {
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
    resaultRef,
  } = useContext(calculaterContext);

  const zarb = (x, y) => {
    const r = x * y;
    resaultRef.current = r;
    setResault(r);
  };
  const taghsim = (x, y) => {
    const r = x / y;
    resaultRef.current = r;
    setResault(r);
  };
  const jam = (x, y) => {
    const r = x + y;
    resaultRef.current = r;
    setResault(r);
  };
  const tafrigh = (x, y) => {
    const r = x - y;
    resaultRef.current = r;
    setResault(r);
  };
  useEffect(() => {
    if (equal) {
      let m, n;
      switch (amaliyat) {
        case "/":
          m = Number(x);
          n = Number(y);
          taghsim(m, n);

          setX("");
          setY("");
          break;
        case "x":
          m = Number(x);
          n = Number(y);
          zarb(m, n);

          setX("");
          setY("");
          break;
        case "+":
          m = Number(x);
          n = Number(y);
          jam(m, n);

          setX("");
          setY("");
          break;
        case "-":
          m = Number(x);
          n = Number(y);
          tafrigh(m, n);

          setX("");
          setY("");

          break;
        default:
          break;
      }
    }
  }, [equal]);
  if (equal) {
    setTimeout(() => {
      setFlagVar2(false);
      setAmaliyat("");
    }, 2000);
  }
  return (
    <div>
      <div className="pt-6 text-4xl showresualt">
        {flagVar2 ? ` ${y}` : ` ${x}`}
        {equal ? `resault :${resaultRef.current}` : ""}
      </div>
    </div>
  );
}

export default Mohasebat;
