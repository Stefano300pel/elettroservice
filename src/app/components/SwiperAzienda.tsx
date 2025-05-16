"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Importa gli stili di Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function SwiperAzienda() {
  return (
    <div className="relative w-full h-full bg-[#164194]" id="azienda">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        <SwiperSlide className="h-full">
          <div className="flex flex-col md:flex-row h-full bg-[#164194] items-center py-[2%]">
            {/* Spazio a sinistra (8% della larghezza) */}
            <div className="w-[13%] h-[2%]" />

            {/* Sezione Immagine */}
            <div className="w-1/3 md:w-1/8 flex lg:justify-center justify-center ml-4 mr-4 md:ml-0 md:mr-0 h-full">
              <img
                src='./bandiera.jpg'
                className="object-cover w-[60%] h-full rounded-full border-4 border-[#E20613]  mt-0"
                alt="Slide 1 - Bandiera"
                style={{ maxHeight: 'none' }}
              />
            </div>

            {/* Sezione Testo */}
            <div className="w-full md:w-3/4 flex flex-col justify-start md:ml-[5%] md:mr-auto md:block h-full">
              <p className="text-base text-white md:text-xl  text-left h-full items-center mx-[3%] mt-[2%]">
                La ditta <span className='text-[#E20613]'><b>E.S Elettroservice S.r.l.</b></span> di Remedello Sopra realizza opere elettriche sia di tipo civile, sia di tipo industriale.
                L'azienda nasce nel 2000, oggi con una sede di 1500 mq che comprende uffici ed un laboratorio per il cablaggio ed il collaudo di quadri BT/MT (bassa e media tensione).
              </p>
            </div>
            {/* Spazio a destra (3% della larghezza) */}
            <div className="w-[19%] h-[2%]" />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}