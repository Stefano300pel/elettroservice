import React, { useState, useEffect, useRef } from 'react';

// Componente AnimatedImage
interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;  // Classe CSS aggiuntiva per l'immagine (opzionale)
  duration?: number;   // Durata dell'animazione (opzionale)
  threshold?: number;  // Percentuale della visibilità per attivare l'animazione (opzionale)
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  duration = 2500,
  threshold = 1,
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const imgElement = imgRef.current;

    if (!imgElement) return;

    // Creazione dell'osservatore di intersezione
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se l'immagine è visibile nella viewport e non è stata già animata
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.disconnect(); // Disconnessione dell'osservatore per evitare altre attivazioni
          }
        });
      },
      {
        root: null, // La root è la viewport
        threshold: threshold, // Quando il threshold è raggiunto (percentuale visibile dell'immagine)
      }
    );

    // Inizializza l'osservatore sull'elemento dell'immagine
    observer.observe(imgElement);

    // Cleanup quando il componente viene smontato
    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, threshold]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`${className} transition-opacity`}  // La transizione è solo su opacità
      style={{
        opacity: hasAnimated ? 1 : 0,
        transition: `opacity ${duration}ms ease-in-out`, // Imposta la durata della transizione direttamente
      }}
    />
  );
};

export default AnimatedImage;
