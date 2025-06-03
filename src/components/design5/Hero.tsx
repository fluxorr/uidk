
import Zelcore from "../../assets/companies/zelcore.png"
import Coinex from "../../assets/companies/Coinex.png"
import Onekey from "../../assets/companies/Onekey.png"


function Hero() {
    return (
        <div className="text-white w-[661px] h-[245px] text-left mt-[133px] ml-[69px] " >
            <div className=" font-inter text-[70px] tracking-[-5%] leading-20 font-[600] " >
                What If Your Storage
                Could Think Ahead?
            </div>
            <div className="font-geist text-[18px] text-neutral-100/60 mt-2  " >
                DeepKeep AI gives you encrypted, long-term storage that doesn't
                forget,organizing your files with context-aware intelligence
            </div>
            <button className="mt-12 bg-white  text-black h-[40px] w-[185px] tracking-[-4%] px-[8px] py-[2px] rounded-lg cursor-pointer hover:scale-99 " >Get Early Access →</button>

            <div className=" mt-[288px] flex gap-[50px]  w-[461px] h-[25.74px] " >
                <img src={Coinex} height={25.72} width={128.59} alt="Coinex logo" />
                <img src={Zelcore} height={25.72} width={128.59} alt="Zelcore logo" />
                <img src={Onekey} height={25.72} width={128.59} alt="Onekey  logo" />
            </div>
        </div>
    )
}

export default Hero