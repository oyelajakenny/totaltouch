import Image from 'next/image'
import React from 'react'


const HeroSection = () => {
  return (
    <div>
       <div>

       </div>
       <div>
        <Image src={"/hero-image.png"} alt="Hero Image" width={500} height={300} />
       </div>
    </div>
  )
}

export default HeroSection