"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



const LogoClienti: React.FC = () => {
  return (
    <section className="py-16 px-3 bg-white" id="referenze">
      <div className="relative max-w-screen-lg mx-auto">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1} // <-- default per mobile
          loop={true}
          autoplay={{ delay: 2500 }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              spaceBetween: 0, // <- mobile
              slidesPerView: 1,
            },
         
            760: {
              spaceBetween:60,
              slidesPerView: 4,
            },
            1080: {
              spaceBetween:80,
              slidesPerView: 4,
            },
          }}
        >


          <SwiperSlide>
          <div className="w-[100%]  h-[50%] sm:w-[162px] sm:h-[130px] flex items-center justify-center">
              <img
                src="1.png"
                alt="Logo1"
                className=" object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="w-[100%]  h-[50%] sm:w-[162px] sm:h-[130px] flex items-center justify-center">
              <img
                src="2.png"
                alt="Logo2"
                className=" object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="w-[100%]  h-[50%] sm:w-[162px] sm:h-[130px] flex items-center justify-center">
              <img
                src="3.png"
                alt="Logo3"
                className=" object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="w-[100%]  h-[50%] sm:w-[162px] sm:h-[130px] flex items-center justify-center">
              <img
                src="4.png"
                alt="Logo4"
                className=" object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="w-[100%]  h-[50%] sm:w-[162px] sm:h-[130px] flex items-center justify-center">
              <img
                src="5.png"
                alt="Logo5"
                className=" object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className="w-[100%]  h-[50%] sm:w-[162px] sm:h-[130px] flex items-center justify-center">
              <img
                src="6.png"
                alt="Logo6"
                className=" object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%] h-[50%] sm:w-[162px] sm:h-[130px] flex items-center justify-center">
              <img
                src="7.png"
                alt="Logo7"
                className=" object-contain"
              />
            </div>
          </SwiperSlide>

        </Swiper>

        {/* Frecce custom */}
        <div className="swiper-button-prev-custom hidden lg:block absolute -left-[5%] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-[#164194] text-3xl select-none">
          &#10094;
        </div>
        <div className="swiper-button-next-custom hidden lg:block absolute -right-[3%] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-[#164194] text-3xl select-none">
          &#10095;
        </div>
      </div>
    </section>
  );
};

export default LogoClienti;
