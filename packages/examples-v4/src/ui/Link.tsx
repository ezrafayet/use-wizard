
const Link = ({url}: {url: string}) => {
    return <a className={'text-blue-600'} href={url}>{url}</a>;
};

export default Link;