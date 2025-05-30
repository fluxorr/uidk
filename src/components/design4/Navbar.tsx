import Orb from "../../assets/orb.png"

const DropDown = () => {
    return (
        <svg className="" width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1845 1.55953L5.80953 5.93453C5.7689 5.97521 5.72065 6.00748 5.66754 6.02949C5.61442 6.05151 5.55749 6.06284 5.5 6.06284C5.4425 6.06284 5.38557 6.05151 5.33246 6.02949C5.27935 6.00748 5.2311 5.97521 5.19047 5.93453L0.815468 1.55953C0.733375 1.47744 0.687256 1.3661 0.687256 1.25C0.687256 1.1339 0.733375 1.02256 0.815468 0.940468C0.897561 0.858375 1.0089 0.812256 1.125 0.812256C1.2411 0.812256 1.35244 0.858375 1.43453 0.940468L5.5 5.00648L9.56547 0.940468C9.60612 0.899819 9.65437 0.867576 9.70748 0.845577C9.76059 0.823578 9.81751 0.812256 9.875 0.812256C9.93248 0.812256 9.98941 0.823578 10.0425 0.845577C10.0956 0.867576 10.1439 0.899819 10.1845 0.940468C10.2252 0.981116 10.2574 1.02937 10.2794 1.08248C10.3014 1.13559 10.3127 1.19251 10.3127 1.25C10.3127 1.30748 10.3014 1.36441 10.2794 1.41752C10.2574 1.47063 10.2252 1.51888 10.1845 1.55953Z" fill="white" fillOpacity={0.5} />
        </svg>
    )
}

function Navbar() {
    return (

        <nav className="" >
            <div className="flex justify-center gap-40 items-center py-4 text-white/50   " >


                <div>
                    <img src={Orb} height={38} width={38} alt="orbicon" />
                </div>


                <div className="flex gap-8 items-center  border-white/15 rounded-full border-1 px-12 py-3 " >
                    <div className="flex items-center gap-2 cursor-pointer hover:text-white/80" >Features <DropDown /></div>
                    <div className="cursor-pointer hover:text-white/80 " >Developers</div>
                    <div className="flex items-center gap-2 cursor-pointer hover:text-white/80" >  Company <DropDown /></div>
                    <div className="cursor-pointer hover:text-white/80" >Blog</div>
                    <div className="cursor-pointer hover:text-white/80" >Changelog</div>
                </div>


                <button className="border-1  text-white/60 hover:scale-101 transition-transform duration-300 border-neutral-100/40 w-fit h-fit px-1 py-1 rounded-[14px] cursor-pointer" ><div className=" px-2 py-1 border-1 border-neutral-100/40  inset-0  bg-[#843afc] rounded-[10px] backdrop-blur-xs hover:text-white/80" >Join Waitlist</div></button>




            </div>
            <hr className="border-white/15 " />
        </nav >
    )
}

export default Navbar