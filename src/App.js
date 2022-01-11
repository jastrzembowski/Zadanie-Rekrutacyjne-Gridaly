import React, { useState, useMemo } from "react";
import debounce from "lodash.debounce";
import "./styles.css";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const resetState = () => {
    setClicks(0);
  };

  const handle = () => {
    setTimeout(() => {
      resetState();
    }, 2000);
  };
  const getClasses = (noclicks) => {
    if (noclicks === 0) {
      return "square";
    }
    if (noclicks >= 3) {
      return "square triple";
    }
    if (noclicks > 0) {
      return "square clicked";
    }
  };
  const handleClick = () => {
    setClicks(clicks + 1);
    debouncedHandler();
  };
  const debouncedHandler = useMemo(
    () => debounce(() => handle(), 300),
    [clicks]
  );

  return (
    <div className="container">
      <div className={getClasses(clicks)} onClick={handleClick}></div>
    </div>
  );
}
