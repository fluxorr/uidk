import { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

function Des3() {

    const element = document.documentElement;
    useEffect(() => {
        element.style.backgroundColor = "white"
    }, [])

    return (
        <div>
            <Navbar />
            <Home />
        </div>
    )
}

export default Des3