import React from "react";
import { motion } from "framer-motion";
import party from './assets/Finals Party.png'
import event from './assets/CYC Weekly event.jpg'
import presentation from './assets/Finals Presentation.jpg'
import insight from './assets/Insights from the.jpg'

function Events(){
    return(
    <>
    <div className='mx-auto w-11/12 md:w-1/2 my-20 px-4'>
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{once: true}}
>
<h1 className='font-bold text-[3.6rem] mb-8 text-[#003366]'>Events</h1>
<p className='text-[1.2rem] text-[#003366]'>Discover what we have to offer with our upcoming events—a series of interactive experiences created to bring our community together. Whether you're looking to grow your career, build connections, or just get inspired, these events have something for everyone. From leadership talks and networking nights to student showcases and alumni panels, each one is designed to help you learn, connect, and take the next step toward your goals. Join us and make the most of every opportunity—one event at a time.</p>
</motion.div>
        </div>
        <div className='bg-[#99ccee] w-full md:w-18/19 px-4 md:px-20 py-15 pb-10 mx-auto gap-10 mb-20'>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mx-auto justify-items-center max-w-[800px]">
  <figure>
  <div className="group relative w-full md:w-[300px] h-[350px]">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>CYC analysts present<br/> semester-long projects,<br/> sharing<br/> innovative client solutions,<br/> receiving feedback,<br/> and<br/> celebrating team growth.</p>
  <img className='w-full md:w-[350px] h-[350px] object-cover' src={presentation}></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-0 left-0 text-[#003366] z-40'>Finals Presentations<br/><span className='ml-5'>December 8th, Faculty Library 6F</span></figcaption>
</figure>
   <figure>
  <div className="group relative w-full md:w-[300px] h-[350px]">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>CYC ends the semester<br/> with games,<br/> laughter, and Superlatives,<br/> allowing<br/> members to relax,<br/> connect,<br/> and celebrate.</p>
  <img className='w-full md:w-[350px] h-[350px] object-cover' src={party}></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-0 left-0 text-[#003366] z-40'>Finals Party<br/><span className='ml-5'>December 1st, Jubilee 141</span></figcaption>
</figure>
   <figure>
  <div className="group relative w-full md:w-[300px] h-[350px]">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>Members learn from<br/> a<br/> Seton Hall alumna at BNY<br/> about<br/> client relationships, career advice, and<br/> industry insights.</p>
  <img className='w-full md:w-[350px] h-[350px] object-cover' src={insight}></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-0 left-0 text-[#003366] z-40'>Insights from the Bank of New York<br/><span className='ml-5'>November 17th, Schwartz 112</span></figcaption>
</figure>
 <figure>
  <div className="group relative w-full md:w-[300px] h-[350px]">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>CYC hosts a workshop<br/> with<br/> Amy Korner (KPMG)<br/> on<br/> building personal brands, confidence, and professional identity.</p>
  <img className='w-full md:w-[350px] h-[350px] object-cover' src={event}></img>
</div>
<figcaption className='bg-white font-bold indent-5  py-4 text-[1.1rem] relative bottom-0 left-0 text-[#003366] z-40'>KPMG: Create Your Personal Brand<br/><span className='ml-5'>November 3rd, Jubilee 141</span></figcaption>
</figure>
</div>
    </div>


    </>
    )
}

export default Events
