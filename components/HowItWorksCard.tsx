import Animation from "./Animation"
import { ReactNode } from "react"

type howItWorksProps = {
    step:string;
    title:string;
    text:string;
    icon:ReactNode;
}

export default function HowItWorksCard({step,title,text,icon}:howItWorksProps){
    return(
        <Animation variant="slideUp">
            <div className="shadow-md border border-(--secondary-color) p-2 rounded-md flex flex-col items-center justify-center gap-2">
                <h2 className="font-sans font-bold text-(--text) text-xl my-2 text-center flex">{step}</h2>
                <div className="rounded-md p-4 bg-(--primary-color)">
                    {icon}
                </div>                       
                <h2 className="font-sans font-bold text-(--text) text-xl my-2 text-center flex">{title}</h2>
                <p className="font-sans px-4">{text}</p>
            </div>
        </Animation>

    )
}