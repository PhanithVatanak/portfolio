


const NavBar = () => {

    return (
        <nav className="bg-slate-800 text-white text-[18px] font-navFont xl:h-16 xl:flex xl:items-center">
            <div className="xl:flex xl:justify-between xl:w-full xl:mx-10">
                <div>
                    <h2 className="hover:text-blue-300 duration-[0.5s]"><a href="">_____NAK_____</a></h2>
                </div>
                <div className="xl:w-[600px]">
                    <ul className="xl:flex xl:justify-between">
                        <li className="hover:text-black duration-[0.5s] hover:bg-blue-300 hover:tracking-[0.10em] hover:shadow-lg hover:shadow-blue-300/50 w-[100px] text-center rounded-sm"><a href="#">Home</a></li>
                        <li className="hover:text-black duration-[0.5s] hover:bg-blue-300 hover:tracking-[0.10em] hover:shadow-lg hover:shadow-blue-300/50 w-[100px] text-center rounded-sm"><a href="#">About</a></li>
                        <li className="hover:text-black duration-[0.5s] hover:bg-blue-300 hover:tracking-[0.10em] hover:shadow-lg hover:shadow-blue-300/50 w-[100px] text-center rounded-sm"><a href="#">Education</a></li>
                        <li className="hover:text-black duration-[0.5s] hover:bg-blue-300 hover:tracking-[0.10em] hover:shadow-lg hover:shadow-blue-300/50 w-[100px] text-center rounded-sm"><a href="#">Skill</a></li>
                        <li className="hover:text-black duration-[0.5s] hover:bg-blue-300 hover:tracking-[0.10em] hover:shadow-lg hover:shadow-blue-300/50 w-[100px] text-center rounded-sm"><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;