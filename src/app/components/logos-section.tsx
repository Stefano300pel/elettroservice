import React from 'react';

const LogoSection: React.FC = () => {
  return (
    <section className="py-16 px-3 bg-white overflow-x-hidden" >
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Immagini dei loghi */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-32">
          {/* Primo logo */}
          <div className="w-[120px] h-[120px] mx-auto">
            <a href="/documenti/apave-attestato.jpg" target="_blank" rel="noopener noreferrer">
              <img src="apave.JPG" alt="Logo 1" className="w-full h-full object-contain cursor-pointer" />
            </a>
          </div>

          {/* Secondo logo */}
          <div className="w-[120px] h-[120px] mx-auto">
            <a  target="_blank" rel="noopener noreferrer">
              <img src="certificazione2.png" alt="Logo 2" className="w-[80%] h-auto object-contain cursor-pointer" />
            </a>
          </div>

          {/* Terzo logo */}
          <div className="w-[100px] h-[100px] mx-auto">
            <a href="/documenti/Attestato_GOLD.pdf" target="_blank" rel="noopener noreferrer">
              <img src="gold.jpeg" alt="Logo 3" className="w-full h-full object-contain cursor-pointer " />
            </a>
          </div>

          {/* Quarto logo */}
          <div className="w-[120px] h-[120px] mx-auto">
            <a href="/documenti/Attestato.pdf" target="_blank" rel="noopener noreferrer">
              <img src="LOGORTS.png" alt="Logo 4" className="mt-[7%] w-full h-full object-contain cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;