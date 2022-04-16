import NavItem from "./NavItem";
const Navigation = props => {
    return <div>
        <ul className="font-bold md:flex text-xl px-4 hidden items-center">
            {
                props.items?.map((item , index) => {
                    return <NavItem key={`item-${index}`} title={item} />
                })
            }
        </ul>
        <div className="p-4 md:hidden">
            <div className="w-[30px] h-[30px] flex items-center">
                <div className="w-full h-[2px] bg-white relative before:absolute before:w-full before:h-full before:left-0 before:top-2 before:bg-white after:absolute after:w-full after:h-full after:left-0 after:bottom-2 after:bg-white"></div>
            </div>
        </div>
    </div>
}

export default Navigation;