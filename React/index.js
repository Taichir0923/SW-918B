const container = document.querySelector("#root");
// tagNer , attr , content
const ChildComponent = ({ content, title }) => {
    return <div style={{ borderBottom: "1px solid #000" }}>
        <h1>{title}</h1>
        <h1>{content}</h1>
    </div>
}

const Test = () => {
    return <div>
        <ChildComponent title="garchig" content="ehnii content" />
        <ChildComponent content="2 dahi content" />
        <h1>hjkfd</h1>
    </div>
}

// component , container
ReactDOM.render(<Test />, container);