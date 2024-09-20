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
    equal,
    setEqual,
    setAmaliyat,
    resault,
    setResault,
    resaultRef,
  } = useContext(calculaterContext);

  //وقتی روی کلید ها کلیک شد ، بیا د چک کنه که تساوی درست است یا نه
  // درست بود عوضش کن علط که نتیجه روی صفحه پاک بشه
  const setting1 = () => {
    setX(x + "1");
    if (equal) setEqual(false);
  };
  const setting2 = () => {
    setX(x + "2");
    if (equal) setEqual(false);
  };
  const setting3 = () => {
    setX(x + "3");
    if (equal) setEqual(false);
  };
  const setting4 = () => {
    setX(x + "4");
    if (equal) setEqual(false);
  };
  const setting5 = () => {
    setX(x + "5");
    if (equal) setEqual(false);
  };
  const setting6 = () => {
    setX(x + "6");
    if (equal) setEqual(false);
  };
  const setting7 = () => {
    setX(x + "7");
    if (equal) setEqual(false);
  };
  const setting8 = () => {
    setX(x + "8");
    if (equal) setEqual(false);
  };
  const setting9 = () => {
    setX(x + "9");
    if (equal) setEqual(false);
  };
  return (
    <>
      <div id="container" className="bg-indigo-700 border-sky-600 ">
        <Mohasebat />
        <div className="mohasebat">
          <ul>
            <ul className="setaaval">
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "1") : setting1())}
              >
                <li className="adad1">1</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "2") : setting2())}
              >
                <li className="adad2">2</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "3") : setting3())}
              >
                <li className="adad3">3</li>
              </button>
            </ul>

<<<<<<< HEAD
            <ul
              className="setadovom"
              onClick={() => (flagVar2 ? setY(y + "4") : setting4())}
            >
              <button type="button">
=======
            <ul className="setadovom">
              
              <button type="button" onClick={() => (flagVar2 ? setY(y + "4") : setX(x + "4"))}>
>>>>>>> a1edc25e3c89d684c8ae5c07d94dcfd53c17c928
                <li className="adad4">4</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "5") : setting5())}
              >
                <li className="adad5">5</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "6") : setting6())}
              >
                <li className="adad6">6</li>
              </button>
            </ul>
            <ul className="setasevom">
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "7") : setting7())}
              >
                <li className="adad7">7</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "8") : setting8())}
              >
                <li className="adad8">8</li>
              </button>
              <button
                type="button"
                onClick={() => (flagVar2 ? setY(y + "9") : setting9())}
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
