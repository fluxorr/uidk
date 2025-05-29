import Home2 from "./Home2";
import Navbar2 from "./Navbar2";
import { useEffect } from "react";
import design2 from "../../assets/desgin2.png"


const Design2 = () => {
    const element = document.documentElement;
    useEffect(() => {
        if (design2) {
            element.style.backgroundImage = `url(${design2})`;
            element.style.backgroundSize = 'cover';
            element.style.backgroundPosition = 'center';
            element.style.backgroundAttachment = 'fixed';
            element.style.height = '100%';
            element.style.backgroundColor = "black"
        } else {
            element.style.backgroundImage = 'none';
        }
    }, [])
    return (
        <div className="mx-4 md:mx-16 lg:mx-32 my-4 md:my-8 lg:my-16" >
            <Navbar2></Navbar2>
            <Home2></Home2>

        </div>
    );
}

export default Design2;