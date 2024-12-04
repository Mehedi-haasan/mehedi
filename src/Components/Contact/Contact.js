import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async () => {
    console.log(values);
    // const response = await fetch(`http://localhost:8050/api/create/contact`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(values),
    // });
    // const data = await response.json();
    // alert(data.message)
  };


  return (
    <div name="contact">
      <div className="contact-us">
        <div className="lg:flex justify-between items-start w-full md:w-[90%] lg:w-[75%] mx-auto ">
          <div className="contact-first pl-2 py-10 my-10">
            <div className="mt-[20px]">
              <h5 className="potential">CONTACT WITH ME</h5>
              <h6 className="text-white text-3xl mt-[10px]">
                LET’S WORK TOGETHER?
              </h6>
              <p className="contact-item-text">
                I have worls-class, flexible support via live chat, email and
                hone. I <br></br>guarantee that you’ll be able to have any issue
                resolved within 24 hours.
              </p>
              <div className="flex justify-start items-center gap-1 pt-2">
                <Icon icon="zondicons:location" className="address-icon" />
                <p className="text-[#b5b5b5] hover:text-[#06D889]">
                  Uttara Sector #15
                </p>
              </div>
              <div className="flex justify-start items-center gap-1 pt-2">
                <Icon icon="fluent:call-16-filled" className="address-icon " />
                <a href="tel:+123456789" className="text-[#b5b5b5]">+8801750834062</a>
              </div>


              <div className="flex justify-start items-center gap-1 pt-2">
                <Icon icon="ic:round-email" className="address-icon" />
                <a href="mailto:mrmehedihhasan@gmail.com" className="text-[#b5b5b5]">
                  mrmehedihhasan@gmail.com
                </a>
              </div>
            </div>
            <div className="follow mt-[20px]">
              <h3 className="text-white font-bold text-2xl">Follow me</h3>
              <h5 className="p-text">Follow me on Social Network</h5>
              <div className="social-network flex">
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
          <div className="flex justify-center lg:justify-end items-end">
            <div className="contact-second shadow-2xl py-10 my-10">
              <div className="w-full bg-[#1C2426] rounded-md mt-[20px]">
                <h3 className="text-center text-white text-3xl py-10"> Make a Free Consulting</h3>
                <hr />


                <div className="col-span-12 md:col-span-6 mx-3">
                  <h1 className="text-2xl lg:text-2xl ml-1 text-white italic my-3 ">
                    To get a free consultation please leave your questions.
                  </h1>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="">
                      <input
                        type="name"
                        className="border-[1px] w-full p-2 bg-gray-100 my-1 rounded-lg"
                        placeholder="Full Name"
                        name="Fname"
                        onChange={(e) => { setValues({ ...values, first_name: e.target.value })}}/>
                    </div>
                    <div className="">
                      <input
                        type="lname"
                        className="border-[1px] w-full p-2 bg-gray-100 my-1 rounded-lg"
                        placeholder="Last name"
                        name="lname"
                        onChange={(e) => {
                          setValues({ ...values, last_name: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="name"
                      className="border-[1px] w-full p-2 bg-gray-100 my-1 rounded-lg"
                      placeholder="Company/Organization"
                      name="company"
                      onChange={(e) => {
                        setValues({ ...values, company: e.target.value });
                      }}
                    />
                  </div>

                  <div>
                    <input
                      type="name"
                      className="border-[1px] w-full p-2 bg-gray-100 my-1 rounded-lg"
                      placeholder="Email"
                      name="Email"
                      onChange={(e) => {
                        setValues({ ...values, email: e.target.value });
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="phone"
                      className="border-[1px] w-full p-2 bg-gray-100 my-1 rounded-lg"
                      placeholder="Phone"
                      name="phone"
                      onChange={(e) => {
                        setValues({ ...values, phone: e.target.value });
                      }}
                    />
                  </div>

                  <div className="">
                    <textarea
                      type="text"
                      placeholder="Type Your Message"
                      className="border-[1px] w-full h-[130px] bg-gray-100 p-2 my-2 rounded-lg"
                      name="Message"
                      onChange={(e) => {
                        setValues({ ...values, message: e.target.value });
                      }}
                    />
                    <h2 className="font-semibold italic text-white px-1">
                      We will get back to you within 24hrs.
                    </h2>

                    <button
                      className="btn btn-success px-14 font-bold mb-[40px] mt-[40px]"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
