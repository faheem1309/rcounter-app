function CounterButton({ text, onClick, disabled }) {
return (
<button onClick={onClick} disabled={disabled}>
{text}
</button>
);
}
export default CounterButton;