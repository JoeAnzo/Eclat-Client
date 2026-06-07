import { DetailedHTMLProps,HTMLAttributes} from "react"

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "swiper-container":DetailedHTMLProps<HTMLAttributes<HTMLElement> & {
                init?:string;
                ref?:any;
            },HTMLELEMENT>;
                "swiper-slide":DetailedHTMLProps<HTMLAttributes<HTMLElement>,HTMLELEMENT>;
        }
    }
}