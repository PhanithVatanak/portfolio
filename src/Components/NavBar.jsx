import { useEffect } from 'react';

const NavBar = () => {

    useEffect(() => {

        const btnNavBar = document.getElementById('btn_navbar');
        const btnNavBarUl = document.getElementById('navBar_ul');


        btnNavBar.addEventListener('click', () => {
            if ( btnNavBarUl.classList.contains('hidden')){
                btnNavBarUl.classList.remove('hidden');
                btnNavBarUl.classList.add('flex');

                console.log("work");
            }
        })
    })


    return (
        <nav id="navBar" className="bg-slate-900 text-white text-[18px] font-navFont flex md:h-16 my-4 md:my-0 md:flex md:items-center">
            <div className="flex flex-col justify-center w-full mx-3 md:flex md:flex-row md:justify-between md:w-full md:mx-3 lg:flex lg:flex-row lg:justify-between lg:w-full lg:mx-3">
                <div className="flex justify-between items-center">
                    <h2 className="hover:text-blue-300 duration-[0.5s]"><a href="">_____NAK_____</a></h2>
                    <div className="flex items-center mr-3">
                        <button id="btn_navbar" className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center mt-5 w-full md:mt-0 lg:w-[600px]">
                    <ul id="navBar_ul" className="hidden flex-col justify-center md:flex md:flex-row md:justify-between lg:flex lg:flex-row lg:justify-between">
                        <li className="hover:text-black duration-[0.5s] hover:bg-blue-300 hover:tracking-[0.10em] hover:shadow-lg hover:shadow-blue-300/50 w-[100px] text-center rounded-sm my-2"><a href="#">Home</a></li>
                        <li className="hover:text-black duration-[0.5s] hover:bg-blue-300 hover:tracking-[0.10em] hover:shadow-lg hover:shadow-blue-300/50 w-[100px] text-center rounded-sm my-2"><a href="#">About</a></li>
                        <li className="hover:text-black duration-[0.5s] hover:bg-blue-300 hover:tracking-[0.10em] hover:shadow-lg hover:shadow-blue-300/50 w-[100px] text-center rounded-sm my-2"><a href="#">Education</a></li>
                        <li className="hover:text-black duration-[0.5s] hover:bg-blue-300 hover:tracking-[0.10em] hover:shadow-lg hover:shadow-blue-300/50 w-[100px] text-center rounded-sm my-2"><a href="#">Skill</a></li>
                        <li className="hover:text-black duration-[0.5s] hover:bg-blue-300 hover:tracking-[0.10em] hover:shadow-lg hover:shadow-blue-300/50 w-[100px] text-center rounded-sm my-2"><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;