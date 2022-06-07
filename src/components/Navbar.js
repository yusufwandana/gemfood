import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({toggle}) => {
    
    // const [navbar, setNavbar] = useState(false)

    // const changeScroll = () => {
    //     if (window.scrollY >= 80) {
    //         setNavbar(true)
    //     }else{
    //         setNavbar(false)
    //     }
    // }

    // window.addEventListener('scroll', changeScroll)

    return (
        <nav className="navbar" role="navigation">
            <p to="/" className="text-white font-bold text-xl mx-5 rounded-md pointer-events-none">GemFood</p>
            <div className="px-4 cursor-pointer md:hidden text-white" onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4  6h16M4 12h16M4 18h16"/></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="navbar-link" to="/">Home</Link>
                <Link className="navbar-link" to="/product">Product</Link>
                <Link className="navbar-link" to="/about">About</Link>
                <Link className="navbar-link" to="/contact">Contact</Link>
            </div>
        </nav>   
    )
}

export default Navbar;
