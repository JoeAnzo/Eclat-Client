'use client'
import { Search } from "lucide-react"
import { brand } from "@/app/Interfaces/product.interface";
import {useEffect,useRef,useState} from 'react'



interface searchAndFilterProps {
  brands:brand[];
  selectedBrand: string | undefined;
}

export default function SearchAndFilter({brands,selectedBrand}:searchAndFilterProps){
  const [query,setQuery] = useState('')
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = stickyRef.current
    if (!element) return

    const currentTopSpace = element.getBoundingClientRect().top;
    element.style.top = `${currentTopSpace}px`
  },[])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectedBrand = e.target.value
  }

    return(
    <div ref={stickyRef} className="flex flex-col sticky z-160 md:flex-row gap-2.5 items-center bg-white justify-center">
      <div className="flex items-center justify-center px-[20px] gap-2 relative">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="bg-[#F5F5F5] w-full md:max-w-[760px] h-10 placeholder:font-sans" placeholder="search fragrances,brands&categories"/>
        <Search className="absolute top-[50%] translate-y-[-50%] right-4"/>
      </div>
      <div className="flex gap-2 flex-wrap px-[20px]">
          <select value={selectedBrand} onChange={handleChange} 
          className="border-2 border-(--primary-color)
           [appearance:base-select]
           px-4 py-2.5
           bg-white
           font-sans
           text-gray-800
           cursor-pointer
           outline-none
           transition-all
           [&::picker-icon]:w-4
           [&::picker-icon]:h-4

           [&::picker(select)]:[appearance:base-select]
           [&::picker(select)]:[appearance:shadow-[0_10px_25px_rgba(0,0,0,0.2)]
           [&::picker(select)]:border
           [&::picker(select)]:border-gray-200
           [&::picker(select)]:p-1.5
           [&::picker(select)]:mt-2
           ">
            <option value="">Brands</option>
            {
              brands?.map((item:brand,index:number) => {
                return <option key={index} value={`${item.name}`}>{item.name}</option>
              })
            }
          </select>
          <select 
          className="border-2 border-(--primary-color)
           [appearance:base-select]
           px-4 py-2.5
           bg-white
           font-sans
           text-gray-800
           cursor-pointer
           outline-none
           transition-all
           [&::picker-icon]:w-4
           [&::picker-icon]:h-4

           [&::picker(select)]:[appearance:base-select]
           [&::picker(select)]:[appearance:shadow-[0_10px_25px_rgba(0,0,0,0.2)]
           [&::picker(select)]:border
           [&::picker(select)]:border-gray-200
           [&::picker(select)]:p-1.5
           [&::picker(select)]:mt-2
           ">
            <option value="">Gender</option>
            <option value="mens">Men</option>
            <option value="womens">Women</option>
            <option value="unisex">Unisex</option>
          </select>
          <select
          className="border-2 border-(--primary-color)
           [appearance:base-select]
           px-4 py-2.5
           bg-white
           font-sans
           text-gray-800
           cursor-pointer
           outline-none
           transition-all
           [&::picker-icon]:w-4
           [&::picker-icon]:h-4

           [&::picker(select)]:[appearance:base-select]
           [&::picker(select)]:[appearance:shadow-[0_10px_25px_rgba(0,0,0,0.2)]
           [&::picker(select)]:border
           [&::picker(select)]:border-gray-200
           [&::picker(select)]:p-1.5
           [&::picker(select)]:mt-2
           "
          >
            <option value="">Price</option>
            <option value="mens">below UGX 50,000</option>
            <option value="womens">below UGX 100,000</option>
            <option value="unisex">below UGX 300,000</option>
          </select>
      </div>
    </div>
    )
}