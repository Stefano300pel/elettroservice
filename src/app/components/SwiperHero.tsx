"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import router from "next/router";

export default function SwiperHero() {

  const handleAnchorClick = (anchor: string) => {
    const [path, id] = anchor.split('#');

    if (path && path !== window.location.pathname) {
      router.push(anchor); // vai alla pagina con hash
      setIsMenuOpen(false); // chiudi comunque il menu
      return;
    }

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // chiudi il menu mobile
    }
  };


  return (
    <div className="relative">
      {/*
<div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer text-white text-3xl select-none">
  &#10094;
</div>

<div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer text-white text-3xl select-none">
  &#10095;
</div>
*/}


      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        //pagination={{
        //clickable: true,
        //}}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[65vh] overflow-hidden">
            <img
              src="A1.jpeg"
              className="object-cover w-full h-full"
              alt="Slide 1"
            />
            <div className="absolute inset-0 bg-[rgba(22,65,148,0.4)]" />

            <div className="absolute bottom-[20%] left-[8%] right-[8%] text-white text-sm md:text-xl font-semibold text-left">
              <div className="flex items-start gap-4 max-w-[300px]">
                <img
                  src="g12.png"
                  className="w-10 md:w-16 h-auto mb-2"
                  alt="Icona"
                />
              </div>
              <p>
                Elettro Service celebra un traguardo importante: 25 anni di <br /> passione, impegno e innovazione.
                Il nostro viaggio continua… con <br /> lo stesso entusiasmo del primo giorno !!</p>

            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[65vh] overflow-hidden">
            <img
              src="A2.jpeg"
              className="object-cover w-full h-full"
              alt="Slide 1"
            />
            <div className="absolute inset-0 bg-[rgba(22,65,148,0.4)]" />

            <div className="absolute bottom-[20%] left-[8%] right-[8%] text-white text-sm md:text-xl font-semibold text-left">
              <p className="text-[#E20613] mb-2 text-2xl">NOVITÀ</p>
              <p>
                Nuovo reparto dedicato alla costruzione e al collaudo di quadri <br ></br> elettrici a bassa e media tensione. Un'area totalmente rinnovata, <br></br> attrezzata con tecnologie all'avanguardia e gestita da un team <br></br> specializzato, per garantire
                qualità sicurezza e affidabilità in ogni<br></br> progetto. Dalla progettazione al collaudo finale, siamo pronti a <br></br> rispondere alle esigenze di un mercato sempre più dinamico e<br></br> orientato all'innovazione.</p>
            </div>


          </div>
        </SwiperSlide>
        {/* Slide 2 */}

      </Swiper>
    </div>
  );
}
function setIsMenuOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}

