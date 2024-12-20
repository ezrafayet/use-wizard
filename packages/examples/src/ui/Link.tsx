
const Link = ({onClick, text}: {onClick: () => void, text: string}) => {
    return <a className={'link'} href="#" onClick={onClick}>{text}</a>;
};

export default Link;