"use client";
import React, { useState, useEffect, useRef } from 'react';

const VanAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const vanRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted) {
            setIsVisible(true);
            setAnimationStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (vanRef.current) {
      observer.observe(vanRef.current);
    }

    return () => {
      if (vanRef.current) {
        observer.unobserve(vanRef.current);
      }
    };
  }, [animationStarted]);

  return (
    <div className="overflow-hidden relative w-full h-30 md:h-48 flex items-center md:justify-start" >
      {/* Furgone */}
      <div
        ref={vanRef}
        className={`absolute bottom-0 transition-all ${isVisible ? 'animate-moveVan opacity-100' : 'opacity-0'} z-20`}
      >
        <img
          src="furgoneES.png"
          alt="Furgone"
          className="w-[40%] md:w-[50%] lg:w-[60%] h-auto md:mb-[10%] xs:mb-0 sm:mb-0 2xl:mb-0 mt-4 xl:w-[60%] 2xl:w-[100%]"
        />
      </div>

      {/* Testo + linea animata */}
      <div
        className={`absolute top-18 lg:top-14 text-xl font-semibold z-10 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex flex-col relative md:top-10">
          <p className={`text-3xl 2xl:text-5xl text-white whitespace-nowrap ${isVisible ? 'animate-typing-text' : ''}`}>
            Elettroservice per l'Italia
          </p>

          <div className="relative mt-4 h-4 sm:block hidden">
            {/* Linea rossa animata */}
            <div className={`bg-[#E20613] h-[3px] relative ${isVisible ? 'animate-line-grow' : 'w-0'}`}>
              {/* Pallino all'estremità */}
              <div className="w-4 h-4 rounded-full bg-[#E20613] absolute right-0 top-[-6px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Style */}
      <style jsx>{`
        @keyframes moveVan {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes typingText {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes lineGrow {
          0% {
            width: 0;
          }
          100% {
            width: 150%;
          }
        }

        .animate-moveVan {
          animation: moveVan 4s ease-out forwards;
        }

        .animate-typing-text {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          width: 0;
          animation: typingText 3000ms steps(40) 0.2s forwards;
        }

        .animate-line-grow {
          animation: lineGrow 4000ms ease-out forwards; /* inizia dopo il typing */
        }
        
        @media (max-width: 1535px) {
          @keyframes moveVan {
            0% {
              transform: translateX(-60%);
            }
            100% {
              transform: translateX(125%);
            }
          }

          .xl\:w-\[60%\] {
            width: 60%;
          }
        }

        @media (max-width: 430px) {
          @keyframes moveVan {
            0% {
              transform: translateX(-40%);
            }
            100% {
              transform: translateX(155%);
            }
      
          }
          .animate-typing-text {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          width: 0;
          animation: typingText 2140ms steps(40) 0.2s forwards; 
          }
    
        }
      `}</style>
    </div>
  );
};

export default VanAnimation;
