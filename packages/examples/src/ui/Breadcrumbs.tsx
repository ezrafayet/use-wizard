const Breadcrumbs = ({
    elements,
}: {
    elements: {name: string, onClick?: () => void}[]
}) => {
    return <div className={`breadcrumbs`}>
        {elements.map((element, index) => <div>
            <button onClick={() => element.onClick()} className={`breadcrumbs__element ${element.onClick ? 'breadcrumbs__element--clickable' : ''}`}>
                {element.name}
            </button>{index >= elements.length - 1 ? '' : <span className={"breadcrumbs__separator"}>{'>'}</span>}
        </div>)}
    </div>
}

export default Breadcrumbs;