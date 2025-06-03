import Bento from "./Bento";
import Companies from "./Companies";
import Features from "./Features";
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
            <Companies />
            <Bento />
            <Features />
        </div>
    )
}

export default Design4