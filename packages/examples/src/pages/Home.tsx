import Link from "../ui/Link";

const Home = ({
    setPage,
              }: any) => {
    return <div>
        <ul>
            <li>
                <Link onClick={() => setPage("linearNumbered")} text={"A linear wizard with numbered-steps"}/>
            </li>
            <li>
                <Link onClick={() => setPage("linearNamed")} text={"A linear wizard with named-steps"}/>
            </li>
            <li>
                <Link onClick={() => setPage("nested")} text={"A nested wizard"}/>
            </li>
            <li>
                <Link onClick={() => setPage("conditional")} text={"A wizard with conditional steps "}/>
            </li>
            <li style={{
                color: 'gray'
            }}>
                A wizard using a react forms library (example coming later)
            </li>
        </ul>
    </div>
}

export default Home;
