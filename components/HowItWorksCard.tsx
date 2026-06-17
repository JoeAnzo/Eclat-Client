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
            <div className="border border-(--secondary-color) rounded-md flex flex-col items-center bg-white/30 backdrop-blur-xl backdrop-filter">
                <div className="h-50 w-50 bg-(--primary-color) flex items-center justify-center rounded-full">
                    {icon}
                </div>
                <h2 className="font-playfair my-2 text-center text-(--primary-color) flex gap-2">{step}{title}</h2>
            </div>
        </Animation>

    )
}