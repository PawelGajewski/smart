const Button = ({ text, onClick, color, onAdd }) => {
    return (
        <button style={{ backgroundColor: color}} className="btn" onClick={onAdd}>
            <h2>{ text }</h2>
        </button>
    )
}

export default Button
