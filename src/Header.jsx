
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function Header(){
const [mobileOpen, setMobileOpen] = useState(false);
const [aboutOpen, setAboutOpen] = useState(false);
const [resourcesOpen, setResourcesOpen] = useState(false);

return(

<div className='flex justify-between bg-[#f3f3f3] px-6 py-4 items-center text-[#003366]'>

<div>
<div className='flex'>
<NavLink to="/Home"><button className='cursor-pointer p-0 border-none bg-transparent translate-x-5 w-[100px]'><img className='w-32' alt='button img' src='https://static.wixstatic.com/media/d7af91_e0aac58a6988431aae99a5732975e914~mv2.png/v1/crop/x_0,y_0,w_180,h_125/fill/w_222,h_154,al_c,lg_1,q_85,enc_avif,quality_auto/cyc%20logo%20blue_edited.png'></img></button></NavLink>
</div>
</div>

{/* Hamburger button - mobile only */}
<button className='md:hidden cursor-pointer p-2 border-none bg-transparent' onClick={() => setMobileOpen(!mobileOpen)}>
{mobileOpen ? <X size={28} /> : <Menu size={28} />}
</button>

{/* Desktop nav */}
<div className='hidden md:flex m-0 gap-10 mt-5 mr-15'>
<div className='relative group h-10'>
<p className='cursor-pointer hover:text-black transition-all duration-150 font-bold group-hover:opacity-50 text-[1.05rem]'><NavLink to="/Home">HOME</NavLink></p>
</div>
<div className='relative group'>
<p className='cursor-pointer hover:text-black transition-all duration-250 font-bold group-hover:opacity-50 text-[1.05rem]'><NavLink to="/OurTeam">OUR TEAM</NavLink></p>
</div>
<div className='relative group'>
<p className='cursor-pointer hover:text-black transition-all duration-250 font-bold group-hover:opacity-50 text-[1.05rem]'><NavLink to="/CAP">APPLY</NavLink></p>
</div>
<div className='relative group'>
<p className='cursor-default hover:text-black transition-all duration-250 font-bold group-hover:opacity-50 text-[1.05rem] flex items-center gap-1'>RESOURCES <ChevronDown size={16} /></p>
<div className='hidden group-hover:block absolute bg-neutral-200/50 h-auto w-56 text-right p-2 mt-1 text-[1.05rem] z-40'>
<p><b className='font-bold relative b-10 hover:text-neutral-400 transition-colors duration-200 cursor-pointer block text-left'><NavLink to="/OurServices">Our Services</NavLink></b></p>
<p><b className='font-bold relative py-1 block hover:text-neutral-400 transition-colors duration-200 cursor-pointer text-left'><NavLink to="/Events">Events</NavLink></b></p>
<p><b className='font-bold relative py-1 block hover:text-neutral-400 transition-colors duration-200 cursor-pointer text-left'><NavLink to="/PastEngagements">Past Engagements</NavLink></b></p>
</div>
</div>
<div className='relative group'>
<p className='cursor-default hover:text-black transition-all duration-250 font-bold group-hover:opacity-50 text-[1.05rem] flex items-center gap-1'>ABOUT <ChevronDown size={16} /></p>
<div className='hidden group-hover:block absolute bg-neutral-200/50 h-auto w-40 text-right p-2 mt-1 text-[1.05rem] z-40'>
<p><b className='font-bold relative hover:text-neutral-400 transition-colors duration-200 cursor-pointer block text-left'><NavLink to="/About">About Us</NavLink></b></p>
<p><b className='font-bold relative py-1 block hover:text-neutral-400 transition-colors duration-200 cursor-pointer text-left'><NavLink to="/Impact">Impact</NavLink></b></p>
<p><b className='font-bold relative py-1 block hover:text-neutral-400 transition-colors duration-200 cursor-pointer text-left'><NavLink to="/Alumni">Alumni</NavLink></b></p>
</div>
</div>
</div>

{/* Mobile nav */}
{mobileOpen && (
<div className='md:hidden absolute top-20 left-0 w-full bg-[#f3f3f3] z-50 px-6 py-4 shadow-lg'>
<div className='flex flex-col gap-4'>
<NavLink to="/Home" className='font-bold text-[1.05rem] hover:text-black' onClick={() => setMobileOpen(false)}>HOME</NavLink>
<NavLink to="/OurTeam" className='font-bold text-[1.05rem] hover:text-black' onClick={() => setMobileOpen(false)}>OUR TEAM</NavLink>
<NavLink to="/CAP" className='font-bold text-[1.05rem] hover:text-black' onClick={() => setMobileOpen(false)}>APPLY</NavLink>

<div>
<button className='font-bold text-[1.05rem] hover:text-black cursor-pointer bg-transparent border-none text-[#003366] flex items-center gap-1 p-0' onClick={() => setResourcesOpen(!resourcesOpen)}>RESOURCES <ChevronDown size={16} className={`transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} /></button>
{resourcesOpen && (
<div className='pl-4 flex flex-col gap-2 mt-2'>
<NavLink to="/OurServices" className='hover:text-neutral-400' onClick={() => setMobileOpen(false)}>Our Services</NavLink>
<NavLink to="/Events" className='hover:text-neutral-400' onClick={() => setMobileOpen(false)}>Events</NavLink>
<NavLink to="/PastEngagements" className='hover:text-neutral-400' onClick={() => setMobileOpen(false)}>Past Engagements</NavLink>
</div>
)}
</div>

<div>
<button className='font-bold text-[1.05rem] hover:text-black cursor-pointer bg-transparent border-none text-[#003366] flex items-center gap-1 p-0' onClick={() => setAboutOpen(!aboutOpen)}>ABOUT <ChevronDown size={16} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} /></button>
{aboutOpen && (
<div className='pl-4 flex flex-col gap-2 mt-2'>
<NavLink to="/About" className='hover:text-neutral-400' onClick={() => setMobileOpen(false)}>About Us</NavLink>
<NavLink to="/Impact" className='hover:text-neutral-400' onClick={() => setMobileOpen(false)}>Impact</NavLink>
<NavLink to="/Alumni" className='hover:text-neutral-400' onClick={() => setMobileOpen(false)}>Alumni</NavLink>
</div>
)}
</div>
</div>
</div>
)}
</div>
);
}

export default Header;
