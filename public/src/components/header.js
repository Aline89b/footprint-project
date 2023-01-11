import Image from 'next/image'




export default function Header(){
    
    return (
      
        <Image
            src="/../public/images/bg.img.jpg"
            alt="Flight footprint calculator"
            fill
            style={{objectFit:"cover"}}
            
            
         
        />
      
    )
}