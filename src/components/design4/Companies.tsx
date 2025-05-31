import acmecorp from "../../assets/companies/acmecorp.png"
import apex from "../../assets/companies/apex.png"
import celestial from "../../assets/companies/celestial.png"
import echovalley from "../../assets/companies/echovalley.png"
import outside from "../../assets/companies/outside.png"
import pulse from "../../assets/companies/pulse.png"
import quantum from "../../assets/companies/quantum.png"
import twice from "../../assets/companies/twice.png"


const companyList = [acmecorp, apex, celestial, echovalley, outside,
    pulse, quantum, twice
]



function Companies() {
    return (
        <div className="text-white/60  flex justify-center items-center mt-32 flex-col" >
            <div className="mb-8 font-inter text-[16px]  " >Trusted by the world's most innovative teams</div>
            <div className="grid grid-cols-4 gap-2   ">
                {companyList.map((img) => (
                    <img src={img} draggable={false} key={img} className="border-1 shadow-2xl shadow-white/15 border-neutral-100/15 rounded-xl py-6 px-4  w-[235px] h-[98px]" alt="company" />
                ))}
            </div>



        </div>
    )
}

export default Companies