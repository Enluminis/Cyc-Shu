import React from "react";
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import Image3 from './assets/Image (3).jpg'
import Image4 from './assets/Image (4).jpg'
import Image5 from './assets/Image (5).jpg'
import myPhoto from './assets/_MConverter.eu_IMG_7039-1.jpg';
import myPhoto2 from './assets/IMG_4590.jpg';
import { NavLink } from "react-router-dom";

function Home(){
  const [visibleCount, setVisibleCount] = useState(0)

  const loadMore = () => {
  setVisibleCount(prev => prev + 1);
}

     useEffect(() => {
    const videos = document.querySelectorAll('video');
      
    const handlePlay = (event) => {
      videos.forEach((video) => {
        if (video !== event.target) {
          video.pause();
        }
      });
    };

    videos.forEach((video) => {
      video.addEventListener('play', handlePlay);
    });


    return () => {
      videos.forEach((video) => {
        video.removeEventListener('play', handlePlay);
      });
    };
  }, []);

    
    return(<>
    <Helmet>
        <title>CYC at SHU</title>

        <meta name="description" content="Consult Your Community (CYC) at Seton Hall University is a student-run organization that works with local small businesses and nonprofits to create meaningful impact through hands-on consulting projects and real-world experience." />
      </Helmet>
    <section className='font-'>
    <img className='w-full h-auto object-contain' src='https://www.shu.edu/images/opengraph-twitter-1200x600.jpg'></img>
    <p className='text-center text-[1.5rem] font-bold py-17 text-[#003366]' >Ready to get involved with CYC?<br/>Click <NavLink className='underline hover:text-[#D17359] transition-all duration-250' to='/SAP'>here</NavLink> to join our community!</p>
    </section>
    <section className='text-center'>
    <div className='w-full bg-[#f3f3f3] text-[#003366]' >
    <p className='text-[2.2rem] font-bold' >Our Impact</p>
    <div className='flex flex-wrap gap-19 mx-auto py-7 justify-center'>
    <div><p><b className='text-[3rem] font-normal tracking-tighter'><CountUp end={15} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/>+</b><br/>Clients since our<br/>start in 2018</p></div>
    <div><p><b className='text-[3rem] font-normal tracking-tighter'><CountUp end={6000} duration={2} useEasing={false} separator='' enableScrollSpy scrollSpyOnce/>+</b><br/>Hours of pro-bono<br/>consulting</p></div>
    <div><p><b className='text-[3rem] font-normal tracking-tighter'><CountUp end={46} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/>+</b><br/>Active CYC Seton Hall<br/>members</p></div>
    <div><p><b className='text-[3rem] font-normal tracking-tighter'><CountUp end={31} duration={2} useEasing={false} enableScrollSpy scrollSpyOnce/>+</b><br/>CYC Chapters<br/>Nationwide</p></div>
    </div>
    </div>
    </section> 
    <section>
    <div className='py-20 mx-auto w-3/5 text-[#003366]'>
    <h1 className='text-[3.7rem] font-bold pb-7'>CYC at a Glance</h1>
    <p className='pb-7 text-[1.1rem]'>At Consult Your Community, our goal is to help local small businesses thrive by tackling the challenges that hold them back. Through our pro bono consulting program, we pair passionate student teams with businesses and nonprofits, providing practical, research-driven solutions that make a real difference.</p>
    <p className='text-[1.1rem]'>We aim to empower neighborhoods, encourage growth for small businesses, and make a tangible difference through hands-on collaboration and meaningful projects.</p>
    </div>
    <div className='bg-[#99ccee] flex flex-wrap justify-center w-fit px-6 md:px-20 py-15 pb-10 mx-auto gap-6 md:gap-10'>
    <figure>
    <img className='w-full md:w-[350px] h-[400px] object-cover' src={myPhoto}></img>
    <figcaption className='bg-white font-bold indent-5  py-4 text-[1.3rem] relative bottom-11 left-4 text-[#003366]'>Pro-Bono Consulting</figcaption>
    </figure>
    <figure>
    <img className='w-full md:w-[350px] h-[400px] object-cover' src={Image3}></img>
    <figcaption className='bg-white font-bold indent-5 py-4 text-[1.3rem] relative bottom-11 left-4 text-[#003366]'>Community</figcaption>
    </figure>
    <figure>
    <img className='w-full md:w-[350px] h-[400px] object-cover' src={Image5}></img>
    <figcaption className='bg-white font-bold indent-5  py-4 text-[1.3rem] relative bottom-11 left-4 text-[#003366]'>
Engagement Teams</figcaption>
    </figure>
    <figure>
    <img className='w-full md:w-[350px] h-[400px] object-cover' src={myPhoto2}></img>
    <figcaption className='bg-white font-bold indent-5  py-4 text-[1.3rem] relative bottom-11 left-4 text-[#003366]'>Events</figcaption>
    </figure>
    </div>
    </section>
    <section>
    <p className='text-center font-bold text-[1.8rem] mt-13 mb-7'><span className='text-[#003366]'>Follow us on Instagram</span> <a href='https://www.instagram.com/cyc.shu/' className='cursor-pointer hover:text-[#D17359] transition-all duration-250 text-[#023b74ae]'>@cyc.shu</a></p>
 <div className="flex flex-wrap gap-4 mx-auto justify-center px-4">
  <div className="group relative w-full md:w-65 h-65">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>We’re BACK‼️<br/>Happy to see everyone after<br/>a relaxing fall break,<br/> <br/> we are ready to get back into it</p>
  <video muted onMouseEnter={(e) => e.target.play()}  loop src="AQOqBw4bWLJk8Rqsh9frERwCXOAjEwAwivQ6iuSGtOwSgJQKZ-7TaD96XjwIty7yFzE3jzpVZKuzs3L1NouHF0bF2Uu86A9MLgk0I-Q.mp4" className='absolute inset-0 w-full h-full object-cover'>
    </video>
</div>
  <div className="group relative w-full md:w-65 h-65">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'><br/><br/><br/>CYC Public Speaking Roulette 🎤</p>
  <video muted onMouseEnter={(e) => e.target.play()}  loop src='AQNP0O9yL2MkNTlLtNWjmO9VmGddrayZEf8kMn9EgS7yFKpkxeWHRqjjb66kcmCPewJbtwBdOgVGqvqQpNjCUGMfQVwpLDSh9460COs.mp4' className='absolute inset-0 w-full h-full object-cover'>
    </video>
</div>
  <div className="group relative w-full md:w-65 h-65">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'><br/><br/><br/>Speed Networking✅</p>
  <video muted onMouseEnter={(e) => e.target.play()}  loop src='AQP6Er7s23qI_Mb2f4J105OA9fWLiC1l44KlyehbyNmNFhU97GRPWhx2CDBi9apn5RCZxuFZRS3VHwGRWCI6jMuVDoE1zRfQ6vkHOM0.mp4' className='absolute inset-0 w-full h-full object-cover'>
    </video>
</div>
</div>
 <div className="flex flex-wrap gap-4 mx-auto justify-center my-5 px-4">
  <div className="group relative w-full md:w-65 h-65">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>That’s a wrap!<br/>This week, we celebrated the<br/>end of an incredible semester<br/>with our<br/>CYC Finals Party<br/> <br/>and it was nothing short of amazing</p>
  <video muted onMouseEnter={(e) => e.target.play()}  loop src="AQOhW_xgAF1ju_nkX83VZkf783NAbb3_V8-eVFcdigNOVifbADQ1DgVyMWfsLJ5qv9jBOG_1kwaX4mS4mWWY2WqFnF0pI1CA7FrsuH4.mp4" className='absolute inset-0 w-full h-full object-cover'>
    </video>
</div>
  <div className="group relative w-full md:w-65 h-65">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'><br/><br/>CYC’s Pie the E-Board<br/> was a smashing success,<br/>and also<br/>a complete mess. 😭</p>
  <video muted onMouseEnter={(e) => e.target.play()}  loop src="AQPabT8Ed6wbCYzoZdprimnIInSrFnR0VKwg4FRNsNPbAn4uJy997tZA276SiO6QpxQuRwpWW8zmxmHpk4UaAEUSQGw44ndNlO2k3Js.mp4" className='absolute inset-0 w-full h-full object-cover'>
    </video>
</div>
<div className="group relative w-full md:w-65 h-65">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>The decks were clean,<br/>the outfits were cleaner.<br/>When it comes to presentations,<br/>CYC doesn’t miss<br/> <br/>on content or style.</p>
  <video muted onMouseEnter={(e) => e.target.play()}  loop src="AQNRpsi1zuPkf2q-SRK1wVkJ1FD7mVPrAZYk-W_R09UPRGBhf1CDRcy7-4iwSQiDqXBlCR2kQRFjuHs4UHkp1RXr9gv2Oe0wWx83xcU.mp4" className='absolute inset-0 w-full h-full object-cover'>
    </video>
</div>
</div>
<div className={`flex flex-wrap gap-4 mx-auto justify-center my-5 px-4 ${visibleCount >= 1 ? '' : 'hidden'}`}>
  <div className="group relative w-full md:w-65 h-65">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'><br/><br/><br/>Great things take time.</p>
  <video muted onMouseEnter={(e) => e.target.play()}  loop src='InstaVid1.mp4' className='absolute inset-0 w-full h-full object-cover'>
    </video>
</div>
  <div className="group relative w-full md:w-65 h-65">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>From solving real-world problems<br/>to presenting polished strategies,<br/>our teams brought their<br/><br/>A-game to the final presentations.</p>
  <video muted onMouseEnter={(e) => e.target.play()}  loop src="AQM8BWXhmTFfyWtsjn5UftvJRiBTWrzCJ24NKgaHYGCdyXguNMKrbO4XgnBCK4C4zzHKceh_CifCWv0R1_m0h_VIo9pDSA09MIN1IS4.mp4" className='absolute inset-0 w-full h-full object-cover'>
    </video>
</div>
<div className="group relative w-full md:w-65 h-65">
  <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
  <p className='text-white text-center p-5 text-[1.1rem] z-20 opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none'>Other consulting orgs?<br/>Never heard of them. 🤷‍♂️<br/><br/>We don’t just consult,<br/><br/>we CYC the future. 😎💼 </p>
  <video muted onMouseEnter={(e) => e.target.play()}  loop src="AQPCFM2N0-G7XXDOzEvxYFLDJe2zDcC9rftvGiJnsDx_rC8-BFKy7rcznjVQH6B13lUEkAN-_YcEvJ66Lwv9RKjbLw8HxC5GnO5tmvY.mp4" className='absolute inset-0 w-full h-full object-cover'>
    </video>
</div>
</div>
<button onClick={loadMore} type='button' className={`cursor-pointer px-6 py-2 my-10 block mx-auto text-[#003366] bg-white border-[#003366] hover:text-[#D17359] hover:border-[#D17359] border-1 transition-border duration-250 ease-in-out ${visibleCount === 1 ? 'hidden ' : ''}`}>Load more</button>

    </section>
    </>);




}

export default Home;