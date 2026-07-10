export default function Location(){
    return(
        <div className="w-full h-[450px]">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63834.46255226534!2d32.6093122!3d0.520149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c4cbef2a46c4f%3A0xf8dca322418c5552!2sBusukuma%20Division!5e0!3m2!1sen!2sug!4v1783684586841!5m2!1sen!2sug" 
            width="100%" 
            height="100%"
            style={{border:0}}
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            >
            </iframe>
        </div>
    )
}