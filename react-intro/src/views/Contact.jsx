import { useContext } from "react";
import TodoItems from "../context/TodoContext";
import Header from "../components/Menu";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
const Contact = () => {
    return <>
        <Header title="Context" />
        <TodoItems>
            <TodoForm />
            <TodoList />
        </TodoItems>
    </>
}
export default Contact;

// context 
// redux