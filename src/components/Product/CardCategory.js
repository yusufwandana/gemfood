import React    from 'react'

const CardCategory = (props) => {
    return (
        <div className="flex flex-col justify-center items-center box-content font-bold p-4">
            <img src={props.image} className="object-cover h-56 w-full rounded-xl shadow-xl" alt="" />
            <span className="absolute text-2xl border-2 border-white text-white bg-black bg-opacity-60 p-3 rounded-lg cursor-default hover:bg-opacity-90 transition duration-300">
                {props.name}
            </span>
        </div>
    )
}

export default CardCategory
