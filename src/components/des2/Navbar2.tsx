import { Infinity } from "lucide-react"



const Navbar2 = () => {
    return (
        <div className="my-8 flex items-center  text-center justify-between px-6">
            <div className="flex justify-center items-center " >
                <div className="flex items-center gap-2 text-3xl ">
                    <Infinity size={36} />

                    <span className="font-semibold ">Simpler</span>
                </div>


                <div className="flex  items-baseline ml-24 gap-6 text-sm text-neutral-200">
                    <div className=" cursor-pointer">How it works?</div>
                    <div className=" cursor-pointer">Pricing</div>
                    <div className=" cursor-pointer">Products</div>
                    <div className=" cursor-pointer">Discover</div>
                </div>

            </div>

            <div className="flex gap-4  items-center justify-center  " >
                <div className="cursor-pointer text-sm hover:underline hover:scale-99 ">Log in</div>
                <button className=" rounded-full bg-white text-black text-shadow-2xs hover:scale-99 text-shadow-white text-sm py-2 px-8 hover:bg-neutral-200 transition cursor-pointer ">
                    Download Now
                </button>

            </div>

        </div>
    );
};

export default Navbar2