import { useEffect } from "react";
import design2 from "../../assets/desgin2.png"
import Navbar2 from "./Navbar2";


const Home2 = () => {

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
        <div className="text-white" >
            <Navbar2></Navbar2>
        </div>
    );
}

export default Home2;