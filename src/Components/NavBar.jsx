import { Link } from 'react-scroll'
import { useState } from 'react'


const NavBar = () => {

    const [mobile, setMobile] = useState(false)
    const handleNavbarClick = () => {
        setMobile(!mobile)
    }

    return (
        <nav id="navBar" className="bg-slate-900 text-white text-[17px] font-navFont flex md:h-16 my-4 md:my-0 md:flex md:items-center">
            <div className="flex flex-col justify-center w-full mx-3 md:flex md:flex-row md:justify-between md:w-full md:mx-3 lg:flex lg:flex-row lg:justify-between lg:w-full lg:mx-3">
                <div className="flex justify-between items-center mt-4">
                    <h2 className="hover:text-blue-300 duration-[0.5s]"><a href="">__NAK__</a></h2>
                    <div className="flex items-center mr-3 duration-500 md:hidden lg:hidden xd:hidden" onClick={handleNavbarClick}>
                        { mobile ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i> }
                    </div>
                </div>
                <div className="flex justify-center mt-5 w-full md:mt-0 lg:w-[600px]">
                    <ul className={ mobile ? "flex flex-col justify-center items-center duration-500 ease-out" : "hidden flex-col justify-center md:flex md:flex-row md:justify-between lg:flex lg:flex-row lg:justify-between" }>
                        <li className="duration-[0.5s] hover:text-blue-300 w-[100px] text-center rounded-sm my-2 "><Link className="cursor-pointer" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                        <li className="duration-[0.5s] hover:text-blue-300 w-[100px] text-center rounded-sm my-2 "><Link className="cursor-pointer" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                        <li className="duration-[0.5s] hover:text-blue-300 w-[100px] text-center rounded-sm my-2 "><Link className="cursor-pointer" to="education" spy={true} smooth={true} offset={50} duration={500}>Education</Link></li>
                        <li className="duration-[0.5s] hover:text-blue-300 w-[100px] text-center rounded-sm my-2 "><Link className="cursor-pointer" to="skill" spy={true} smooth={true} offset={50} duration={500}>Skill</Link></li>
                        <li className="duration-[0.5s] hover:text-blue-300 w-[100px] text-center rounded-sm my-2 "><Link className="cursor-pointer" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;