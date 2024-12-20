import {useState} from "react";
import Home from "./pages/Home";
import LinearNumberedWizard from "./pages/LinearNumberedWizard";

type Page = 'home' | 'linearNumbered';

const App = () => {
    const [page, setPage] = useState<Page>('home');
    return (
        <div>
            <h1>Examples of usage for use-wizard</h1>
            <button onClick={() => setPage('home')}>Back</button>
            {page === 'home' && <Home setPage={setPage} />}
            {page === 'linearNumbered' && <LinearNumberedWizard/>}
        </div>
    );
};

export default App;
