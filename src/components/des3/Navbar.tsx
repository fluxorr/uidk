import LogoIcon from "./LogoIcon"

export default function Navbar() {
    return (

        <div className='flex items-center bg-white justify-between mx-8 mt-2 -mb-1 font-monster  '>
            <div className='flex gap-1 items-center ' >
                <div>
                    <LogoIcon />
                </div>
                <div className="flex flex-col ">
                    <div className="mb-[-8px]">Senses®</div>
                    <div>Incorporations</div>
                </div>

            </div>
            <div className="flex w-fit justify-between gap-16 " >
                <div>Home</div>
                <div>About Us</div>
                <div>FAQ</div>
            </div>
            <div className="flex w-fit justify-between gap-16 mr-8" >
                <div>Have A Question?</div>
                <div>Book A Call</div>
            </div>
        </div>

    )
}
