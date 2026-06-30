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
            <div className="border border-(--secondary-color) rounded-md flex gap-2">
                <div className="flex flex-col">
                    <h2 className="font-playfair text-(--text) text-md my-2 text-center flex">{step}</h2>
                    <div>
                        {icon}
                    </div>                       
                </div>
                <h2 className="font-playfair text-(--text) text-md my-2 text-center flex">{title}</h2>
            </div>
        </Animation>

    )
}