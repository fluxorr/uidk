import { useEffect } from "react";
import SideBar from "./SideBar";
import Info from "./Info";
import Projects from "./Projects";
import Recognition from "./Recognition";

const Designn = () => {
    const element = document.documentElement;

    useEffect(() => {
        element.style.backgroundColor = "white";
    }, []);

    return (
        <div>
            <div className="fixed top-0 left-0 h-screen self-start overflow-hidden">
                <SideBar />
            </div>
            <div className="pl-172 py-6 overflow-auto  ">
                <Info />
                <Projects />
                <Recognition />
            </div>
        </div>
    );
};

export default Designn;
