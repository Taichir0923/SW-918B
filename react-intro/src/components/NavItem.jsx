import { Link } from "react-router-dom";
const NavItem = (props) => {
    return <Link to={props.path}>
        <li className="py-3 px-6 font-bold duration-300 hover:bg-white hover:text-red-400 cursor-pointer">
            {props.title}
        </li>
    </Link>
}

export default NavItem