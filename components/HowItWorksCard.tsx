import { ReactNode } from "react"
import Animation from "./Animation"

type howItWorksProps = {
    step:string;
    title:string;
    icon:ReactNode;
}

export default function HowItWorksCard({step,title,icon}:howItWorksProps){
    return(
        <Animation>
            <div className="relative flex flex-col rounded-md overflow-hidden border border-(--secondary-color)">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-xl z-0" />
                <div className="relative p-4 z-20">
                    <h2 className="text-2xl font-playfair text-(--primary-color)">{step}</h2>
                    <div className="flex items-center w-50 h-50 rounded-full">
                        {icon}
                    </div>
                    <h2 className="text-2xl font-playfair text-(--primary-color)">{title}</h2>
                </div>
        </div>
        </Animation>
    )
}