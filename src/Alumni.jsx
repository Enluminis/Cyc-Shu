import React from "react";
import { motion } from 'framer-motion'
import prattWhitneyLogo from './assets/pratt-whitney-logo.png';
import bmwLogo from './assets/bmw-logo.png';
import oliverWymanLogo from './assets/oliver-wyman-logo.png';
import prudentialLogo from './assets/prudential-logo.png';

function Alumni(){
    return(
        <>
        <body className='my-10'></body>
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{once: true}}
  >
  <h1 className='text-center text-[2.5rem] text-[#003366] font-bold'>Alumni</h1>
        <p className='text-center text-[1.5rem] text-[#003366] mb-7'>We are all over the place</p>
        <p className='text-center text-[#003366] text-[1.15rem] mb-15 px-4'>Our alumni are making an impact across the country and around the world,<br className='hidden md:inline'/> applying the skills they gained through CYC in fields such as consulting,<br className='hidden md:inline'/> finance, data science, academia, and engineering. Many have also interned<br className='hidden md:inline'/> and worked part-time in a variety of industries, gaining diverse experience<br className='hidden md:inline'/> they now share with our current members through mentorship, career advice,<br className='hidden md:inline'/> and professional development workshops.</p>
        <p className='text-center text-[1.15rem] text-[#003366] mb-20 px-4'>Below are some places CYC alumni and<br/> current members work/have worked!</p>
</motion.div>
<div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-4 mb-20'>
<div className='flex items-center justify-center bg-white p-4 h-[200px] md:h-[250px]'><img src='https://cdn.freebiesupply.com/logos/large/2x/jpmorgan-chase-logo-png-transparent.png' className='max-w-full max-h-full object-contain'></img></div>
<div className='flex items-center justify-center bg-white p-4 h-[200px] md:h-[250px]'><img src='https://www.ecsmallbiz.org/wp-content/uploads/2020/06/withum-logo.jpg' className='max-w-full max-h-full object-contain'></img></div>
<div className='flex items-center justify-center bg-white p-4 h-[200px] md:h-[250px]'><img src='https://jnj-content-lab2.brightspotcdn.com/dims4/default/562f8d2/2147483647/strip/true/crop/1627x914+120+0/resize/632x355!/quality/90/?url=https%3A%2F%2Fjnj-production-jnj.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fab%2Fc6%2F71c6d70841adbd2850de96523729%2Fred.png' className='max-w-full max-h-full object-contain'></img></div>
<div className='flex items-center justify-center bg-white p-4 h-[200px] md:h-[250px]'><img src='https://www.blueowl.com/sites/default/files/2023-07/Horizontal.png' className='max-w-full max-h-full object-contain'></img></div>
<div className='flex items-center justify-center bg-white p-4 h-[200px] md:h-[250px]'><img src={prattWhitneyLogo} alt='Pratt and Whitney' className='max-w-full max-h-full object-contain'></img></div><div className='flex items-center justify-center bg-white p-4 h-[200px] md:h-[250px]'><img src={bmwLogo} alt='BMW' className='max-w-full max-h-full object-contain'></img></div><div className='flex items-center justify-center bg-white p-4 h-[200px] md:h-[250px]'><img src={oliverWymanLogo} alt='Oliver Wyman' className='max-w-full max-h-full object-contain'></img></div><div className='flex items-center justify-center bg-white p-4 h-[200px] md:h-[250px]'><img src={prudentialLogo} alt='Prudential' className='max-w-full max-h-full object-contain'></img></div>
</div>
        </>
    )
}

export default Alumni;
