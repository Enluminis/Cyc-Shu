import React from "react";
import banner from './assets/banner.png'

function CAP(){
    return(
    <>
    <img src={banner} className='w-full'></img>
    <div className='text-[#003366] text-center py-20 px-4'>
    <h1 className='font-bold text-4xl md:text-[3.5rem] mb-12'>Apply Now!</h1>
    <div className='flex justify-center items-center'>
    <a href='https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=InzwUbdT30S5fKEyYdcQdZAHXipWPkJHiiiqJmbMaW5URFhNREFWQ0ZWTUJDRFg4SDA2MEVZUVk3OS4u'>
    <button className='cursor-pointer bg-[#003366] text-white font-bold text-lg md:text-xl px-10 py-5 rounded-lg hover:bg-[#D17359] transition-colors duration-250 w-72' type='button'>Apply Here</button>
    </a>
    </div>
    </div>
    </>
    );
    };

export default CAP;
