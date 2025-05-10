
const Home2 = () => {

    return (
        <div className="text-white h-screen flex flex-col gap-4.5  items-start mt-[180px]  " >
            <div className="text-7xl leading-18 font-poppins " >
                <div>Your Engineering</div>
                <div>Workflow on Autopilot</div>
            </div>
            <div className="max-w-[28vw]" >
                <div>
                    Our Al learns your stack and automates builds, tests, and rollbacks—freeing up your team for real innovation.
                </div>
            </div>
            <div className="mt-4 flex justify-center items-center gap-4.5 " >
                <button className="px-6 py-2 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold hover:scale-99 cursor-pointer   " >Download Now</button>
                <button className="px-6 py-2 rounded-full bg-[rgb(28,28,28)] hover:bg-[rgb(26,26,26)] text-white font-semibold hover:scale-99 cursor-pointer   " >7Day Free Trial ↗ </button>
            </div>
        </div>
    );
}

export default Home2;