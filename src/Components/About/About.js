import React from "react";
import { Icon } from "@iconify/react";
import image from '../Image/app-development.png'
import image1 from '../Image/analysis.png'
import image2 from '../Image/requirement.png'
import image3 from '../Image/testing (1).png'
import image4 from '../Image/monitoring.png'
import profile from '../Image/profile.png'
import Node from "../Icon/Node";
import Aws from "../Icon/Aws";
import Reac from "../Icon/Reac";
import Next from "../Icon/Next";
import Javas from "../Icon/Javas";
import Git from "../Icon/Git";
import TypeS from "../Icon/TypeS";
import Tail from "../Icon/Tail";
import Mongo from "../Icon/Mongo";
import Sql from "../Icon/Sql";
import Jira from "../Icon/Jira";
import ClientReview from "../Client/ClientReview";



const About = () => {
  return (
    <div name='about' className="bg-black">
      <div className='bg-black py-5 md:ml-0'>
        <div className="md:flex justify-between items-start w-full md:w-[90%] lg:w-[75%] mx-auto py-10">
          <div className="flex justify-center items-start">
            <div className='px-3'>
              <h5 className='text-white'>Hello i am</h5>
              <h1 className="font-bold text-white text-3xl py-1">Mehedi hasan</h1>
              <h1 className='text-white py-1'>2 years of Experiance</h1>
              <h1 className="text-white py-1 text-lg font-semibold">I'm Expartise with</h1>
              <div className="lg:flex gap-1.5 h-36 lg:h-12">
                <div className="relative w-[235px]">
                  <Aws className="cursor-pointer hover:h-[45px] hover:w-[45px] absolute top-0 left-0" />
                  <Node className="cursor-pointer hover:h-[45px] hover:w-[45px] absolute top-0 left-12" />
                  <Reac className="cursor-pointer hover:h-[45px] hover:w-[45px] absolute top-0 left-24" />
                  <Next className="cursor-pointer hover:h-[45px] hover:w-[45px] absolute top-0 left-36" />
                  <Javas className="cursor-pointer hover:h-[45px] hover:w-[45px] absolute top-0 left-48" />
                </div>
                <div className="relative w-[235px] mt-1.5 lg:mt-0">
                  <TypeS className="cursor-pointer hover:h-[45px] hover:w-[45px] absolute top-12 lg:top-0 left-0" />
                  <Mongo className="cursor-pointer hover:h-[45px] hover:w-[45px] absolute top-12 lg:top-0 left-12" />
                  <Sql className="cursor-pointer hover:h-[45px] hover:w-[45px] absolute top-12 lg:top-0 left-24" />
                  <Git className="cursor-pointer hover:h-[45px] hover:w-[45px] absolute top-12 lg:top-0 left-36" />
                  <Tail className="cursor-pointer hover:h-[45px] hover:w-[45px] absolute top-12 lg:top-0 left-48" />
                </div>
                <div className="relative w-[50px] mt-1.5 lg:mt-0">
                  <Jira className="cursor-pointer hover:h-[45px] hover:w-[45px] absolute top-24 lg:top-0 left-0"/>
                </div>
              </div>
              <button className="btn btn-success px-14 font-bold mb-[15px] mt-[15px] text-white">
                Contact
              </button>
              <div className="relative h-12">
                <a href="https://www.facebook.com/profile.php?id=100009684126239" className="absolute top-0 left-0">
                  <Icon icon="logos:facebook" className="h-[30px] w-[30px] hover:h-[40px] hover:w-[40px]" />
                </a>
                <a href="https://x.com/mrmehedihaasan" className="absolute top-0 left-10 hover:left-[37px]">
                  <Icon icon="logos:twitter" className="h-[35px] w-[35px] hover:h-[40px] hover:w-[40px]" />
                </a>
                <a href="https://www.instagram.com/mehedi5149/" className="absolute top-0 left-[84px] hover:left-[78px]">
                  <Icon icon="skill-icons:instagram" className="h-[30px] w-[30px] hover:h-[40px] hover:w-[40px]" />
                </a>
                <a href="https://www.linkedin.com/in/mehedi-hasan-0aa7b62b5/" className="absolute top-0 left-[125px] hover:left-[120px]">
                  <Icon icon={"logos:linkedin-icon"} className="h-[30px] w-[30px] hover:h-[40px] hover:w-[40px]" />
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

          <div className='grid col-span-10 lg:col-span-2 text-center border p-1 md:p-2 lg:p-3 rounded md:rounded-md'>
            <div className='bg-[#06D889] h-14 md:h-16 w-14 md:w-16 rounded-full justify-center flex items-center text-white mx-auto'>
              <img src={image2} alt='Requirements Gathering Icon' className='h-8 md:h-10 w-8 md:w-10 p-0' />
            </div>
            <h1 className='text-lg p-1 font-semibold'>Requirements Gathering</h1>
            <p className='p-1 text-[#b5b5b5]'>Understanding the client's needs and objectives<br /> to define a clear project scope.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2 text-center border p-1 md:p-2 lg:p-3 rounded md:rounded-md'>
            <div className='bg-[#06D889] h-14 md:h-16 w-14 md:w-16 rounded-full mx-auto justify-center flex items-center text-white'>
              <img src={image1} alt='Analysis and Planning Icon' className='h-8 md:h-10 w-8 md:w-10 p-0' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Analysis and Planning</h1>
            <p className='p-3 text-[#b5b5b5]'>Developing a strategic plan to ensure a smooth<br /> workflow and successful project execution.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2 text-center border p-1 md:p-2 lg:p-3 rounded md:rounded-md'>
            <div className='bg-[#06D889] h-14 md:h-16 w-14 md:w-16 rounded-full mx-auto justify-center flex items-center text-white'>
              <img src={image} alt='Design and Development Icon' className='h-8 md:h-10 w-8 md:w-10 p-0' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Design & Development</h1>
            <p className='p-3 text-[#b5b5b5]'>Creating visually appealing designs and <br />building robust, scalable solutions.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2 text-center border p-1 md:p-2 lg:p-3 rounded md:rounded-md'>
            <div className='bg-[#06D889] h-14 md:h-16 w-14 md:w-16 rounded-full mx-auto justify-center flex items-center text-white'>
              <img src={image3} alt='Testing and Release Icon' className='h-8 md:h-10 w-8 md:w-10 p-0' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Testing & Release</h1>
            <p className='px-3 pb-3 pt-2 md:pt-3 text-[#b5b5b5]'>Ensuring quality through rigorous testing<br /> before delivering the final product.</p>
          </div>

          <div className='grid col-span-10 lg:col-span-2 text-center border p-1 md:p-2 lg:p-3 rounded md:rounded-md'>
            <div className='bg-[#06D889] h-14 md:h-16 w-14 md:w-16 rounded-full mx-auto justify-center flex items-center text-white'>
              <img src={image4} alt='Maintenance and Support Icon' className='h-8 md:h-10 w-8 md:w-10 mt-2' />
            </div>
            <h1 className='text-lg p-3 font-semibold'>Maintenance & Support</h1>
            <p className='p-3 text-[#b5b5b5]'>Providing ongoing support and updates<br /> to ensure sustained performance.</p>
          </div>

        </div>


      </div>

      <ClientReview/>
    </div>
  );
};

export default About;
