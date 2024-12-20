import {Page} from "../App";
import {useEffect, useState} from "react";

const Breadcrumbs = ({
    page,
    setPage
}: {
    page: Page;
    setPage: (page: Page) => void;
}) => {
    const [breadCrumbElements, setBreadCrumbElements] = useState<{name: string, onClick?: () => void}[]>([]);

    useEffect(() => {
        if (page === 'home') {
            setBreadCrumbElements([{name: "Home"}]);
        } else {
            setBreadCrumbElements([{name: "Home", onClick: () => setPage('home')}, {name: page}]);
        }
    }, [page])

    return <div className={`flex flex-row`}>
        {breadCrumbElements.map((element, index) => <div>
            <button onClick={() => element.onClick()} className={`cursor-pointer`}>
                {element.name}
            </button>{index >= breadCrumbElements.length - 1 ? '' : <span className={"px-2"}>{'>'}</span>}
        </div>)}
    </div>
}

export default Breadcrumbs;