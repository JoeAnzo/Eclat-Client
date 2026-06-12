"use client"

import {useEffect,useRef,useState,ReactNode} from 'react'

type AnimationVariant = "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "none"

interface AnimationProps {
    children:ReactNode;
    variant?: AnimationVariant;
}

export default function Animation({ children, variant="none"}: AnimationProps) {
    const [isVisible, setIsVisible] = useState(false)
    const domRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const currentRef = domRef.current
        const observer = new IntersectionObserver( ([entry]) => {
            if (entry.isIntersecting){
                setIsVisible(true)
                if (currentRef) observer.unobserve(currentRef)
            }
        })
        if (currentRef) observer.observe(currentRef)
        return () => {if (currentRef) observer.unobserve(currentRef)} 
    },[])

    const variantStyles:Record<AnimationVariant,string> = {
        fadeIn:'opacity-0',
        slideUp:'opacity-0 translate-y-12',
        slideDown:'opacity-0 -translate-y-12',
        slideLeft:'opacity-0 translate-x-12',
        slideRight:'opacity-0 -translate-x-12',
        none:''

    }
    return (
        <div ref={domRef} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 translate-x-0':variantStyles[variant]}`}>
            {children}
        </div>
    )
}