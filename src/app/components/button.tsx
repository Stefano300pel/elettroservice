// components/Button.tsx
import React from 'react';

interface ButtonProps {
  href: string;
  text: string;
  onClick?: () => void; // Aggiungiamo il tipo per il prop onClick
}

const Button: React.FC<ButtonProps> = ({ href, text, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick} // Aggiungiamo l'handler onClick
      className="inline-block px-4 py-2 text-white bg-[#E20613] hover:bg-white hover:text-[#E20613]  rounded-full  transition-all duration-300 z-30"
    >
      {text} 
    </a>
  );
};

export default Button;
