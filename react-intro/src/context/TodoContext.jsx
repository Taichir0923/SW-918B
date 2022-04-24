import {useReducer , createContext} from 'react';

export const TodoContext = createContext();
const initialState = [
    {
        name: "Dummy",
        id: Math.random().toString().split('.')[1],
        completed: false
    }
]
const TodoItems = ({children}) => {
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
            default: return state;
        }
    }
    const [todos , dispatchTodoAction] = useReducer(todoReducer , initialState);

    const contextValue = {
        todos,
        dispatchTodoAction
    }

    return <TodoContext.Provider value={contextValue}>
        {children}
    </TodoContext.Provider>
}
export default TodoItems;