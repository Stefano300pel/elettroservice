"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './button';
import ButtonMenu from './button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Funzione per aprire/chiudere il menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleAnchorClick = async (anchor: string) => {
    const [path, id] = anchor.split('#');
  
    if (path && path !== window.location.pathname) {
      window.location.href = anchor;
      return;
    }
  
    setIsMenuOpen(false);
  
    // Aspetta che l'elemento sia nel DOM e abbia dimensioni valide
    const waitForElement = (id: string, timeout = 2000): Promise<HTMLElement | null> => {
      return new Promise((resolve) => {
        const start = Date.now();
  
        const check = () => {
          const el = document.getElementById(id);
          const ready = el && el.offsetHeight > 0;
  
          if (ready) {
            resolve(el);
          } else if (Date.now() - start > timeout) {
            resolve(null); // timeout
          } else {
            requestAnimationFrame(check);
          }
        };
  
        check();
      });
    };
  
    const el = await waitForElement(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Elemento #${id} non trovato o non pronto.`);
    }
  };
  
  
  
  
  

  useEffect(() => {
    setIsClient(true); // Imposta isClient a true dopo il primo rendering
  }, []);

  // Se non siamo nel lato client, non renderizzare
  if (!isClient) {
    return null;
  }

  return (
    <header>
      <div className="flex justify-between items-center mt-[1%]  ml-[5%]">
        {/* Logo a sinistra */}
        <div className="flex flex-col items-center">
          <Link href="/">
            <img src="/Logo.png" alt="Logo" className="3xl:w-[30%] 2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] w-[35%] mb-2 md:mb-[0px]" />
          </Link>
          <p className='hidden lg:block mr-[68.5%] text-lg text-[#164194]'>"Illuminiamo ogni contatto"</p>
        </div>

        {/* Menu laterale a tendina */}
        <div className={`fixed top-0 right-0 w-full h-full bg-[#164194] z-50 font-bold transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} lg:hidden`}>
          {/* Contenuto del menu */}

          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-[#ffff] text-5xl">
              × {/* Icona per chiudere il menu */}
            </button>
          </div>

          <nav className="p-2 flex items-center justify-center text-center">
            <ul>
              <li className="mb-5">
                <button onClick={() => handleAnchorClick('/#azienda')} className="text-white  hover:text-[#E20613]">
                  AZIENDA
                </button>
              </li>
              <li className="mb-5">
                <button onClick={() => handleAnchorClick('/#referenze')} className="text-white hover:text-[#E20613]">
                  REFERENZE
                </button>
              </li>
              <li className="mb-5">
                <button onClick={() => handleAnchorClick('/#cert')} className="text-white  hover:text-[#E20613]">
                  CERTIFICAZIONI
                </button>
              </li>
              <li className="mb-10">
                <button onClick={() => handleAnchorClick('/candidature')} className="text-white  hover:text-[#E20613]">
                  LAVORA CON NOI
                </button>
              </li>

              <div>
                <li className="mb-5">
                  <Link href="/#contattaci">
                    <Button href="/#contattaci" text="CONTATTACI" />
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>

        {/* Sfondo bianco sopra la navbar quando il menu è aperto */}
        <div className={`fixed top-0 w-full h-full bg-[#164194] z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} lg:hidden`}></div>

        {/* Hamburger Menu (visibile su mobile) */}
        <div className="lg:hidden absolute top-[34px] right-5 z-50 mb-2">
          <button onClick={toggleMenu} className="flex flex-col justify-center items-center space-y-1 w-8 h-8">
            <span className={`block h-1 w-6 bg-[#164194] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 w-6 bg-[#164194] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 w-6 bg-[#164194] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Menu Desktop */}
      <nav className={`lg:flex hidden absolute right-0 top-14 z-50 font-bold`}>
        <ul className="flex items-center space-x-[80px] text-white pr-[60px]">
          <li>
            <button onClick={() => handleAnchorClick('/#azienda')} className="text-[#164194] hover:text-red-500">
              AZIENDA
            </button>
          </li>
          <li>
            <button onClick={() => handleAnchorClick('/#referenze')} className="text-[#164194] hover:text-red-500">
              REFERENZE
            </button>
          </li>
          <li>
            <button onClick={() => handleAnchorClick('/#cert')} className="text-[#164194] hover:text-red-500">
              CERTIFICAZIONI
            </button>
          </li>

          <li>
            <button onClick={() => handleAnchorClick('/candidature')} className="text-[#164194]  hover:text-red-500">
              LAVORA CON NOI
            </button>
          </li>

          <li>
            <Link href="/#contattaci" >
              <Button href="/#contattaci" text="CONTATTACI" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
