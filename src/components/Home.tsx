

const Home = () => {
    return (
        <div className="flex flex-col gap-4 items-center p-4">
            <div className="flex flex-col sm:flex-row text-4xl sm:text-5xl md:text-7xl lg:text-8xl mt-12 sm:mt-16 md:mt-24">
                <div className="font-poppins text-[rgb(31,52,31)] font-[10px]">Reconnect in a</div>
                <div className="font-playfair italic text-[rgb(65,75,49)] opacity-95">&nbsp;Single Breath</div>
            </div>
            <div className="text-[rgb(99,95,48)] text-lg sm:text-xl text-center max-w-2xl">
                Lead with purpose, build boldly, and shape the future —your generation's moment is now.  <br />
                Own it. Drive it.
            </div>
            <div className="mt-6 sm:mt-8 md:mt-[26px] hover:scale-99   ">
                <button className="relative cursor-pointer  font-poppins z-50 bg-gradient-to-b from-[#5f764d] to-[#879e6d] text-white text-center items-center rounded-full px-6 py-3 outline-1 backdrop-blur-xl outline-[#5f764d]">
                    Unlock What's Next
                </button>
            </div>
        </div >
    )
}
export default Home;