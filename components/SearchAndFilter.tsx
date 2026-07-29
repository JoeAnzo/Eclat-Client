import { Search } from "lucide-react"
import { brand } from "@/app/Interfaces/product.interface";


interface searchAndFilterProps {
  brands:brand[]
}

export default function SearchAndFilter({brands}:searchAndFilterProps){
    return(
    <div className="flex flex-col md:flex-row gap-2.5 items-center">
      <div className="flex items-center justify-center px-[20px] gap-2 relative">
        <input type="text" className="bg-[#F5F5F5] w-full max-w-[600px] h-10 placeholder:font-sans" placeholder="search fragrances,brands&categories"/>
        <Search className="absolute top-[50%] translate-y-[-50%] -left-2"/>
      </div>
      <div className="flex gap-2 flex-wrap">
          <select className="border-(--primary-color) p-2 font-semibold">
            <option value="">Brands</option>
            {
              brands.map((item:brand,index:number) => {
                return <option key={index} value={`${item.name}`}>{item.name}</option>
              })
            }
          </select>
          <select className="border-(--primary-color) p-2 font-semibold">
            <option value="">Gender</option>
            <option value="mens">Men</option>
            <option value="womens">Women</option>
            <option value="unisex">Unisex</option>
          </select>
          <select className="border-(--primary-color) p-2 font-semibold">
            <option value="">Price</option>
            <option value="mens">below UGX 50,000</option>
            <option value="womens">below UGX 100,000</option>
            <option value="unisex">below UGX 300,000</option>
          </select>
      </div>
    </div>
    )
}
