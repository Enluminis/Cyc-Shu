import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";
import { SocialIcon } from 'react-social-icons';

function Footer(){
    
    
    return(
        <>
        <div className='bg-neutral-200 w-full h-27 flex justify-center items-center'>
            <div className='mx-auto flex w-30 gap-5'>
           <a href='https://www.instagram.com/cyc.shu/'><img className='mx-auto w-7 h-7 cursor-pointer' src='https://static.wixstatic.com/media/11062b_084cbbff6ae446c1b03dc3637193e77a~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_084cbbff6ae446c1b03dc3637193e77a~mv2.png'></img></a>
            <a href='https://www.linkedin.com/company/setonhallconsultinggroup/'><img className='mx-auto w-7 h-7 cursor-pointer' src='https://static.wixstatic.com/media/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png/v1/fill/w_56,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png'></img></a>
      <a href='mailto:setonhall@consultyourcommunity.org'><img className='mx-auto w-7 h-7 cursor-pointer' src='https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Mail-2-512.png'></img></a>
            </div>
        </div>
        <div className='bg-neutral-500 w-full h-37 text-center p-5'>
            <p className='text-white pb-5 font-normal text-[1.1rem] font-'>Connect with us!</p>
            <p className='text-white pb-5 font-thin text-[1rem] cursor-pointer'><a href='mailto:setonhall@consultyourcommunity.org'>setonhall@consultyourcommunity.org</a></p>
            <p className='text-white pb-5 font-thin opacity-70 text-[1rem]'>&copy;2025 designed by Shawn Ikokwu</p>
        </div>
        {/*
        <div className='w-full h-[450px] bg-[#00274e]'>
        <div className='flex'>
        <div className='rounded-full w-7 h-7 bg-black'>
        <FaEnvelope className='mx-auto translate-y-1 -translate-x-[0.5px] text-neutral-200 mt-0.5' />
      </div>
        <div className='rounded-full w-[25px] h-[25px] bg-white'>
        <FaInstagram className='mx-auto translate-y-1 -translate-x-[0.5px]' />
      </div>
      <div className='rounded-full w-[25px] h-[25px] bg-white'>
        <FaLinkedin className='mx-auto translate-y-1 -translate-x-[0.5px]' />
      </div>  
        </div>
        <div>
        <p>Connect with us</p>  
<SocialIcon className='' url="https://www.linkedin.com/jobs/" />  
        </div>
        </div>
        */}
        </>

    );
}

export default Footer;