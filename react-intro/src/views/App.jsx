import Header from "../components/Menu";
const vals = ["Ymar ng utga" , "bas ng utga" , "arai oor ng utga" , "blabla" , "gjdfkgjdflgjdfl"];
const App = () => {
    return <div className="w-full">
        {
            vals.map((el) => <Header title={el} />)
        }
    </div>
}

export default App;