import React, { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <p className="text-sm">
                    Copyright &copy; 2021 <a href="/" className="text-blue-400 hover:underline">GemFood</a>. 
                    All Right Reserved.
                </p>
            </div>
        </Fragment>
    )
}

export default Footer;
