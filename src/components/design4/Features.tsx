import { BellRing, ChartLineIcon, Files, Gauge, ListTodoIcon, MousePointerClickIcon, StarsIcon, Target, Wand2 } from "lucide-react"

const FeaturesProps = [
    {
        icon: <Gauge size={18} />,
        title: "User-friendly dashboard",
        description: "Perform complex SEO audits and optimizations with a single click."
    },
    {
        icon: <ChartLineIcon size={18} />,
        title: "Visual Reports",
        description: "Visual insights into your site’s performance."
    },
    {
        icon: <StarsIcon size={18} />,
        title: "Smart Keyword Generator",
        description: "Automatic suggestions and the best keywords to target."
    },
    {
        icon: <ListTodoIcon size={18} />,
        title: "Content Evaluation",
        description: "Simple corrections for immediate improvemens."
    },
    {
        icon: <Target size={18} />,
        title: "SEO Goal Setting",
        description: "Helps you set and achieve SEO goals with guided assistance."
    },
    {
        icon: <BellRing size={18} />,
        title: "Automated Alerts",
        description: "Automatic notifications about your SEO health, including quick fixes."
    },
    {
        icon: <Wand2 size={18} />,
        title: "Link Optimization Wizard",
        description: "Guides you through the process of creating and managing links."
    },
    {
        icon: <MousePointerClickIcon size={18} />,
        title: "One-click optimization",
        description: "Perform complex SEO audits and optimizations with a single click."
    },
    {
        icon: <Files size={18} />,
        title: "Competitor reports",
        description: "Provides insights into competitors keyword strategies and ranking."
    }
]

function Features() {
    return (
        <div className="text-white flex flex-col items-center mb-200 " >
            <div className="font-inter text-[56px] max-w-[354px] leading-[1.1]  " >Elevate your SEO efforts.</div>
            <div className="grid grid-cols-3  grid-rows-3 gap-32 mt-12" >

                {FeaturesProps.map((item) => (
                    <div className="max-w-[259px]" >
                        <div className="flex flex-row gap-2 text-[18px] items-center font-inter font-semibold mb-3  " >
                            <div>
                                {item.icon}
                            </div>
                            <div>
                                {item.title}
                            </div>
                        </div>
                        <div className="text-white/60" >
                            {item.description}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Features