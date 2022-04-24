import TodoItems from "../context/TodoContext";
import Header from "../components/Menu";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import Container from "../components/Container";
const Contact = () => {
    return <>
        <Header title="Context" />
        <TodoItems>
            <Container>
                <TodoForm />
                <TodoList />
            </Container>
        </TodoItems>
    </>
}
export default Contact;

// context 
// redux