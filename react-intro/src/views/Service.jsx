import { Fragment , useState , useReducer } from 'react';
import Header from '../components/Menu';
import Container from '../components/Container';
import Input from '../components/Input';
import Button from '../components/Button';
import {FaTimes} from 'react-icons/fa';
import {BsPencil} from 'react-icons/bs';

const Service = () => {
    const [enteredTodoName , setEnteredTodoName] = useState("");

    const todoReducer = (state = [] , action) => {
        switch(action.type){
            case "INSERT_TODO":
                return [...state , {
                    todo: action.title,
                    id: Math.random().toString().split('.')[1],
                    completed: false
                }];
            case "DELETE_TODO":
                return state.filter(el => el.id !== action.id);
            default: return state;
        }
    }

    const [todoList , dispatchTodoAction] = useReducer(todoReducer , []);

    const todoHandler = () => {
        dispatchTodoAction({
            type: "INSERT_TODO",
            title: enteredTodoName
        })
    };

    const deleteTodo = (id) => {
        dispatchTodoAction({
            type: "DELETE_TODO",
            id: id
        })
    }
    return <Fragment>
        <Header title="Service" />
        <main className='w-full'>
            <Container>
                <div className="form flex my-4 gap-4 items-center">
                    <Input value={enteredTodoName} change={e => setEnteredTodoName(e.target.value)} place="Todo name" />
                    <Button click={todoHandler} title="Insert" />
                </div>
                <div className='w-full'>
                    {
                        todoList.length === 0 ? <p>Empty</p> :
                        todoList.map(todo => (
                            <div key={todo.id} className='py-2 px-4 rounded-md bg-gray-100 font-bold text-[#333] mb-4 flex items-center justify-between'>
                                <p>
                                    {todo.todo}
                                </p>
                                <div className='flex items-center gap-2'>
                                    <Button click={() => deleteTodo(todo.id)} circle color="red" title={<FaTimes />} />

                                    <Button circle color="green" title={<BsPencil />} />
                                </div>
                                
                                    
                            </div>
                        ))
                    }
                </div>
            </Container>
        </main>
    </Fragment>
}

export default Service;