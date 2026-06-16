import Animation from "./Animation"
import { ReactNode } from "react"

type howItWorksProps = {
    step:string;
    title:string;
    icon:ReactNode;
}

export default function HowItWorksCard({step,title,icon}:howItWorksProps){
    return(
        <Animation variant="slideUp">
            <div className="border border-(--secondary-color) rounded-md bg-white/30 backdrop-blur-xl backdrop-filter">
                <h2 className="text-center font-playfair text-(--primary-color)">{step}</h2>
                <div className="h-50 w-50 bg-(--primary-color) rounded-full">
                    {icon}
                </div>
                <h2 className="font-playfair text-(--primary-color)">{title}</h2>
            </div>
        </Animation>

    )
}