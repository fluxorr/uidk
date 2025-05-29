import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const arr = [
        "Design 1",
        "Design 2",
        "Design 3",
        "Design 4 ╳ ",
        "Design 5 ╳",
        "Design 6 ╳",
        "Design 7 ╳",
        "Design 8",
        "Design 9 ╳",
    ];
    const element = document.documentElement;

    useEffect(() => {
        element.style.backgroundColor = "#e9e5cd";
        element.style.backgroundImage = ""
    }, []);

    return (
        <div className="bg-[#e9e5cd] min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/2 w-full flex pr-4 items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-[#716152] p-8 overflow-hidden">
                <h1 className="text-[#553b08] text-[30vw] md:text-[19vw] font-extrabold leading-none tracking-tighter select-none max-w-full ">
                    Rahul
                    <br />
                    Chd.
                </h1>
            </div>

            <div className="md:w-1/2 w-full p-8 flex gap-5 flex-col">
                <h2 className="text-[#553b08] text-2xl font-semibold mb-4">Designs</h2>
                <div className=" flex-col flex overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-[#a38d5f] scrollbar-track-transparent">
                    {arr.map((design, index) => (
                        <Link
                            key={index}
                            to={`/uidk/design${index + 1}`}
                            className="text-[#553b08] text-xl border-b border-[#c4b79f] pb-2 px-2  
               transform transition duration-300 ease-in-out
                    hover:text-[#75420e] hover:scale-101 hover:underline hover:shadow-md"
                        >
                            {design}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
