

function Navbar() {
    return (
        <nav className="text-white flex justify-between mx-12 font-geist mt-4 items-center text-center " >

            <div className="font-semibold text-[22px] " >SynapseVault</div>

            <div className="flex flex-row gap-4  text-[16px] " >
                <div className="text-neutral-100/50 hover:text-neutral-100/80 cursor-pointer  "  >Features</div>
                <div className="text-neutral-100/50 hover:text-neutral-100/80 cursor-pointer  " >How it works</div>
                <div className="text-neutral-100/50 hover:text-neutral-100/80 cursor-pointer  " >Pricing</div>
                <div className="text-neutral-100/50 hover:text-neutral-100/80 cursor-pointer  " >Docs</div>
                <div className="text-neutral-100/50 hover:text-neutral-100/80 cursor-pointer  " >Contact</div>
            </div>

            <button className="bg-white text-black h-[40px] w-[185px] tracking-[-4%] px-[8px] py-[2px] rounded-lg cursor-pointer hover:scale-99 " >Get Early Access →</button>

        </nav>
    )
}

export default Navbar