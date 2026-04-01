import React from "react";
import { motion } from "framer-motion";
import Image55 from './assets/Image (55).jpg'
import Image56 from './assets/Image (56).jpg'
import Image57 from './assets/Image (57).jpg'
import Image58 from './assets/Image (58).jpg'
import Image65 from './assets/Image (65).jpg'
import Image66 from './assets/Image (66).jpg'

function OurTeam(){
return(
<>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{once: true}}
  className='text-center text-[4.4em] font-bold text-[#003366] mb-20 mt-20'
>
<h1>EXECUTIVE BOARD</h1>
</motion.div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[800px] mx-auto pb-10'>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/in/sudarshansrini/'><img className='rounded-full w-[250px] h-[250px] object-cover cursor-pointer' src={Image65}></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Sudarshan Srinivasan</h1>
<p className='text-[#003366]'>President</p>
</div>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/in/arianna-walters-3a0b17220/'><img className='rounded-full w-[250px] h-[250px] object-cover cursor-pointer' src={Image66}></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Arianna Walters</h1>
<p className='text-[#003366]'>VP of Internal Affairs</p>
</div>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/in/michael-waldron-339257255/'><img className='cursor-pointer rounded-full w-[250px] h-[250px] object-cover' src={Image55}></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Michael Waldron</h1>
<p className='text-[#003366]'>VP of Engagements</p>
</div>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/in/caroline-rivers-2484a92ab/'><img className='rounded-full w-[250px] h-[250px] object-cover cursor-pointer' src={Image56}></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Caroline Rivers</h1>
<p className='text-[#003366]'>VP of Marketing</p>
</div>
</div>
{/*
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{once: true}}
  className='text-center text-[4.4em] font-bold text-[#003366] mb-20 mt-10'
>

<h1>PROJECT MANAGERS</h1>
</motion.div>
<div className='flex w-[1300px] mx-auto'>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/in/rheeya-patel-409204327/'><img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Rheeya Patel</h1>
<p className='text-[#003366]'>Engagement Manager</p>
</div>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/in/jack-markowski-995654288/'><img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Jack Markowski</h1>
<p className='text-[#003366]'>Engagement Manager</p>
</div>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/in/talynndiaz/'><img className='cursor-pointer rounded-full w-[285px]' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Talynn Diaz</h1>
<p className='text-[#003366]'>Engagement Manager</p>
</div>
</div>
<div className='flex mt-10'>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/in/codykaczmarczyk/'><img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Cody Kaczmarczyk</h1>
<p className='text-[#003366]'>Engagement Manager</p>
</div>
</div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{once: true}}
  className='text-center text-[4.4em] font-bold text-[#003366] mb-20 mt-10'
>
<h1>DIRECTORS</h1>
</motion.div>
<div className='flex w-[1300px] mx-auto'>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/in/johnbrignola7/'><img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>John Brignola</h1>
<p className='text-[#003366]'>Director of Finance and Fundrasing</p>
</div>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/in/tiffany-laurabell-clay/'><img className='rounded-full w-[285px] cursor-pointer' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>Tiffany Clay</h1>
<p className='text-[#003366]'>Director of Graphic Design</p>
</div>
<div className='mx-auto text-center'>
<a href='https://www.linkedin.com/in/william-martin-841114313/'><img className='cursor-pointer rounded-full w-[285px]' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img></a>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>William Martin</h1>
<p className='text-[#003366]'>Director of Impact</p>
</div>
</div>
<div className='flex mt-10'>
<div className='mx-auto text-center'>
<img className='rounded-full w-[285px]' src='https://images.squarespace-cdn.com/content/v1/5c3bd07112b13fb318b8e207/3f5222dd-f344-4590-99a1-2781910396a6/1729587464073.jpeg?format=500w'></img>
<h1 className='mt-5 font-bold text-[#003366] text-[1.3rem]'>July Flores</h1>
<p className='mb-20 text-[#003366]'>Director of Videography</p>
</div>
</div>
*/}
</>
)
}

export default OurTeam;
