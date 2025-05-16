"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel, Pagination } from 'swiper/modules';

export default function Certificazioni() {
  const swiperRef = useRef<any>(null);
  const [slideCount, setSlideCount] = useState(0); // Conteggio delle slide viste

  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current.swiper;
    const activeIndex = swiperInstance.activeIndex;
    const totalSlides = swiperInstance.slides.length;

    // Aggiorna il conteggio delle slide viste
    setSlideCount(activeIndex + 1);

    // Ogni 3 slide scorre alla sezione con id="25esimo"
    if ((slideCount + 1) % 3 === 0) {
      setTimeout(() => {
        // Scrolla alla sezione con id="25esimo"
        const section = document.getElementById("25esimo");
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' }); // Esegui lo scroll verso la sezione
        }
      }, 500); // Ritardo per evitare conflitti con l'animazione del swiper
    }
  };

  return (
    <>
    <div className="cert"  id="cert">
  
      </div>
    </>
  );
}
