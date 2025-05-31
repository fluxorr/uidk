import BgCircle from "./BgCircle"
import Mock3 from "../../assets/mock3.png"


function Home() {
    return (
        <div className="flex flex-col justify-center items-center mt-32 z-[999] "  >
            <div style={{ zIndex: "100" }} className="rounded-full flex items-center border-1 border-neutral-100/15 w-fit px-3 py-2 gap-2" >
                <div className="bg-[#9855FF] h-[18px] text-center flex items-center font-semibold w-fit rounded-full px-1 text-sm py-1.5 " >NEW</div>
                <div className="text-[#9855FF]" >Latest integration just arrived</div>
            </div>


            <div style={{ zIndex: "100" }} className=" font-inter text-[102px] leading-[94px] text-center tracking-[-0.0506em] bg-gradient-to-b from-white to-[#B372CF] bg-clip-text text-transparent z-0 pb-4" >
                <div  >Boost Your </div>
                <div>rankings with AI.</div>
            </div>

            <div style={{ zIndex: "100" }} className="text-white/80 text-[20px] items-center flex justify-center flex-col">
                <div>Elevate your site’s visibility effortlessly with AI,</div> <div>where smart technology meets user-friendly SEO tools.</div>
            </div>
            <button style={{ zIndex: "100" }} className="border-1  text-black/90 mt-8 hover:scale-101 transition-transform duration-300 border-neutral-100/40 w-fit h-fit px-2 py-2 rounded-[14px] cursor-pointer"  ><div className=" px-4 py-2 border-1 border-neutral-100/40  inset-0  bg-white  rounded-[10px] backdrop-blur-xs z-50 cursor-pointer " >Start for free</div></button>

            <BgCircle />
            <div className="rounded-[100%] border-1 border-neutral-100/4 h-[1032px] w-[1032px] absolute " style={{ zIndex: "90" }} ></div>

            <div className="rounded-[100%] border-3 border-dashed border-neutral-100/3 h-[800px] w-[800px] absolute " style={{ zIndex: "90" }} ></div>
            <div className="rounded-[100%] border-1  border-neutral-100/4 h-[565px] w-[565px] absolute " style={{ zIndex: "90" }} ></div>
            <img src={Mock3} draggable={false} alt="mock image of platform" style={{ zIndex: "100" }}
                className="shadow-2xl/25 rounded-b-lg  shadow-[#622A9A] "
            />

        </div >
    )
}

export default Home