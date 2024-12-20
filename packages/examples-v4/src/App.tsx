import {useState} from "react";
import Home from "./pages/Home";
import LinearNumberedWizard from "./pages/LinearNumberedWizard";
import Breadcrumbs from "./ui/Breadcrumbs";
import LinearNamedWizard from "./pages/LinearNamedWizard";
import NestedWizard from "./pages/NestedWizard";
import ConditionalWizard from "./pages/ConditionalWizard";
import Link from "./ui/Link";
import Space from "./ui/Space";

type Page = 'home' | 'linearNumbered' | 'linearNamed' | 'nested' | 'conditional';

const App = () => {
    const [page, setPage] = useState<Page>('home');

    return (
        <main className={"flex flex-col w-full max-w-screen-md m-auto"}>
            <div className={"bg-gray-950 text-white px-2 py-2"}>
                <Breadcrumbs page={page} setPage={setPage} />
                <div className={"mt-0.1"}></div>
                <div className={"text-xl"}>Example of wizards built with use-wizard</div>
            </div>
            <Space />
            <div>
                {page === 'home' && <Home setPage={setPage} />}
                {page === 'linearNumbered' && <LinearNumberedWizard/>}
                {page === 'linearNamed' && <LinearNamedWizard/>}
                {page === 'nested' && <NestedWizard />}
                {page === 'conditional' && <ConditionalWizard/>}
            </div>
            <Space />
            <div className={"border-t-2 text-center py-5"}>
                Check the code at: <Link url={"https://github.com/ezrafayet/use-wizard"}/>
            </div>
        </main>
    );
};

export default App;

export {Page};
