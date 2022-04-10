const Button = ({title , color , light}) => {
    return <button className={`px-6 py-2 bg-[${color ? color : light ? '#fff' : '#333'}] rounded-md ${light ? 'text-[#333]' : 'text-white'} font-bold border-2 border-[${color ? color : '#333'}]`}>{title}</button>
}

export default Button;

// Button