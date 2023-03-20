import React from "react";
import "../styles/App.css";

const App = () => {
  let div1 = document.querySelector("#welcome-div");
  let div2 = document.querySelector("#about-div");
  return (
    <div id="main">
      <div id="welcome-div">
        <h1>Welcome to Newton School!!</h1>
      </div>
      <div id="about-div" className={"divDisplay"}>
        <h1>
          Newton School is a neo-university providing highly immersive tech
          learning to millions of students, to tap into new-age tech
          opportunities.
        </h1>
      </div>
      <button id="toggle" onClick = {() => {
        div1.classList.toggle("divDisplay");
        div2.classList.toggle("divDisplay");
      }}>Toggle</button>
    </div>
  );
};

export default App;
