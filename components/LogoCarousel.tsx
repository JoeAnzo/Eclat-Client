import Image from "next/image"

const LOGOS = [
    {
        name:"Chanel",
        url:"images/Logos/chanel-2.svg"
    },
    {
        name:"Chanel",
        url:"images/Logos/chanel-2.svg"
    },
    {
        name:"Dior",
        url:"images/Logos/dior.svg"
    },
    {
        name:"Giorgio-armani",
        url:"images/Logos/giorgio-armani.svg"
    },
    {
        name:"Gucci",
        url:"images/Logos/gucci-4.svg"
    },
    {
        name:"Prada",
        url:"images/Logos/prada.svg"
    },
    {
        name:"yves-saint-laurent",
        url:"images/Logos/yves-saint-laurent.svg"
    }
]

export default function LogoCarousel() {


    const duplicatedLogos = [...LOGOS]

  return (
    <div className="relative w-full overflow-hidden bg-background my-8">
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent pointer-events-none"/>
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent pointer-events-none"/>
        <div className="flex w-max items-center gap-16 animate-scroll hover:paused]">
            {duplicatedLogos.map((logo,index) => (
                <div key={index} className="flex items-center justify-center w-32 h-12 gray-scale opacity-70 hover:gray-scale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                    src={logo.url}
                    alt={`${logo.name} logo`}
                    width={140}
                    height={40}
                    className="object-contain"
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

