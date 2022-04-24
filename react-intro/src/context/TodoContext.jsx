import {useReducer , createContext , useState} from 'react';

export const TodoContext = createContext();
const initialState = [
    {
        name: "Dummy",
        id: Math.random().toString().split('.')[1],
        completed: false
    }
]
const TodoItems = ({children}) => {
    const [isUpdate , setIsUpdate] = useState(false);
    const [updateTodo , setUpdateTodo] = useState(null);
    const todoReducer = (state = initialState , action) => {
        switch(action.type){
            case "INSERT":
                return [...state , {
                    name: action.name,
                    id: Math.random().toString().split('.')[1],
                    completed: false
                }]
            case "DELETE":
                return state.filter(todo => todo.id !== action.id);
            case "UPDATE":
                const updateList = [...state];
                const todoIndex = state.findIndex(todo => todo.id === action.id);

                updateList[todoIndex] = {
                    ...state[todoIndex],
                    ...(action.name ? {name: action.name} : {}),
                    ...(action.completed ? {completed: action.completed} : {})
                };
                return updateList;
            default: return state;
        }
    }
    const [todos , dispatchTodoAction] = useReducer(todoReducer , initialState);

    const contextValue = {
        todos,
        dispatchTodoAction,
        isUpdate,
        setIsUpdate,
        updateTodo,
        setUpdateTodo
    }

    return <TodoContext.Provider value={contextValue}>
        {children}
    </TodoContext.Provider>
}
export default TodoItems;