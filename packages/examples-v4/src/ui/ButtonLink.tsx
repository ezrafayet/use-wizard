const ButtonLink = ({text, onClick}: { text: string, onClick: () => void }) => {
    return <button className={"text-blue-600 cursor-pointer"} onClick={onClick}>
        {text}
    </button>
}

export default ButtonLink;