import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Star from "../Icon/Star";

const ClientReview = () => {
    const clients = [
        {
            name: "Abdul Halim",
            image: "https://img.freepik.com/free-photo/pleased-hipster-male-adult-points-with-index-finger-upper-right-corner-dressed-stylish-clothes_273609-23572.jpg?w=1380&t=st=1688669735~exp=1688670335~hmac=0f2fc9eed3eeed19eb64b6edfaf3e2ea1d536bf2c6d1fcb8e2336b2de205e6fe",
            review: "An outstanding service! They truly understand the unique challenges and goals of small businesses.",
            rate: 5
        },
        {
            name: "John Abraham",
            image: "https://img.freepik.com/free-photo/serious-pleasant-looking-hipster-with-afro-hairstyle_273609-17457.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=sph",
            review: "Great experience working with them! Their solutions are tailored and effective.",
            rate: 4
        },
        {
            name: "Necola Mandana",
            image: "https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=sph",
            review: "Highly professional and dedicated team. They exceeded my expectations!",
            rate: 5
        },
        {
            name: "Sheikh Shakil",
            image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1402415944.1685737805&semt=sph",
            review: "Impressive work! They understand the market and provided excellent solutions.",
            rate: 4
        },
        {
            name: "Ashok Mredha",
            image: "https://img.freepik.com/premium-photo/portrait-businessman-grunge-style_743855-18797.jpg?size=626&ext=jpg&ga=GA1.2.1402415944.1685737805&semt=sph",
            review: "Fantastic service and exceptional results. Highly recommended for small businesses!",
            rate: 5
        },
    ];


    var settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,

        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full md:w-[90%] lg:w-[75%] mx-auto pb-10">
            <h1 className="text-center pt-4 pb-6 text-4xl font-bold text-white">Client Reviews</h1>
            <Slider {...settings}>
                {clients.map((client) => (
                    <div className="mx-5">
                        <div className="flex justify-start items-start gap-2 border rounded-lg bg-[#182234] p-5 w-[380px]">
                            <div className="h-[60px] w-[60px] rounded-full">
                                <img
                                    src={client.image}
                                    alt="image3"
                                    className="h-[60px] w-[60px] rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold p-1 text-white">
                                    {client.name}
                                </h2>
                                <div className="flex justify-start items-center gap-1 ml-[2px]">


                                    {[1, 2, 3, 4, 5].map((rat) => (

                                        <Star className={`${client.rate >= rat ? 'text-[#FFA329]' : 'text-white'}`} />
                                    ))}
                                </div>
                                <p className="text-white p-1 w-[260px]">{client.review}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ClientReview;