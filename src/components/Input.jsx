
export function Input (props){
    const { type, onChange, name, placeholder, className } = props;
    return (
        <input
        type={ type }
        onChange = { onChange }
        name = { name }
        placeholder = { placeholder }
        className = { className }
        />
    )
 
}