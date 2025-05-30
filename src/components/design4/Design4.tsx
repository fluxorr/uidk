import Home from "./Home"
import Navbar from "./Navbar"
import { useEffect } from "react";


function Design4() {
    const element = document.documentElement;
    useEffect(() => {
        element.style.backgroundColor = "black"
    }, [])
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    )
}

export default Design4