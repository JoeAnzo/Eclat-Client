import { Search,FunnelIcon } from "lucide-react"
export default function SearchAndFilter(){
    return(
    <div className="flex items-center justify-center">
      <div className="relative max-w-190">
        <input type="text" className="bg-[#F5F5F5] w-full h-10 placeholder:font-sans" placeholder="search fragrances,brands&categories"/>
        <Search className="absolute left-2 top-[50%] translate-y-[-50%]"/>
      </div>
      <FunnelIcon/>
    </div>
    )
}