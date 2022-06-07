import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h3 className="text-3xl uppercase font-bold mb-2">{props.title}</h3>
            <div className="border-t-4 border-black w-28 mb-5"></div>
        </div>
    )
}

export default SectionTitle
