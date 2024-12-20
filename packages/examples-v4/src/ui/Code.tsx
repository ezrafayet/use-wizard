const Code = ({title, children}: {
    title: string
    children: any
}) => {
    return <div className={"text-center max-w-96 m-auto"}>
        <div className={"text-gray-500 mb-0.5"}>{title}</div>
        <code className={"block bg-gray-300 px-5 py-4 text-sm"}>
            {children}
        </code>
    </div>
};

export default Code;