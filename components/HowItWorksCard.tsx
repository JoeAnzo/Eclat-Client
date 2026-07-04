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
            <div className="shadow-xl p-2 rounded-md flex flex-col items-center justify-center gap-2">
                <h2 className="font-sans text-(--text) text-xl my-2 text-center flex">{step}</h2>
                <div className="rounded-md p-4 bg-(--primary-color)">
                    {icon}
                </div>                       
                <h2 className="font-sans text-(--text) text-xl my-2 text-center flex">{title}</h2>
            </div>
        </Animation>

    )
}