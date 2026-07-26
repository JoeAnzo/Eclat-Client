import { Search,FunnelIcon } from "lucide-react"
export default function SearchAndFilter(){
    return(
    <div className="flex gap-2.5 items-center">
      <div className="flex items-center justify-center px-8 gap-2">
        <input type="text" className="bg-[#F5F5F5] max-w-190 h-10 placeholder:font-sans" placeholder="search fragrances,brands&categories"/>
        <Search/>
      </div>
      <FunnelIcon/>
    </div>
    )
}