import {useEffect, useState} from "react";
import Home from "./pages/Home";
import LinearNumberedWizard from "./pages/LinearNumberedWizard";
import Breadcrumbs from "./ui/Breadcrumbs";
import LinearNamedWizard from "./pages/LinearNamedWizard";
import NestedWizard from "./pages/NestedWizard";
import ConditionalWizard from "./pages/ConditionalWizard";

type Page = 'home' | 'linearNumbered' | 'linearNamed' | 'nested' | 'conditional';

const App = () => {
    const [page, setPage] = useState<Page>('home');
    const [breadCrumbElements, setBreadCrumbElements] = useState<{name: string, onClick?: () => void}[]>([]);

    useEffect(() => {
        if (page === 'home') {
            setBreadCrumbElements([{name: "Home"}]);
        } else {
            setBreadCrumbElements([{name: "Home", onClick: () => setPage('home')}, {name: page}]);
        }
    }, [page])

    return (
        <main className={"main"}>
            <div className={"header"}>
                <Breadcrumbs elements={breadCrumbElements} />
                <h1 className={"header__title"}>Examples of usage for use-wizard</h1>
                <div className={"header__link"}>Check the code at: <a className={"link"} href={"https://github.com/ezrafayet/use-wizard"}>https://github.com/ezrafayet/use-wizard</a></div>
            </div>
            <div className={"content"}>
                {page === 'home' && <Home setPage={setPage} />}
                {page === 'linearNumbered' && <LinearNumberedWizard/>}
                {page === 'linearNamed' && <LinearNamedWizard/>}
                {page === 'nested' && <NestedWizard />}
                {page === 'conditional' && <ConditionalWizard/>}
            </div>
        </main>
    );
};

export default App;

export {Page};