const Button = ({text, onClick, disabled}: {
    text: string
    onClick: () => void
    disabled?: boolean
}) => {
    return <button className={`bg-black relative opacity-0 text-white px-4 py-1.5 mx-1 cursor-pointer buttonAnimation ${disabled && 'bg-gray-500'}`}
                   disabled={disabled} onClick={onClick}>
        {text}
    </button>
};

export default Button;
