const AnimeCard = ({title , url}) => {
    return <div className="h-[250px] overflow-hidden rounded-md relative border border-[#999]">
        <img src={url} className="w-full h-full object-cover" alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-end text-white cursor-pointer p-4">
            <p>{title}</p>
        </div>
    </div>
}

export default AnimeCard;