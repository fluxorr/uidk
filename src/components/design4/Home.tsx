

function Home() {
    return (
        <div className="flex flex-col justify-center items-center mt-32  " >
            <div className="rounded-full flex items-center border-1 border-neutral-100/15 w-fit px-3 py-2 gap-2" >
                <div className="bg-[#9855FF] h-[18px] text-center flex items-center font-semibold w-fit rounded-full px-1 text-sm py-1.5 " >NEW</div>
                <div className="text-[#9855FF]" >Latest integration just arrived</div>
            </div>


            <div className=" font-medium text-[102px] leading-[94px] text-center tracking-[-0.0506em] bg-gradient-to-b from-white to-[#B372CF] bg-clip-text text-transparent z-0 pb-4" >
                <div>Boost Your </div>
                <div>rankings with AI.</div>
            </div>

            <div className="text-white/80 text-[20px] items-center flex justify-center flex-col">
                <div>Elevate your site’s visibility effortlessly with AI,</div> <div>where smart technology meets user-friendly SEO tools.</div>
            </div>
            <button className="border-1  text-black/60 mt-8 hover:scale-101 transition-transform duration-300 border-neutral-100/40 w-fit h-fit px-2 py-2 rounded-[14px] cursor-pointer" ><div className=" px-4 py-2 border-1 border-neutral-100/40  inset-0  bg-white  rounded-[10px] backdrop-blur-xs" >Start for free</div></button>

        </div >
    )
}

export default Home