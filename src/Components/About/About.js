import React from "react";
import { Icon } from "@iconify/react";
import image from '../Image/app-development.png'
import image1 from '../Image/analysis.png'
import image2 from '../Image/requirement.png'
import image3 from '../Image/testing (1).png'
import image4 from '../Image/monitoring.png'
import profile from '../Image/profile.png'


const About = () => {
  return (
    <div name='about'>
      <div className='bg-black py-5 md:ml-0'>
        <div className="md:flex justify-between items-start w-full md:w-[90%] lg:w-[75%] mx-auto py-10">
          <div className="flex justify-center items-start">
            <div className=''>
              <h5 className='text-white'>Hello i am</h5>
              <h1 className="font-bold text-white text-3xl py-1">Mehedi hasan</h1>
              <h1 className='text-white py-1'>2 years of Experiance</h1>
              <button className="btn btn-success px-14 font-bold mb-[15px] mt-[15px] text-white">
                Contact
              </button>
              <div className="flex justify-start items-center gap-0">
                <a href="https://www.facebook.com/profile.php?id=100009684126239">
                  <Icon icon="logos:facebook" className="social-i " />
                </a>
                <a href="https://x.com/mrmehedihaasan">
                  <Icon icon="logos:twitter" className="social-i" />
                </a>
                <a href="https://www.instagram.com/mehedi5149/">
                  <Icon icon="skill-icons:instagram" className="social-i" />
                </a>
                <a href="https://web.whatsapp.com/">
                  <Icon icon={"logos:whatsapp-icon"} className="social-i" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-start">
            <img src={profile} alt="sg" className="rounded max-h-[320px] max-w-[290px]" />
          </div>
        </div>

        <h1 className='text-white text-2xl lg:text-5xl font-bold text-center py-5 lg:py-10'>How I Work</h1>

        <div className='grid grid-cols-10 w-full pb-10 md:w-[90%] lg:w-[75%] mx-auto text-white gap-2'>

          <div className='grid col-span-10 lg:col-span-2 text-center'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full justify-center flex items-center text-white mx-auto'>
              <img src={image2} alt='Requirements Gathering Icon' className='h-10 w-10 mt-3' />
            </div>
            <h1 className='text-lg p-1 font-semibold'>Requirements Gathering</h1>
            <p className='p-1 text-[#b5b5b5]'>Understanding the client's needs and objectives to define a clear project scope.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2 text-center'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full mx-auto justify-center flex items-center text-white'>
              <img src={image1} alt='Analysis and Planning Icon' className='h-10 w-10 mt-3' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Analysis and Planning</h1>
            <p className='p-3 text-[#b5b5b5]'>Developing a strategic plan to ensure a smooth workflow and successful project execution.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2 text-center'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full mx-auto justify-center flex items-center text-white'>
              <img src={image} alt='Design and Development Icon' className='h-10 w-10 mt-3' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Design & Development</h1>
            <p className='p-3 text-[#b5b5b5]'>Creating visually appealing designs and building robust, scalable solutions.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2 text-center'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full mx-auto justify-center flex items-center text-white'>
              <img src={image3} alt='Testing and Release Icon' className='h-10 w-10 mt-3' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Testing & Release</h1>
            <p className='p-3 text-[#b5b5b5]'>Ensuring quality through rigorous testing before delivering the final product.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2 text-center'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full mx-auto justify-center flex items-center text-white'>
              <img src={image4} alt='Maintenance and Support Icon' className='h-10 w-10 mt-2' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Maintenance & Support</h1>
            <p className='p-3 text-[#b5b5b5]'>Providing ongoing support and updates to ensure sustained performance.</p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default About;
