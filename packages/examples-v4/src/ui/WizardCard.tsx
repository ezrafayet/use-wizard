const WizardCard = ({title, children, footer}: {
    title: string
    children: any
    footer: any
}) => {
    return <div className={"flex flex-col justify-center items-center"}>
        <div className={"font-extrabold text-xl"}>{title}</div>
        <div className={"h-32 flex flex-col justify-center items-center"}>{children}</div>
        <div className={"h-10 "}>{footer}</div>
    </div>
}

export default WizardCard;