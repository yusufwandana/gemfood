import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Hero extends Component {
    render(){
        return(
            <Fragment>
                <div className="bg-home bg-cover bg-no-repeat h-screen bg-center flex flex-col justify-center items-center overflow-hidden relative top-0">
                    <div className="bg-white opacity-95 border-4 border-black rounded-lg mx-2 px-4 mb-10  shadow-2xl">
                        <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-5xl font-black pt-2">
                            GemFood
                        </h1>
                        <h4 className="text-xl py-2">
                            Healthy, quality and tasty is our priority.
                        </h4>
                    </div>
                    <Link to="/" className="bg-yellow-300 border-4 border-black rounded-full text-2xl py-4 px-6 hover:bg-yellow-500 transition duration-300 ease-in-out flex items-center animate-bounce">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

export default Hero;
