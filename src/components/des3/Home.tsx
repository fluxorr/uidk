import { useEffect, useRef } from "react";
import bgImage from "../../assets/des3.jpg";
import { LucideTimer } from 'lucide-react'

export default function Home() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bgImage && ref.current) {
            ref.current.style.backgroundImage = `url(${bgImage})`;
            ref.current.style.backgroundSize = 'cover';
            ref.current.style.backgroundPosition = 'center';
            ref.current.style.backgroundAttachment = 'fixed';
            ref.current.style.height = '100vh';
            ref.current.style.backgroundColor = "white";
            ref.current.style.borderRadius = "32px";
        } else if (ref.current) {
            ref.current.style.backgroundImage = 'none';
        }
    }, []);

    return (
        <div>
            <div ref={ref} className="flex flex-col text-neutral-100 items-center  mx-4 my-2 py-2  ">
                <div className=" mt-48 mb-8 justify-center items-center font-light flex gap-2 rounded-full border-1 px-4 py-1 border-white">
                    <LucideTimer size={20} />
                    Beta Version Is Live!
                </div>

                <div className=" my-4 text-8xl flex flex-col justify-center items-center " >
                    <div className="" >
                        Automate Smarter.
                    </div >
                    <div className="flex " >
                        <span>Work</span>
                        &nbsp;
                        <span className="" >Faster</span>

                    </div>
                </div>

                <div className=" text-lg " >
                    Say goodbye to repetitive tasks, Our Al-driven platform streamlines
                    <br />
                    your workflows so your team can focus on what really matters.
                </div>

                <div className="flex gap-4 mt-18  " >
                    <div className="bg-white text-neutral-900 py-2 px-4 rounded-full cursor-pointer text-center hover:scale-98 " >
                        <button className="cursor-pointer" >See it in Action</button>
                    </div>
                    <div className="bg-transparent py-2 px-4 text-center rounded-full border-1 border-neutral-200/50 shadow-xs cursor-pointer shadow-neutral-200 hover:scale-98" >
                        <button className="cursor-pointer" >  Demo ▶</button>
                    </div>
                </div>

            </div>
        </div >
    );
}
