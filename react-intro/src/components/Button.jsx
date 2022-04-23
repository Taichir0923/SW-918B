const Button = ({ title, color, light, click, circle }) => {
    return <button onClick={click} className={`bg-[${color ? color : light ? '#fff' : '#333'}] rounded-md ${light ? 'text-[#333]' : circle ? 'text-' + color + '-400' : 'text-white'} font-bold border-2 border-[${color ? color : '#333'}] ${circle ? "w-[40px] h-[40px] flex items-center justify-center rounded-full bg-opacity-40 hover:bg-opacity-100 hover:text-white" : "rounded-md px-6 py-2"} transition duration-300`}>{title}</button>
}

export default Button;

// Button