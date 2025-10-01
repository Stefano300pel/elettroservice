"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CirconferenzeEquidistanti = () => {
  const router = useRouter();

  const handleNavigateToSection = (section: string) => {
    router.push(`/realizzazioni?section=${section}`);
  };

  const handleNavigateToPage = () => {
    router.push(`/realizzazioni`);
  };

  return (
    <div className="flex justify-center items-center flex-col lg:flex-row relative bg-[#164194]">
      <div className="w-[15%] h-auto bg-[#164194]" />
      <div className="bg-[#164194] w-full h-full md:h-full py-10 px-4 relative transition duration-300">


        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center justify-center  xl:p-0">

          {/* Cerchio 1 - Opere elettriche (senza link) */}
          <div className="flex justify-center items-center flex-col lg:flex-row">

            <div className="flex flex-col items-center relative">
              <div className="w-28 h-28 rounded-full border-[4px] border-solid border-[#E20613] bg-white hover:shadow-[0_0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300 flex justify-center items-center">
                <button
                  onClick={() => handleNavigateToPage()}
                  className="w-28 h-28 rounded-full border-[4px] border-solid border-[#E20613] bg-white hover:shadow-[0_0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300 flex justify-center items-center cursor-pointer"
                >
                  <img src="images/icone/lightning-bolt.svg" className="w-16 h-16" alt="Icona" />
                </button>
              </div>
              <div className="hidden lg:block w-1 h-32 bg-[#E20613]"></div>
              <div className="hidden lg:block w-6 h-6  rounded-full border-[4px] border-solid border-[#E20613]"></div>
            </div>

            <div className="text-white pt-[10px] lg:pt-[112px] ">
              <h3 className="text-[#E20613] text-2xl"><span className="text-white"></span>
                <button
                  onClick={() => handleNavigateToPage()}
                  className="hover:underline cursor-pointer text-left"
                >
                  <b>Opere elettriche industriali e civili</b>
                </button>
              </h3>
              <p className="mt-2">
                Siamo specializzati nella progettazione, installazione e manutenzione di impianti elettrici.
                con anni di esperienza nel settore, siamo il partner ideale
                per garantire la sicurezza e l'efficienza dei tuoi impianti elettrici, sia per aziende
                che per abitazioni
              </p>
            </div>
          </div>

          {/* Cerchio 2 - Quadristica (con link) */}
          <div className="flex justify-center items-center flex-col lg:flex-row">
            <div className="flex flex-col items-center relative">
              <button
                onClick={() => handleNavigateToSection('Quadristica')}
                className="w-28 h-28 rounded-full border-[4px] border-solid border-[#E20613] bg-white hover:shadow-[0_0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300 flex justify-center items-center cursor-pointer"
              >
                <img src="images/icone/electrical-panel.svg" className="w-20 h-20" alt="Icona" />
              </button>
              <div className="hidden lg:block w-1 h-32 bg-[#E20613]"></div>
              <div className="hidden lg:block w-6 h-6  rounded-full border-[4px] border-solid border-[#E20613]"></div>
            </div>

            <div className="text-white pt-[10px] lg:pt-[112px]">
              <h3 className="text-[#E20613] text-2xl">
                <button
                  onClick={() => handleNavigateToSection('Quadristica')}
                  className="hover:underline cursor-pointer text-left"
                >
                  <b>Quadristica e automazione</b>
                </button>
              </h3>
              <p className="mt-2">
                Siamo specializzati nella progettazione, cablaggio e installazione di quadri elettrici.
                La nostra sede vanta di un laboratorio dedicato di oltre 160 mq per il cablaggio e il collaudo di
                quadri BT/MT (bassa e media tensione)

              </p>
            </div>
          </div>

          {/* Cerchio 3 - Fotovoltaico (con link) */}
          <div className="flex justify-center items-center flex-col lg:flex-row">
            <div className="flex flex-col items-center relative">
              <button
                onClick={() => handleNavigateToSection('Fotovoltaico')}
                className="w-28 h-28 rounded-full border-[4px] border-solid border-[#E20613] bg-white hover:shadow-[0_0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300 flex justify-center items-center cursor-pointer"
              >
                <img src="images/icone/solar-energy.svg" className="w-14 h-14" alt="Icona" />
              </button>
              <div className="hidden lg:block w-1 h-32 bg-[#E20613]"></div>
              <div className="hidden lg:block w-6 h-6  rounded-full border-[4px] border-solid border-[#E20613]"></div>
            </div>

            <div className="text-white pt-[10px] lg:pt-[112px] ">
              <h3 className="text-[#E20613] text-2xl">
                <button
                  onClick={() => handleNavigateToSection('Fotovoltaico')}
                  className="hover:underline cursor-pointer text-left"
                >
                  <b>Impianti fotovoltaici</b>
                </button>
              </h3>
              <p className="mt-2">
                Siamo specializzati nella progettazione, installazione e manutenzione di impianti fotovoltaici.
                Siamo qui per aiutarti a sfruttare l'energia del sole, riducendo i costi
                energetici e contribuendo a un futuro più sostenibile

              </p>
            </div>
          </div>

          {/* Cerchio 4 - Illuminazione (con link) */}
          <div className="flex justify-center items-center flex-col lg:flex-row">
            <div className="flex flex-col items-center relative">
              <button
                onClick={() => handleNavigateToSection('Illuminazione')}
                className="w-28 h-28 rounded-full border-[4px] border-solid border-[#E20613] bg-white hover:shadow-[0_0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300 flex justify-center items-center cursor-pointer"
              >
                <img src="images/icone/lamp-40.svg" className="w-16 h-16" alt="Icona" />
              </button>
              <div className="hidden lg:block w-1 h-32 bg-[#E20613]"></div>
              <div className="hidden lg:block w-6 h-6  rounded-full border-[4px] border-solid border-[#E20613]"></div>
            </div>

            <div className="text-white pt-[10px] xl:pt-[112px] ">
              <h3 className="text-[#E20613] text-2xl">
                <button
                  onClick={() => handleNavigateToSection('Illuminazione')}
                  className="hover:underline cursor-pointer text-left"
                >
                  <b>Impianti tecnologici e illuminazione</b>
                </button>
              </h3>
              <p className="mt-2">
                Offriamo soluzioni per progettazione e installazioni di impianti tecnologici.
                Sappiamo inoltre guidare il cliente verso una scelta consapevole dei corpi
                illuminanti per le diverse applicazioni: industriale, civile, logistica e zootecnica.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[15%] h-auto bg-[#164194]" />
    </div>
  );
};

export default CirconferenzeEquidistanti;