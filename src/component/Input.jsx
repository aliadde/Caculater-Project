import React, { useContext, useEffect } from "react";
import Mohasebat from "./Mohasebat.jsx";
import { calculaterContext } from "../context.js";
function Input() {
  const {
    x,
    setX,
    flagVar2,
    setFlagVar2,
    y,
    setY,
    setEqual,
    setAmaliyat,
    resault,
    setResault,
  } = useContext(calculaterContext);

  return (
    <>
      <div id="container" className="bg-indigo-700 border-sky-600 ">
        <Mohasebat />
        <div className="mohasebat">
          <ul>
            <ul className="setaaval">
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "1") : setX(x + "1"))}
              >
                <li className="adad1">1</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "2") : setX(x + "2"))}
              >
                <li className="adad2">2</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "3") : setX(x + "3"))}
              >
                <li className="adad3">3</li>
              </button>
            </ul>

            <ul
              className="setadovom"
              onClick={() => (flagVar2 ? setY(y + "4") : setX(x + "4"))}
            >
              <button type="button">
                <li className="adad4">4</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "5") : setX(x + "5"))}
              >
                <li className="adad5">5</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "6") : setX(x + "6"))}
              >
                <li className="adad6">6</li>
              </button>
            </ul>
            <ul className="setasevom">
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "7") : setX(x + "7"))}
              >
                <li className="adad7">7</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "8") : setX(x + "8"))}
              >
                <li className="adad8">8</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "9") : setX(x + "9"))}
              >
                <li className="adad9">9</li>
              </button>
            </ul>

            {/* amaliyat ha */}
            <ul className="side">
              <button
                type="button"
                onClick={() => {
                  setAmaliyat("/");
                  setFlagVar2(true);
                }}
              >
                <li className="taghsim">
                  <i className="fas fa-divide"></i>
                </li>
              </button>

              <button
                type="button"
                onClick={() => {
                  setAmaliyat("x");
                  setFlagVar2(true);
                }}
              >
                <li className="zarb">
                  <i className="fas fa-times"></i>
                </li>
              </button>

              <button
                type="button"
                onClick={() => {
                  setAmaliyat("+");
                  setFlagVar2(true);
                }}
              >
                <li className="jam">
                  <i className="fas fa-plus"></i>
                </li>
              </button>

              <button
                type="button"
                onClick={() => {
                  setAmaliyat("-");
                  setFlagVar2(true);
                }}
              >
                <li className="tafrigh">
                  <i className="fas fa-minus"></i>
                </li>
              </button>
              <button type="button" onClick={() => setEqual(true)}>
                <li className="mosavi">
                  <i className="fas fa-equals"></i>
                </li>
              </button>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Input;
