import { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Globe from "../../assets/companies/svg/Globe";
import GradientCone from "../../assets/companies/svg/GradientCone";


function Home() {
    const element = document.documentElement;
    useEffect(() => {
        element.style.backgroundColor = "black"
    }, [])
    return (
        <div>
            <Navbar />
            <Hero />
            <GradientCone />
            <Globe />

        </div>
    )
}

export default Home