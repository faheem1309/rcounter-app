function Tooltip({ text, children }) {
return (
<span title={text}>
{children}
</span>
);
}
export default Tooltip;