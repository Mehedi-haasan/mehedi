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
        <div className="flex justify-between items-center w-full md:w-[90%] lg:w-[70%] mx-auto py-10">
          <div className=''>
            <h5 className='text-white'>Hello i am</h5>
            <h1 className="font-bold text-white text-3xl py-1">Mehedi hasan</h1>
            <h1 className='text-white py-1'>2 years of Experiance</h1>
            <button className="btn btn-success px-14 font-bold mb-[15px] mt-[15px] text-white">
              Contact
            </button>
            <div className="flex justify-start items-center gap-0">
              <a href="igdyu">
                <Icon icon="logos:facebook" className="social-i " />
              </a>
              <a href="ifhysd">
                <Icon icon="logos:twitter" className="social-i" />
              </a>
              <a href="uhfyrf">
                <Icon icon="skill-icons:instagram" className="social-i" />
              </a>
              <a href="lhfyf">
                <Icon icon={"logos:whatsapp-icon"} className="social-i" />
              </a>
            </div>
          </div>
          <div>
            <img src={profile} alt="sg" className="rounded max-h-[320px] max-w-[290px]" />
          </div>
        </div>

        <h1 className='text-white text-2xl lg:text-5xl font-bold text-center py-10'>How I Work</h1>

        <div className='grid grid-cols-10 w-full pb-20 md:w-[90%] lg:w-[70%] mx-auto text-white'>

          <div className='grid col-span-10 lg:col-span-2 '>
            <div className='bg-[#06D889] h-16 w-16 rounded-full justify-center flex item-center text-white mx-auto'>
              <img src={image2} alt='ihhd' className='h-10 w-10 p-auto  mt-3' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Requirements Gathering.</h1>
            <p className='p-3 text-[#b5b5b5]'>Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full mx-auto justify-center flex item-center text-white'>
              <img src={image1} alt='ihhd' className='h-10 w-10 p-auto  mt-3' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Analysis And Planning.</h1>
            <p className='p-3 text-[#b5b5b5]'>Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full mx-auto justify-center flex item-center text-white'>
              <img src={image} alt='ihhd' className='h-10 w-10 p-auto  mt-3' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Design & Development.</h1>
            <p className='p-3 text-[#b5b5b5]'>Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full mx-auto justify-center flex item-center text-white'>
              <img src={image3} alt='ihhd' className='h-10 w-10 p-auto  mt-3' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Testing Device & Release.</h1>
            <p className='p-3 text-[#b5b5b5]'>Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2'>
            <div className='bg-[#06D889] h-16 w-16 rounded-full mx-auto justify-center flex item-center text-white'>
              <img src={image4} alt='ihhd' className='h-10 w-10 p-auto  mt-2' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Maintenance And Support.</h1>
            <p className='p-3 text-[#b5b5b5]'>Interdum et malesuada fames acchiv Etiam europeat nibhona elementum, accumsan ona.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
