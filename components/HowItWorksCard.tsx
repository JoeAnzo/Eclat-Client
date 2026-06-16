import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

type howItWorksProps = {
    step:string;
    title:string;
    icon:ReactNode;
}

export default function HowItWorksCard({step,title,icon}:howItWorksProps){
    return(
        <div className="border border-(--secondary-color) rounded-md bg-white/30 backdrop-blur-xl backdrop-filter">
            <h2>{step}</h2>
            <div>
                {icon}
            </div>
            <h2>{title}</h2>
        </div>
    )
}