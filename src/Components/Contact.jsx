const Contact = () => {

    return (
        <div className="contact bg-slate-800 flex justify-center items-center h-[350px] sm:flex sm:justify-center sm:items-center sm:h-[350px] md:flex md:justify-center md:items-center md:h-[666px] lg:flex lg:justify-center lg:items-center lg:h-[666px]">
            <div className="w-[330px] sm:w-[570px] md:w-[680px] lg:w-[650px]">
                <h1 className="text-center my-10 text-gray-300 font-bold text-[30px] font-navFont">CONTACT ME</h1>
                <div className="border-[1px] w-full h-[120px]">
                    <div className="border-[1px] rounded-md m-2">
                        <input className="bg-slate-900 w-full h-[38px] pl-3 text-[14px] font-bold text-gray-300 focus:outline-none border-blue-300" type="email" placeholder="Email"/>
                    </div>
                    <div className="flex flex-row justify-center my-5">
                        <div className="basic-1/2 border-[1px] rounded-md w-full mx-1 sm:mx-2">
                            <input className="bg-slate-900 w-full h-[38px] pl-3 text-[14px] font-bold text-gray-300 focus:outline-none border-blue-300" type="email" placeholder="Full Name"/>
                        </div>
                        <div className="basic-1/2 border-[1px] rounded-md w-full mx-1 sm:mx-2">
                            <input className="bg-slate-900 w-full h-[38px] pl-3 text-[14px] font-bold text-gray-300 focus:outline-none border-blue-300" type="text" placeholder="Telegram Username"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center h-12 items-center my-10">
                    <div className="flex justify-center bg-blue-600 rounded-md">
                        <button className="w-[110px] h-[40px]  text-center text-black font-bold text-[13px]"><a href="mailto:phanith.vatanak@gmail.com">SUBMIT</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;