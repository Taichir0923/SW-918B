import useTodoContext from "../hooks/useTodoContext";
import TodoItem from "./TodoItem";
const TodoList = () => {
    const { todos, dispatchTodoAction } = useTodoContext();
    const deleteHandler = (id) => {
        dispatchTodoAction({
            type: "DELETE",
            id: id
        })
    }
    return <ul>
        {
            todos.length !== 0 ? todos.map(todo => (
                <TodoItem deleteHandler={() => deleteHandler(todo.id)} key={todo.id} name={todo.name} />
            )) : <p>Empty</p>
        }
    </ul>
}
export default TodoList;