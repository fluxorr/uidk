import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-[#553b08] flex flex-col justify-center items-center h-screen bg-[#e9e5cd] text-6xl">
            <div>Welcome to Rahuls's Ui Recreation Space</div>
            <div className="grid grid-cols-1" >
                <Link to="/uidk/design1" className="text-2xl mt-4  hover:text-[#75420e] hover:scale-99  underline">
                    Go to Design 1
                </Link>
                <Link to="/uidk/design2" className="text-2xl mt-4 flex text-center items-center hover:text-[#75420e] hover:scale-99  underline">
                    Go to Design 2 <div className="text-[10px]"  > &nbsp; (incomplete)</div>
                </Link>

            </div>
        </div>
    );
}

export default Home;