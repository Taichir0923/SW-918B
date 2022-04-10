const Input = ({place , type}) => {
    return <input className="border w-full rounded-md focus:outline-none focus:border-green-400 border-[#ccc] py-2 px-4" placeholder={place} type={type} />
}

export default Input;