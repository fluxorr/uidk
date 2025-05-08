

const Navbar = () => {

    return (
        <div className="my-4 sm:my-6 md:my-8 flex flex-col mx-4 sm:flex-row justify-evenly items-center w-full sm:w-[90%] md:w-[900px] h-auto sm:h-[70px] gap-4 sm:gap-6 md:gap-8 text-center rounded-2xl bg-[rgb(157,153,133)]/20 p-4 sm:p-0">
            <div className="flex-1 text-left px-2 sm:px-4 md:px-6  text-[rgb(29,77,31)] font-ptserif italic text-2xl">
                nat*
            </div>

            <div className="flex-1 flex justify-center font-poppins gap-4 sm:gap-6">
                <div className="opacity-70 cursor-pointer hover:opacity-55 hover:scale-102 ">
                    home
                </div>
                <div className="opacity-30 cursor-pointer hover:opacity-55 hover:scale-102  ">
                    working
                </div>
                <div className="opacity-30 cursor-pointer hover:opacity-55 hover:scale-102">
                    pricing
                </div>
            </div>

            <div className="flex-1 flex justify-end px-2 sm:px-3">
                <button className="bg-[rgb(58,72,37)] font-opensans hover:bg-[rgb(53,66,34)] cursor-pointer w-fit text-white text-sm sm:text-[14px] px-4 sm:px-6 py-2 sm:py-4 rounded-xl tracking-widest">
                    Get Started
                </button>
            </div>
        </div>
    )
}



export default Navbar;