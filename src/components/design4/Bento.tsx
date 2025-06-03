import Cone from "../../assets/companies/svg/Cone"
import Ring from "../../assets/companies/svg/Ring"
import DashBoard from "../../assets/companies/bentostuff/dashboard.png"
import VisualReports from "../../assets/companies/bentostuff/visualreports.png"

export default function Bento() {
    return (
        <div className="min-h-screen p-6 flex flex-col  items-center mt-[120px]  ">

            <div className="text-white text-4xl text-center max-w-[553px] mb-[60px] " >Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</div>
            {/* Bento */}
            <div className="max-w-[1110px]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-8">


                <div className=" max-w-[346px] bg-black text-white border-1 border-neutral-400/30 mr-4 mb-6 p-6 flex flex-col justify-between  items-center   min-h-[400px] rounded-md">

                    <Ring />

                    <div>
                        <div className="text-white font-inter text-lg" >SEO goal setting</div>
                        <div className="text-white/60" >Helps you set and achieve SEO goals with guided assistance.</div>
                    </div>
                </div>


                <div className=" bg-black  max-w-[744px] mb-6  lg:col-span-2 min-h-[400px] rounded-md">
                    <img draggable={false} src={DashBoard} alt="user friendly dashboard" />
                </div>


                <div className="bg-black  max-w-[744px] mr-4  lg:col-span-2 min-h-[400px] rounded-md">
                    <img draggable={false} src={VisualReports} alt="visual insights reports" />
                </div>


                <div className="bg-black w-[370px] text-white border-1 border-neutral-400/30  p-6 flex flex-col justify-between items-center min-h-[400px] rounded-md">
                    <Cone />
                    <div>
                        <div className="text-white font-inter text-lg" >Smart Keyword Generator</div>
                        <div className="text-white/60" >Automatic suggestions and the best keywords to target.</div>
                    </div>
                </div>

            </div>


        </div>
    )
}
