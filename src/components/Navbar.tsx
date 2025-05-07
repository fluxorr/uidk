const Navbar = () => {
    return (
        <div className="  my-8 flex-row justify-evenly items-center flex w-[900px] h-[70px] gap-8 text-center rounded-2xl bg-[rgb(157,153,133)]/20 " >
            <div className="flex-1 text-left px-6  text-[rgb(29,77,31)] font-ptserif italic text-2xl " >
                nat*
            </div>

            <div className="flex-1 flex justify-center  font-poppins   gap-6" >
                <div className="opacity-70 cursor-pointer hover:opacity-55 hover:scale-102 " >
                    home
                </div>
                <div className="opacity-30 cursor-pointer hover:opacity-55 hover:scale-102" >
                    working
                </div>
                <div className="opacity-30 cursor-pointer hover:opacity-55 hover:scale-102" >
                    pricing
                </div>
            </div>

            <div className="flex-1 flex justify-end px-3 font-sans hover:scale-99  " >
                <button className="bg-[rgb(58,72,37)] font-opensans hover:bg-[rgb(53,66,34)] cursor-pointer w-fit text-white text-[14px] px-6 py-4 rounded-xl  tracking-widest " >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Navbar;