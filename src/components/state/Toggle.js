// import React from "react";

// //Stateless functional components: Component nhưng  không sử dụng state
// function Toggle(){
//     return <div className="toggle"></div>
// }

// //Stateful functional component: Component có sử dụng state

// function Toggle2(){
//     // const [count, setCount] = useState();
//     return <div className="toggle2"></div>
// }
import React, { useState } from "react";
import "./ToggleStyles.css";

function Toggle() {
  // 1. Enabling state: useState(initialize value)
  // 2. Initialize state useState(false)
  // 3. Reading state
  // 4. Update state

  const [on, setOn] = useState(false);
  // CALLBACK
  const handeToggle = () => {
    // setOn(callback) -> setOn(prevState => !prevState)
    setOn((on) => !on);
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handeToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}
export default Toggle;
