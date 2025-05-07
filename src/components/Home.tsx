
const Home = () => {
    return (
        <div className="flex flex-col gap-4 items-center" >
            <div className="flex flex-row text-8xl mt-24 " >
                <div className="font-poppins  text-[rgb(31,52,31)] font-[10px] " >Reconnect in a</div>
                <div className="font-playfair italic text-[rgb(65,75,49)] opacity-95  " >
                    &nbsp;Single Breath
                </div>
            </div>
            <div className="text-[rgb(99,95,48)] text-xl text-center " >
                Lead with purpose, build boldly, and shape the future —your generation's moment is now.  <br />
                Own it. Drive it.
            </div>
            <div className="mt-[26px] ">
                <button className="relative  font-poppins z-50 bg-gradient-to-b from-[#5f764d] to-[#879e6d] text-white text-center items-center rounded-full px-6 py-3  outline-1 backdrop-blur-xl outline-[#5f764d]">
                    Unlock What's Next
                </button>
            </div>

        </div >
    );
}

export default Home;



