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
                <Animation variant="slideUp">
                    <div className="h-20 w-20 my-2 bg-(--primary-color) flex items-center justify-center rounded-full">
                        {icon}
                    </div>
                </Animation>
                <Animation variant="slideUp">
                    <h2 className="font-playfair text-2xl my-2 text-center text-(--primary-color) flex">{step}</h2>
                </Animation>
                <Animation variant="slideUp">
                    <h2 className="font-playfair text-2xl my-2 text-center text-(--primary-color) flex">{title}</h2>
                </Animation>            
            </div>
        </Animation>

    )
}