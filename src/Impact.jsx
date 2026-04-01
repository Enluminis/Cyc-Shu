import React from "react";
import { motion } from "framer-motion";
import { Quote} from 'lucide-react';
import r2025 from './assets/2025.jpg'

function Impact(){
return(
    <>
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}

  className="mt-17 text-center text-[1.3rem] px-4"
  viewport={{once: true}}
>
  <h1 className='text-center text-[2.6rem] font-bold p-3 text-[#003366]'>Impact</h1>
    <p className='text-center p-2 text-[1.2rem] text-[#003366]'>Consultancy Impact Reports</p>
    <p className='text-center text-[1.2rem] text-[#003366]'>We take pride in the work we do within our community. Our impact reports highlight<br className='hidden md:inline'/>and measure the positive difference we've made at Seton Hall University and across<br className='hidden md:inline'/>the greater South Orange area. View them below.</p>
</motion.div>
    <div className='grid grid-cols-2 gap-4 mx-auto max-w-[550px] bg-gray-400 mt-20 px-4 py-4'>
    <div className='text-center'>
    <img className='h-[250px] md:h-[350px] w-full object-cover' src={r2025}></img>
    <a href='https://studentshu-my.sharepoint.com/:b:/r/personal/martinw1_shu_edu/Documents/Microsoft%20Teams%20Chat%20Files/CYC%20Seton%20Hall%20Impact%20Report.pdf?csf=1&web=1&e=ZtRUIF'><button className='cursor-pointer bg-white rounded-full text-[1rem] md:text-[1.1rem] w-[140px] md:w-[170px] h-[40px] hover:bg-neutral-400 transition-colors duration-185 group mt-2' type='button'><span className='group-hover:text-white transition-colors duration-185 text-[#003366]'>Click to view</span></button></a>
    </div>
    <div className='text-center'>
    <img className='h-[250px] md:h-[350px] w-full object-cover' src='https://artsandculturealliance.org/wp-content/uploads/2025/02/COMINGSOON.jpg'></img>
    <button className='cursor-pointer bg-white rounded-full text-[1rem] md:text-[1.1rem] w-[140px] md:w-[170px] h-[40px] hover:bg-neutral-400 transition-colors duration-185 group mt-2' type='button'><span className='group-hover:text-white transition-colors duration-185 text-[#003366]'>Click to view</span></button>
    </div>
    <div className='text-center'>
    <img className='h-[250px] md:h-[350px] w-full object-cover' src='https://artsandculturealliance.org/wp-content/uploads/2025/02/COMINGSOON.jpg'></img>
    <button className='cursor-pointer bg-white rounded-full text-[1rem] md:text-[1.1rem] w-[140px] md:w-[170px] h-[40px] hover:bg-neutral-400 transition-colors duration-185 group mt-2' type='button'><span className='group-hover:text-white transition-colors duration-185 text-[#003366]'>Click to view</span></button>
    </div>
    <div className='text-center'>
    <img className='h-[250px] md:h-[350px] w-full object-cover' src='https://artsandculturealliance.org/wp-content/uploads/2025/02/COMINGSOON.jpg'></img>
    <button className='cursor-pointer bg-white rounded-full text-[1rem] md:text-[1.1rem] w-[140px] md:w-[170px] h-[40px] hover:bg-neutral-400 transition-colors duration-185 group mt-2' type='button'><span className='group-hover:text-white transition-colors duration-185 text-[#003366]'>Click to view</span></button>
    </div>
    </div>
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}

  className="mt-17 text-center text-[2.8rem] font-bold text-[#003366]"
  viewport={{once: true}}
>
  Testimonials
</motion.div>

<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto px-4 mb-15'>
<div className='flex mt-10'>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}

  className="text-center text-[1.3rem]"
  viewport={{once: true}}
>
  <Quote className='inline w-10 h-10 -translate-x-1 text-[#003366]'/>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}

  className="text-center text-[1.3rem] text-[#003366]"
  viewport={{once: true}}
>
  CYC has been an amazing partner from the very first interaction.<br/><br/>- New Life Church
</motion.div>
</div>
<div className='flex mt-10'>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}

  className="text-center text-[1.3rem]"
  viewport={{once: true}}
>
  <Quote className='inline w-10 h-10 -translate-x-1 text-[#003366]'/>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}

  className="text-center text-[1.3rem] text-[#003366]"
  viewport={{once: true}}
>
  I think the team is amazing they conduct themselves professionally.<br/><br/>- Grid Iron Waffle Shop
</motion.div>
</div>
<div className='flex mt-10'>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}

  className="text-center text-[1.3rem]"
  viewport={{once: true}}
>
  <Quote className='inline w-10 h-10 translate-x-1 text-[#003366]'/>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}

  className="text-center text-[1.3rem] text-[#003366]"
  viewport={{once: true}}
>
  If you're looking for a team who can understand your area of weakness, you've found the right match!<br/><br/>- Juice Hub Cafe
</motion.div>
</div>
<div className='flex mt-10'>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}

  className="text-center text-[1.3rem]"
  viewport={{once: true}}
>
  <Quote className='inline w-10 h-10 translate-x-1 text-[#003366]'/>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}

  className="text-center text-[1.3rem] text-[#003366]"
  viewport={{once: true}}
>
  They conduct themselves professionally and help you find your financial shortcomings<br/><br/>- Jespy House
</motion.div>
</div>
</div>
</>
);
}
export default Impact
