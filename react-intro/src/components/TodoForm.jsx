import { useState , useEffect } from "react";
import useTodoContext from "../hooks/useTodoContext";
import Input from "./Input";
import Button from "./Button";

const TodoForm = () => {
    const {dispatchTodoAction , isUpdate , updateTodo , setIsUpdate} = useTodoContext();
    const [todoName , setTodoName] = useState("");

    const insertHandler = () => {
        dispatchTodoAction({
            type: "INSERT",
            name: todoName
        });
        setTodoName("");
    }

    const keyBoardHandler = event => {
        if(event.key === "Enter"){
            if(!isUpdate){
                insertHandler();
            }
        }
    }

    const updateHandle = () => {
        dispatchTodoAction({
            type: "UPDATE",
            name: todoName,
            id: updateTodo.id
        });
        setIsUpdate(false);
        setTodoName("")
    }

    useEffect(() => {
        if(isUpdate){
            setTodoName(updateTodo?.name)
        } else {
            setTodoName("")
        }
    } , [isUpdate , updateTodo?.name])

    return <div className="p-4 mb-4 gap-3 rounded-xl shadow-xl flex items-center bg-white">
        <Input press={keyBoardHandler} value={todoName} change={e => setTodoName(e.target.value)} place="Todo name" />
        <Button click={isUpdate ? updateHandle : insertHandler} title={isUpdate ? "Update" :"Insert"} />
    </div>
}
export default TodoForm;