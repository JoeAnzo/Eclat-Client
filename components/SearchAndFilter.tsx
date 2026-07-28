import { Search,ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SearchAndFilter(){
    return(
    <div className="flex gap-2.5 items-center">
      <div className="flex items-center justify-center px-[20px] gap-2 relative">
        <input type="text" className="bg-[#F5F5F5] w-full max-w-190 h-10 placeholder:font-sans" placeholder="search fragrances,brands&categories"/>
        <Search className="absolute top-[50%] translate-y-[-50%] "/>
      </div>
      <div className="flex gap-2">
          <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
            Brands
            <ChevronDown/>
          </Button>
          <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
            Gender
            <ChevronDown/>
          </Button>
          <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
              Price
              <ChevronDown/>
          </Button>
      </div>
    </div>
    )
}