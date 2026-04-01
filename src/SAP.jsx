import React from "react";
import { useState, useEffect} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function SAP(){
    const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://www.shu.edu/images/psychology-club-320x180.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500); 

    return () => clearInterval(interval); 
  }, [currentIndex]);
    
    return(
    <>
    <div className='relative h-[1000px]'>

        <a href='https://forms.office.com/r/4urSNniCaB'><div className='absolute inset-0 group mx-auto w-[600px] h-[600px] z-50 rounded-full cursor-pointer translate-y-50'>
        <h1 className='text-[#003366] absolute inset-0 font-bold text-[2rem] z-40  text-center group-hover:text-white pointer-events-none translate-y-30 transition-colors duration-200'>Become a Student Consultant</h1>
        <p className='absolute inset-0 z-40  text-center text-[#003366] group-hover:text-white pointer-events-none translate-y-50 transition-colors duration-200'>Interested in joining our team? Each semester, Consult Your<br/>Community at Seton Hall invites passionate, community-driven<br/>students to apply! As a student consultant, you’ll collaborate in<br/>interdisciplinary teams to deliver pro-bono consulting services to<br/>local small businesses and nonprofits.<br/><br/>To learn more about our national organization, the kinds of<br/>projects we take on, and the lasting impact of our work,<br/>please contact setonhall@consultyourcommunity.org
.<br/><br/><br/><br/>Click Here for Student Application Form</p>
        <div className='absolute inset-0 bg-white w-[600px] h-[600px] opacity-50 mx-auto rounded-full text-center z-30 group-hover:bg-[#003366] group-hover:opacity-100 transition-colors duration-300'>
        </div>
        </div></a>
        

     <div className="absolute inset-0 w-full mx-auto">
      <div className="relative ">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-[1000px] object-cover shadow-lg transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/0 text-white p-3 rounded-full"
      >
        <ChevronLeft className="hover:text-[#003366] cursor-pointer transition-colors duration-200" size={80} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/0 text-white p-3 rounded-full"
      >
        <ChevronRight className="hover:text-[#003366] cursor-pointer transition-colors duration-200" size={80} strokeWidth={1}/>
      </button>
    </div>
    </div>
    </>
    );
}

export default SAP;