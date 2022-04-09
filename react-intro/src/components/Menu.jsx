const Header = (props) => {
    return <header className="w-full text-white bg-red-400 flex items-center justify-between">
        <h1 className="font-bold text-xl px-4">{props.title}</h1>
        <ul className="flex items-center">
            <li className="py-3 px-6 font-bold">home</li>
            <li className="py-3 px-6 font-bold">home</li>
            <li className="py-3 px-6 font-bold">home</li>
            <li className="py-3 px-6 font-bold">home</li>
        </ul>
    </header>
}

export default Header;