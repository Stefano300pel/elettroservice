"use client"
import React, { useState } from 'react';
import validator from 'validator'; // Importa il modulo validator per la validazione dell'email

const PreFooter: React.FC = () => {
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

  const [isSubmitting, setIsSubmitting] = useState(false); // Stato per tracciare la sottomissione
  const [errorMessage, setErrorMessage] = useState<string>(''); // Stato per i messaggi di errore
  const [emailValid, setEmailValid] = useState(true); // Stato per la validità dell'email

  // Gestore della modifica del form
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

    // Validazione dell'email durante la modifica
    if (name === 'email') {
      const isValid = validator.isEmail(value);
      setEmailValid(isValid);
      if (!isValid) {
        setErrorMessage('L\'indirizzo email non è valido.');
      } else {
        setErrorMessage('');
      }
    }
  };

  // Validazione del form prima di inviarlo
  const validateForm = () => {
    if (!emailValid) {
      setErrorMessage('L\'indirizzo email non è valido.');
      return false;
    }
    if (!formData.name || !formData.email || !formData.message || !formData.privacy) {
      setErrorMessage('Tutti i campi obbligatori devono essere compilati.');
      return false;
    }
    return true;
  };

  // Gestore dell'invio del form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Se la validazione del form fallisce, non inviare
    if (!validateForm()) {
      return;
    }

    // Se è in fase di invio, non permettere altri invii
    if (isSubmitting) {
      alert("Stai già inviando il modulo. Attendi un momento.");
      return;
    }

    setIsSubmitting(true); // Disabilita il pulsante di invio
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
    } finally {
      setIsSubmitting(false); // Riabilita il pulsante dopo l'invio
    }
  };

  return (
    <div className="bg-[#164194] w-full text-white py-12 px-4 shadow-2xl" id="candidatura">
      <div className="text-black py-8 px-4 rounded-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className={`mt-1 p-2 w-full rounded-md border ${emailValid ? 'border-gray-300' : 'border-red-500'} bg-white`}
                placeholder="Inserisci la tua email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {!emailValid && <p className="text-red-500 text-sm">{errorMessage}</p>} {/* Messaggio di errore */}
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
              disabled={isSubmitting}  // Disabilita il pulsante durante l'invio
            >
              Invia
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
