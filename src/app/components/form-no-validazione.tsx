"use client"
import React, { useState } from 'react';


const PreFooterNo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    fotovoltaico: false,
    elettrico: false,
    altro: false,
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/candidature', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          fotovoltaico: false,
          elettrico: false,
          altro: false,
          privacy: false,
        });
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Si è verificato un errore durante l\'invio del messaggio.');
      }
    } catch (error) {
      console.error('Errore durante l\'invio:', error);
      alert('Si è verificato un errore di rete.');
    }
  };

  return (
    <div className="bg-[#164194] w-full text-white py-12 px-4 shadow-2xl" id="candidatura">


      <div className=" text-black py-8 px-4 rounded-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="md:col-span-1"></div>

        <div className="md:col-span-1">

          <h2 className="text-xl font-semibold text-center text-white">Scrivici per candidarti a una posizione di lavoro</h2>

         
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white"
                placeholder="Inserisci il tuo nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white"
                placeholder="Inserisci la tua email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">Telefono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white"
                placeholder="Inserisci il tuo numero di telefono"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">Messaggio</label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white"
                placeholder="Scrivi il tuo messaggio"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                className="mr-2 bg-amber-600"
                checked={formData.privacy}
                onChange={handleChange}
                required
              />
              <label htmlFor="privacy" className="text-sm text-white">Accetto la <a className='text-red-600 underline' href='/privacy'>privacy policy</a></label>
            </div>


            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md mt-4 w-full md:w-auto"
            >
              Invia
            </button>
          </form>
        </div>

        {/* Text Column */}
    

      </div>
      <div className="md:col-span-2"></div>

      {/* Footer Content */}
      <div className="bg-[#164194] grid grid-cols-1 md:grid-cols-4 gap-8 pl-[8%] pr-[8%] justify-between">
        <div className="md:col-span-1"></div>
        <div className="md:col-span-1"></div>

        {/* Seconda colonna di testo */}
        <div className="text-center md:text-left text-xs">

          <ul>

            <li>Sede legale: Via Mario Paitoni, 33 25010 Remedello (BS)</li>
            <li>Sede operativa:</li>
            <li>Via Turche, 5 25010 Remedello (BS)</li>
            <li>Tel: 030 99 53 315 </li>
            <li>Fax: 030 95 79 535 </li>
            <li>Email: info@elettroservice.eu </li>
            <li> <a className='text-red-600 underline' href='/privacy'>privacy policy</a></li>
            <li> <a className='text-red-600 underline' href='/cookie'>cookie policy</a></li>
          </ul>
        </div>

        {/* Colonna per i loghi */}
        <div className="flex items-center justify-center md:justify-start mt-6 md:mt-[-30px]">
          <a href="https://instagram.com/eselettroservicesrl/" target="_blank" rel="noopener noreferrer">
            <img src="/images/icone/Instagram.png" alt="" className="px-2" />
          </a>
          <a href="https://facebook.com/profile.php?id=100083526662488" target="_blank" rel="noopener noreferrer">
            <img src="/images/icone/Facebook.png" alt="" className="px-2" />
          </a>
          {/*
          <a href="https://linkedin.com/e-s-elettro-service/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <img src="/images/icone/LinkedIn.png" alt="" className="px-2" />
          </a>*/}
        </div>
      </div>
    </div>
  );
};

export default PreFooterNo;