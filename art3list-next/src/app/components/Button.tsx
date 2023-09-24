// @ts-ignore
export function Button ({type, color, text, classes}) {
    return <button type={type} className={`text-${color}-700 ${classes}`}>
        {text}
    </button>
}