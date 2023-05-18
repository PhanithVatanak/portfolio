import MY_PROFILE from '../assets/IMG_2930.jpg'


const About = () => {

    return (
        <div className="about bg-slate-800 flex text-center items-center h-[500px] sm:flex sm:text-center sm:items-center sm:h-[450px] md:flex md:text-center md:items-center md:h-[500px] lg:flex lg:text-center lg:items-center lg:h-[668px]">
            <div className="">
                <div>
                    <div className="my-8">
                        <h2 className="font-navFont md:text-[35px] lg:text-[40px] font-semibold text-gray-300">ABOUT ME</h2>
                    </div>
                    <div className="flex justify-center my-8">
                        <img className="h-[150px] rounded-md" src={ MY_PROFILE } alt="" />
                    </div>
                    <div>
                        <h3 className="md:text-[20px] lg:text-[25px] font-semibold text-gray-300 font-navFont">Web Developer</h3>
                    </div>
                    <div className="my-8 flex justify-center text-center">
                        <p className="w-[80%] md:text-[12px] lg:text-[15px] text-gray-300 sm:px-24">I am early twenty year old. Now I am year 3 student at Norton University majoring in Computer Science. I am confident that my qualification and skill will make significant contributions to the company.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;