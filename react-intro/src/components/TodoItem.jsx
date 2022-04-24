import {FaTimes} from 'react-icons/fa';
import {BsPenFill} from 'react-icons/bs'
import Button from "./Button";
const TodoItem = ({name , deleteHandler , updateHandler}) => {
    return <li className="py-2 bg-gray-100 mb-4 px-4 flex w-full items-center justify-between">
        <p>{name}</p>
        <div className='flex gap-4'>
            <Button click={updateHandler} circle title={<BsPenFill />} />
            <Button click={deleteHandler} circle title={<FaTimes />} />
        </div>
    </li>
}
export default TodoItem;