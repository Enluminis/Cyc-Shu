import { motion } from "framer-motion";
import React from "react";
import CountUp from 'react-countup';
import Image from './assets/Image.jpg';


function About () {

return (
<>
<div className='flex flex-col md:flex-row gap-6 md:gap-30 mx-auto w-full max-w-7xl px-4 bg-white my-10 md:my-16 text-[#003366]'>
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
viewport={{once: true}}
>
<div className='mx-4 md:ml-27 my-5'>
<h1 className='font-bold text-3xl md:text-[3rem] mb-4 md:mb-6'>About Us</h1>
<h2 className='font-bold text-xl md:text-[1.5rem] mb-4 md:mb-6'>Seton Hall Chapter</h2>
<p className='text-base md:text-[1.2rem] mb-6 md:mb-8'>Consult Your Community at Seton Hall University, founded in 2018,<br/>is a student-run consulting organization that provides over 6,000 hours<br/>of pro-bono services to local small businesses, especially women- and<br/>minority-owned enterprises. Members apply their academic and analytical<br/>skills to help clients enhance marketing, operations, and overall business<br/>strategy, creating lasting impact within the South Orange community.</p>
<h2 className='font-bold text-xl md:text-[1.5rem] mb-4 md:mb-6'>Our Engagements</h2>
<p className='text-base md:text-[1.2rem] mb-6 md:mb-8'>Business analysts collaborate with local startups, small businesses,<br/>and campus organizations to improve operations, analyze markets,<br/>and develop growth strategies through data-driven insights.</p>
<h2 className='font-bold text-xl md:text-[1.5rem] mb-4 md:mb-6'>Our Stories</h2>
<p className='text-base md:text-[1.2rem] mb-6 md:mb-8'>Working with small businesses, we've witnessed incredible stories<br/>of growth, creativity, and community impact. Each business<br/>we support adds something new to the local landscape, from inspiring<br/>ideas to lasting change. Every partnership becomes part of a larger story<br/>of collaboration and success. Want to be part of the CYC story?<br/></p>
</div>
</motion.div>
<div className='mx-auto md:mx-0'>
<img className='w-full max-w-xs md:w-[400px] md:h-[400px] translate-y-10 md:translate-y-40 rounded-2xl shadow-2xl' src={Image}></img>
</div>
</div>


<div className='bg-[#2B3F63] w-full h-auto py-10 '>
<h1 className='text-center font-bold text-2xl md:text-[3rem] mb-4 md:mb-7 mt-6 md:mt-10 text-white'>Small Business<br/>Large Impact</h1>
<div className='flex flex-col md:flex-row gap-6 md:gap-60 mx-auto justify-center'>
<div className='text-center'>
<p className='mb-4 md:mb-6 text-white'><b className='text-3xl md:text-[4rem] font-normal tracking-tighter'><CountUp end={28} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/></b><br/><span className='text-base md:text-[1.4rem]'>University Chapters across America</span></p>
<p className='mb-4 md:mb-6 text-white'><b className='text-3xl md:text-[4rem] font-normal tracking-tighter'>~<CountUp end={8} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/></b><br/><span className='text-base md:text-[1.4rem]'>Small businesses in an academic year</span></p>
<p className='mb-4 md:mb-6 text-white'><b className='text-3xl md:text-[4rem] font-normal tracking-tighter'><CountUp end={600} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/>+</b><br/><span className='text-base md:text-[1.4rem]'>Volunteers across the country</span></p>
</div>
<div className='text-center'>
<p className='mb-4 md:mb-6 text-white'><b className='text-3xl md:text-[4rem] font-normal tracking-tighter'><CountUp end={8} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/></b><br/><span className='text-base md:text-[1.4rem]'>Years in operation</span></p>
<p className='text-white'><b className='text-3xl md:text-[4rem] font-normal tracking-tighter'><CountUp end={6000} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/>+</b><br/><span className='text-base md:text-[1.4rem]'>Hours of pro-bono consulting</span></p>
</div>
</div>
</div>

<div className='max-w-5xl mx-auto px-4 my-20'>
<h1 className='text-2xl md:text-[2.7rem] text-[#2B3F63] font-bold text-center mb-12'>Our Model</h1>

<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
<div className='bg-[#2B3F63] rounded-lg p-8 md:p-12'>
<h2 className='font-bold text-white mb-4 md:mb-6 text-xl md:text-[2.4rem]'>Clients</h2>
<p className='text-white text-base md:text-[1.15rem] whitespace-pre-line'>{"Our campus consulting group partners with local\nbusinesses, startups, and campus organizations to\nsolve real-world challenges. We help clients with\nmarket research, social media strategy, and process\nimprovement while gaining hands-on consulting\nexperience."}</p>
</div>
<div className='bg-[#2B3F63] rounded-lg p-8 md:p-12'>
<h2 className='font-bold text-white mb-4 md:mb-6 text-xl md:text-[2.4rem]'>Students</h2>
<p className='text-white text-base md:text-[1.15rem] whitespace-pre-line'>{"Teams of 4 to 6 analysts are led by a more experienced\nundergraduate Engagement Manager over the course\nof the semester, supported by a dedicated group of\nfaculty advisors, graduate students, and\nexperienced professionals."}</p>
</div>
</div>
</div>

<img
  className='mx-auto my-10 w-full max-w-[1024px] h-auto md:my-20 md:mb-30 px-4'
  src='https://healthresearchhub.com/wp-content/uploads/2024/10/Health-improvements-1024x512.png'
  alt='Health Improvements'
/>
</>
);
};


export default About;
