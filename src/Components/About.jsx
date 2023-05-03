const About = () => {

    return (
        <div className=" bg-slate-800 xl:flex xl:text-center xl:items-center xl:h-[668px]">
            <div className="">
                <div>
                    <div className="my-8">
                        <h2 className="text-[40px] font-semibold text-gray-300">ABOUT ME</h2>
                    </div>
                    <div className="flex justify-center my-8">
                        <img className="h-[150px] rounded-full" src="https://i.pinimg.com/564x/8f/e1/91/8fe1911709a5f2db43852e8acc174e9d.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className="text-[25px] font-semibold text-gray-300">Web Developer ! </h3>
                    </div>
                    <div className="my-8 flex justify-center text-center">
                        <p className="text-[15px] text-gray-300 px-24">I am early twenty year old. Now I am year 3 student at Norton University majoring in Computer Science. I am confident that my qualification and skill will make significant contributions to the company.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;