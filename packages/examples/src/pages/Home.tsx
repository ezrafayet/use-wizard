const Home = ({
    setPage,
              }: any) => {
    return <div>
        <ul>
            <li>
                A linear wizard with numbered-steps (todo)<button onClick={() => setPage('linearNumbered')}>link</button>
            </li>
            <li>
                A linear wizard with named-steps (todo)
            </li>
            <li>
                A nested wizard (todo)
            </li>
            <li>
                A wizard with conditional steps (todo)
            </li>
            <li>
                A wizard using a react forms library (todo)
            </li>
        </ul>
    </div>
}

export default Home;
