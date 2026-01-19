import React, { useEffect, useState } from "react";
import CounterButton from "./components/CounterButton";
import Tooltip from "./components/Tooltip";
import Toast from "./components/Toast";
import useCounter from "./hooks/useCounter";
import "./App.css";

function App() {
const { count, increment, decrement, reset, undo } = useCounter();
const [toast, setToast] = useState("");
useEffect(() => {
if (count === 100) setToast("Maximum limit reached");
else setToast("");
}, [count]);

useEffect(() => {
const keyHandler = (e) => {
if (e.key === "ArrowUp") increment(1);
if (e.key === "ArrowDown") decrement(1);
if (e.key === "r") reset();
};

window.addEventListener("keydown", keyHandler);
return () => window.removeEventListener("keydown", keyHandler);
}, [increment, decrement, reset]);
return (
<div className="app">
<div className="card">
<h1>Advanced Counter</h1>
<h2 aria-live="polite">{count}</h2>
<div className="buttons">
<Tooltip text="Increase by 1">
<CounterButton text="+1" onClick={() => increment(1)} />
</Tooltip>

<CounterButton text="+5" onClick={() => increment(5)} />
<CounterButton text="-1" onClick={() => decrement(1)}
disabled={count === 0} />
<CounterButton text="Undo" onClick={undo} />
<CounterButton text="Reset" onClick={reset} />
</div>

<Toast message={toast} />
<p style={{ fontSize: "12px" }}>↑ ↓ R supported</p>
</div>
</div>
);
}
export default App;