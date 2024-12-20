const WizardCard = ({
                        title,
                        children,
                        footer
                    }: {
    title: string;
    children: any;
    footer: any;
}) => {
    return <div>
        <div>{title}</div>
        {children}
        {footer}
    </div>
}

export default WizardCard;