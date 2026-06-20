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
            <div className="bg-(--primary-color) rounded-md flex flex-col items-center bg-white/30 backdrop-blur-xl backdrop-filter">
                <Animation variant="none">
                    <div className="h-20 w-20 my-2  flex items-center justify-center rounded-full">
                        {icon}
                    </div>
                </Animation>
                <Animation variant="none">
                    <h2 className="font-playfair text-2xl my-2 text-center text-white flex">{step}</h2>
                </Animation>
                <Animation variant="none">
                    <h2 className="font-playfair text-2xl my-2 text-center text-white flex">{title}</h2>
                </Animation>            
            </div>
        </Animation>

    )
}