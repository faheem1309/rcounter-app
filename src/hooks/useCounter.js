import { useEffect, useState } from "react";
const MAX = 100;
export default function useCounter() {
const [count, setCount] = useState(() => {
const saved = localStorage.getItem("count");
return saved ? Number(saved) : 0;
});
const [history, setHistory] = useState([]);
useEffect(() => {
localStorage.setItem("count", count);
}, [count]);
const update = (value) => {
setHistory((h) => [...h, count]);
setCount(value);
};

const increment = (step) => update(Math.min(count + step, MAX));
const decrement = (step) => update(Math.max(count - step, 0));
const reset = () => update(0);
const undo = () => {
if (!history.length) return;
const prev = history[history.length - 1];
setHistory(history.slice(0, -1));
setCount(prev);
};
return { count, increment, decrement, reset, undo };
}
