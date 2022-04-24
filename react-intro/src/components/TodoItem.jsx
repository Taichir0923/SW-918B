import {FaTimes} from 'react-icons/fa';
import Button from "./Button";
const TodoItem = ({name , deleteHandler}) => {
    return <li className="py-2 bg-gray-100 mb-4 px-4 flex w-full items-center justify-between">
        <p>{name}</p>
        <Button click={deleteHandler} circle title={<FaTimes />} />
    </li>
}
export default TodoItem;