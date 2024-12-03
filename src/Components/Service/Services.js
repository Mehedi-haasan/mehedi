import React from "react";
import "../Style/All.css"
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import LearnMore from "../Icon/LearnMore";
import WebDev from "../Icon/WebDev";
import SoftDev from "../Icon/SoftDev";
const Services = () => {
  const data = [
    {
      id: 1,
      name: "Tribel.com",
      description: "Web development is the process of creating websites and web applications for the internet or intranet.",
      path: "https://www.tribel.com/"
    }
  ]
  return (
    <>
      <div className="our-service" name="services">
        <div className="text-center pt-[60px] w-full pb-20 md:w-[90%] lg:w-[75%] mx-auto">
          <h3 className="text-4xl text-base-200 service-head">
            Bring The Revolution With
            <br /> The <span className="potential">Diligence</span> Service
          </h3>
          <div className="container grid grid-cols-12 gap-4 lg:mt-[70px] p-2 w-full mx-auto">


            {/* {
              data?.map((item) => {
                return <div className="card w-[330px] lg:w-[350px] xl:w-[360px] grid col-span-12  md:col-span-6 xl:col-span-4 service-item-card my-4 py-2">
                  <div className="icon pt-5 pl-8">
                    <WebDev />
                  </div>

                  <div className="card-body">
                    <h2 className="text-2xl card-title text-white">
                      {item?.name}
                    </h2>
                    <p className="text-base-200 service-item-text">
                      {item?.description}
                    </p>{" "}
                    <div className="card-actions">
                      <div className="service-item-button">
                        <a href={item?.path}>
                          <LearnMore />
                          <span className="text-white font-bold flex btn-text">Learn More<Icon icon="maki:arrow" width='15px' className="font-bold mt-1 ml-1" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              })
            }

            <div className="card w-[330px] lg:w-[350px] xl:w-[360px] grid col-span-12 md:col-span-6 xl:col-span-4 service-item-card my-4 py-2">
              <div class="icon pt-5 pl-8">
                <SoftDev />
              </div>

              <div className="card-body">
                <h2 className="text-2xl card-title text-white">
                  Charitable Donation
                </h2>
                <p className="text-white service-item-text">
                  Web development is the process of creating websites and web
                  applications for the internet or intranet.
                </p>{" "}
                <div className="card-actions">
                  <div className="service-item-button">
                    <NavLink to="/workflow">
                      <LearnMore />
                      <span className="text-white font-bold flex btn-text">Learn More<Icon icon="maki:arrow" width='15px' className="font-bold mt-1 ml-1" /></span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div> */}


            <div className="grid col-span-12 md:col-span-6 xl:col-span-4 border border-white px-8 py-5 rounded-lg w-full">
              <div class="icon">
                <SoftDev />
              </div>

              <div className="">
                <h2 className="text-2xl text-white text-left py-3"> Charitable Donation</h2>
                <p className="text-white text-left py-1">
                  Web development is the process of creating websites and web
                  applications for the internet or intranet.
                </p>
                <div className="card-actions pt-5 pb-3">
                  <div className="service-item-button">
                    <NavLink to="/workflow">
                      <LearnMore />
                      <span className="text-white font-bold flex btn-text">Learn More<Icon icon="maki:arrow" width='15px' className="font-bold mt-1 ml-1" /></span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Services;
