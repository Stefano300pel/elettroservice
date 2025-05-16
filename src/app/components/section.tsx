"use client";
import React, { useEffect, useRef, useState } from "react";
import VanAnimation from "./VanAnimation";

const SezioneUno: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Rileva quando la sezione è visibile
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Abilita l'animazione quando la sezione è visibile
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);



  return (
    <div
      ref={sectionRef}
      className="relative w-full md:h-full bg-[#164194] py-4 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 px-4  min-h-screen"
    >

      {/* Linea orizzontale decorativa in alto 
    <div className="absolute top-0 left-0 w-full h-[10px] bg-white opacity-70 " />
    */}
      <img
        src="/images/grafica2.png"
        alt="Grafica"
        className="absolute mt-[-3%] left-0 w-[100%] opacity-70 rotate-[0.077deg]"
      />

      {/* Immagine grafica2 sopra tutto */}


      {/* Colonna centrale - Immagine e pallini */}
      <div className="relative flex justify-center items-center p-4 z-20">
        <div className="relative w-[80%] md:w-[66%] mt-[5%]">
          <img src="cartina.png" alt="Italy" className="w-auto h-auto" />
          {[
            { id: "lombardia", top: "17%", left: "31%", delay: "100" },
            { id: "emilia", top: "27%", left: "42%", delay: "200" },
            { id: "toscana", top: "37%", left: "40%", delay: "300" },
            { id: "molise", top: "52.7%", left: "66%", delay: "400" },
            { id: "puglia", top: "54%", left: "73%", delay: "500" },
            { id: "sicilia", top: "88%", left: "65%", delay: "600" },
          ].map(({ id, top, left, delay }) => (
            <div
              key={id}
              id={id}
              className={`absolute animate-pulse w-3 h-3 bg-[#E20613] rounded-full transition-all duration-700 ease-out transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              style={{
                top,
                left,
                transitionDelay: `${delay}ms`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Testo */}
      <div className="relative flex flex-col justify-center z-20">
        <div className="flex flex-col md:mt-[2%]">
          <VanAnimation />
          <div className="text-white text-xl">
            <p>
              <b>Elettroservice s.r.l</b> con il tempo si è evoluta, adattandosi
              alle richieste dei
            </p>
            <p>
              clienti: è per questo che a partire dal 2008 si è deciso di
              investire nel settore
            </p>
            <p>delle Energie rinnovabili, ora fiore all'occhiello dell'azienda.</p>
            <p>
              Grazie ai valori quali affidabilità e qualità del prodotto, abbiamo
            </p>
            <p>
              oltrepassato i confini della nostra provincia ottenendo appalti in
              tutta Italia:
            </p>
            <p>
              Molise, Puglia, Sicilia, Toscana, ed Emilia Romagna sono tra le
              regioni nelle
            </p>
            <p>
              quali abbiamo fornito assistenza e manutenzione
            </p>
          </div>
        </div>
      </div>

      {/* Colonna destra vuota */}
      <div className="flex justify-center items-center p-1 z-20">{/* Vuota */}</div>
    </div>
  );
};

export default SezioneUno;
