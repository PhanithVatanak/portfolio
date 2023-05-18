import MY_PIC from '../assets/IMG_2930.jpg'


const Home = () => {

    return (
        <div id="home" className="bg-slate-800 ">
            <div className="flex flex-col justify-center mx-2 h-[850px] sm:flex sm:flex-row sm:justify-between sm:mx-4 sm:h-[400px] md:flex md:flex-row md:justify-between md:mx-10 md:h-[500px] lg:flex lg:flex-row lg:justify-between lg:mx-10 lg:h-[603px]">
                <div className="basis-1/2 flex items-center justify-center sm:basis-1/2 sm:flex sm:items-center sm:justify-center md:basis-1/2 md:flex md:items-center md:justify-center lg:basis-1/2 lg:flex lg:items-center lg:justify-center">
                    <div>
                        <div className="my-5 md:my-5">
                            <div className="my-5 md:my-5">
                                <h1 className="font-navFont text-gray-300 text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] font-semibold">Hi, I am PhanithVataNak</h1>
                                <h2 className="font-navFont text-gray-300 text-[17px] lg:text-[22px] font-semibold">Web Developer</h2>
                            </div>
                            <p className="text-gray-300 sm:w-[350px] sm:text-[9.5px] md:text-[10px] lg:text-[15px]">A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server.</p>
                        </div>
                        <div className="flex w-full justify-between my-4 sm:flex sm:w-1/2 sm:justify-between sm:my-4 md:flex md:w-1/2 md:justify-between md:my-10 lg:flex lg:w-1/2 lg:justify-between lg:my-10">
                            <div className="w-[150px] h-8 mx-2 sm:w-[190px] sm:h-8 sm:mx-2 md:w-[200px] md:h-10 md:mx-2 lg:w-[250px] lg:h-10 border-[1px] border-gray-700 duration-[0.5s] rounded-md">
                                <a href="#" className="w-full h-full flex justify-center items-center text-gray-300 border-gray-700 text-[15px] font-semibold rounded-md relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-blue-300 before:scale-x-0 before:transition-transform before:origin-left before:duration-500 hover:text-black hover:font-semibold hover:before:scale-x-100 hover:rounded-md">
                                    <span className="z-10">Talk</span>
                                </a>
                            </div>
                            <div className="w-[150px] h-8 mx-2 sm:w-[190px] sm:h-8 sm:mx-2 md:w-[200px] md:h-10 md:mx-2 lg:w-[250px] lg:h-10 border-[1px] border-gray-700 bg-blue-300 flex justify-center items-center duration-[0.5s] rounded-md">
                                <a href="#" className="w-full h-full flex justify-center items-center text-black text-[15px] font-semibold rounded-md relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-700 before:scale-x-0 before:transition-transform before:origin-left before:duration-500 hover:text-gray-300 hover:font-semibold hover:before:scale-x-100">
                                    <span className="z-10">Hire me</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center sm:w-[110px] sm:flex sm:justify-between md:w-[130px] md:flex md:justify-between lg:w-[150px] lg:flex lg:justify-between">
                            <div className="m-3">
                                <a href="">
                                    <svg className="h-7 hover:bg-white hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                                </a>
                            </div>
                            <div className="m-3">
                                <a href="https://t.me/phanithvatanak" target="blank">
                                    <svg className="h-7 hover:bg-white hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
                                </a>
                            </div>
                            <div className="m-3">
                                <a href="https://github.com/PhanithVatanak" target="blank">
                                    <svg className="h-7 hover:bg-white hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2 sm:basis-1/2 sm:flex sm:justify-center sm:items-center">
                    <div>
                        <img className="lg:h-[450px] rounded-md" src={MY_PIC} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;