import ButtonLink from "../ui/ButtonLink";

const Home = ({
    setPage,
              }: any) => {
    return <div>
        <ul>
            <li>
                <ButtonLink onClick={() => setPage("linearNumbered")} text={"A linear wizard with numbered-steps"}/>
            </li>
            <li>
                <ButtonLink onClick={() => setPage("linearNamed")} text={"A linear wizard with named-steps"}/>
            </li>
            <li>
                <ButtonLink onClick={() => setPage("nested")} text={"A nested wizard"}/>
            </li>
            <li>
                <ButtonLink onClick={() => setPage("conditional")} text={"A wizard with conditional steps "}/>
            </li>
            <li className={"text-gray-600"}>
                A wizard using a react forms library (example may come later)
            </li>
        </ul>
    </div>
}

export default Home;
