const Contact = () => {

    return (
        <div className="bg-slate-800 xl:flex xl:justify-center xl:h-[666px]">
            <div className="w-[600px]">
                <h1 className="text-center my-10 text-gray-300 font-bold text-[30px]">CONTACT ME</h1>
                <div className="border-[1px] w-full h-[395px]">
                    <div className="border-[1px] rounded-md m-2">
                        <input className="bg-slate-900 w-full h-[38px] pl-3 text-[14px] font-bold text-gray-300 focus:outline-none border-blue-300" type="email" placeholder="Email"/>
                    </div>
                    <div className="flex flex-row justify-center my-5">
                        <div className="basic-1/2 border-[1px] rounded-md w-full mx-2">
                            <input className="bg-slate-900 w-full h-[38px] pl-3 text-[14px] font-bold text-gray-300 focus:outline-none border-blue-300" type="email" placeholder="Full Name"/>
                        </div>
                        <div className="basic-1/2 border-[1px] rounded-md w-full mx-2">
                            <input className="bg-slate-900 w-full h-[38px] pl-3 text-[14px] font-bold text-gray-300 focus:outline-none border-blue-300" type="text" placeholder="Telegram Username"/>
                        </div>
                    </div>
                    <div className="border-[1px] rounded-md mx-2">
                        <textarea className="bg-slate-900 w-full h-[250px] pl-3 text-[14px] font-bold text-gray-300 focus:outline-none border-blue-300" name="text" id="" cols="50" rows="15" placeholder="Message"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;