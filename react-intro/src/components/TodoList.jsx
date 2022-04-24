import useTodoContext from "../hooks/useTodoContext";
import TodoItem from "./TodoItem";
const TodoList = () => {
    const { todos, dispatchTodoAction , setIsUpdate , setUpdateTodo } = useTodoContext();
    const deleteHandler = (id) => {
        dispatchTodoAction({
            type: "DELETE",
            id: id
        })
    }
    const editMode = (todo) => {
        setIsUpdate(true);
        setUpdateTodo(todo);
    }
    return <ul>
        {
            todos.length !== 0 ? todos.map(todo => (
                <TodoItem updateHandler={() => editMode(todo)} deleteHandler={() => deleteHandler(todo.id)} key={todo.id} name={todo.name} />
            )) : <p>Empty</p>
        }
    </ul>
}
export default TodoList;