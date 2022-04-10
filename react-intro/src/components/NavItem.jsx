const NavItem = (props) => {
    return <li className="py-3 px-6 font-bold duration-300 hover:bg-white hover:text-red-400 cursor-pointer">
        {props.title}
    </li>
}

export default NavItem