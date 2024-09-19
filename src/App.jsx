import React, { useContext } from "react";
import { calculaterContext } from "./context.js";
import "./App.css";

function App() {
  return (
    <>
      <calculaterContext.Provider>
        <div id="container" className="bg-indigo-300">
          <div className="showresualt"> </div>
          <div className="mohasebat">
            <ul>
              <ul className="setaaval">
                <li className="adad1">1</li>
                <li className="adad2">2</li>
                <li className="adad3">3</li>
              </ul>

              <ul className="setadovom">
                <li className="adad4">4</li>
                <li className="adad5">5</li>
                <li className="adad6">6</li>
              </ul>
              <ul className="setasevom">
                <li className="adad7">7</li>
                <li className="adad8">8</li>
                <li className="adad9">9</li>
              </ul>

              {/* amaliyat ha */}
              <ul className="side">
                <li className="taghsim">
                  <i className="fas fa-divide"></i>
                </li>
                <li className="zarb">
                  <i className="fas fa-times"></i>
                </li>
                <li className="jam">
                  <i className="fas fa-plus"></i>
                </li>
                <li className="tafrigh">
                  <i className="fas fa-minus"></i>
                </li>
                <li className="mosavi">
                  <i class="fas fa-equals"></i>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </calculaterContext.Provider>
    </>
  );
}

export default App;
