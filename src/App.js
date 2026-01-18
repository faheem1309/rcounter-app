import React, { useEffect, useState } from "react";
import CounterButton from "./components/CounterButton";
import "./App.css";

const MAX = 100;

function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? Number(saved) : 0;
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp") increment(1);
      if (e.key === "ArrowDown") decrement(1);
      if (e.key === "r") reset();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const increment = (value) => {
    setCount((prev) => Math.min(prev + value, MAX));
  };

  const decrement = (value) => {
    setCount((prev) => Math.max(prev - value, 0));
  };

  const reset = () => setCount(0);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="card">
        <h1>React Counter</h1>
        <h2>{count}</h2>

        <div className="buttons">
          <CounterButton
            text="+1"
            onClick={() => increment(1)}
            disabled={count >= MAX}
          />
          <CounterButton
            text="+5"
            onClick={() => increment(5)}
            disabled={count >= MAX}
          />
          <CounterButton
            text="-1"
            onClick={() => decrement(1)}
            disabled={count === 0}
          />
          <CounterButton
            text="Reset"
            onClick={reset}
          />
        </div>

        <div className="toggle">
          <label>
            <input
              type="checkbox"
              onChange={() => setDarkMode(!darkMode)}
            />{" "}
            Dark Mode
          </label>
        </div>

        <p style={{ fontSize: "12px", marginTop: "10px" }}>
          ⬆ Increment | ⬇ Decrement | R Reset
        </p>
      </div>
    </div>
  );
}

export default App;