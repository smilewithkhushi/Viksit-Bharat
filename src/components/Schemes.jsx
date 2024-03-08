"use client";

import Image from "next/image";
import next from "next";
import { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const schemes_data = [
  {
    id: 1,
    alt: "Ayushman Bharat Yojna",
    src: "/assets/scheme1.png",
    heading: "Ayushman Bharat Yojna",
  },
  {
    id: 2,
    alt: "Har Ghar Jal",
    src: "/assets/scheme2.png",
    heading: "Har Ghar Jal",
  },
  {
    id: 3,
    alt: "Atal Pension Yojana",
    src: "/assets/scheme3.png",
    heading: "Atal Pension Yojana",
  },
];

const Schemes = () => {
  return (
    <section className="w-full align-middle justify-center my-10 md:px-10">
        <h2 className="text-4xl text-white font-bold text-center mb-10">
          Glimpse of Viksit Bharat
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="md:w-full h-full m-4 align-middle justify-center"
        >
          {schemes_data.map((glimpse) => (

            <SwiperSlide
              key={glimpse.id}
              className="bg-white border-2 border-white rounded-2xl 
                align-middle justify-center
                shadow-xl m-4 shadow-black-200
              md:mx-4">

              <Image
                src={glimpse.src}
                alt={glimpse.alt}
                width={300}
                height={200}
                className="rounded-2xl m-2 align-middle justify-center"
              />
              <h1 className="md:text-2xl my-4 font-bold text-center">
                {glimpse.heading}
              </h1>

            </SwiperSlide>
          ))}
        </Swiper>

    </section>
  );
};

export default Schemes;
