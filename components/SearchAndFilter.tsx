import { Search,FunnelIcon } from "lucide-react"
export default function SearchAndFilter(){
    return(
    <div className="flex justify-center gap-2.5">
      <div className="relative">
        <input type="text" className="bg-[#F5F5F5] max-w-190 h-10 placeholder:font-sans" placeholder="search fragrances,brands&categories"/>
        <Search className="absolute -left-2 top-[50%] translate-y-[-50%]"/>
      </div>
      <FunnelIcon/>
    </div>
    )
}